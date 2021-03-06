import { v4 as uuidv4 } from "uuid"
import { db, utils } from "../../services/firebase"
import router from "../../router"
import { notification } from "../../services/notification"

// Variables
const step = 10

export default {
  namespaced: true,
  state: {
    fetchedEvents: [],
    showedEvents: [],
    search: {
      isAtHome: null,
      month: null
    }
  },
  mutations: {
    // Event
    setFetchedEvents(state, events) {
      state.fetchedEvents = events
    },
    addEvent(state, { event, isUpdating }) {
      if (isUpdating) {
        // Fetched
        var i = state.fetchedEvents.findIndex(d => d.id == event.id)
        state.fetchedEvents[i] = event
        // ShowedDances
        i = state.showedEvents.findIndex(d => d.id == event.id)
        if (i != -1) state.showedEvents[i] = event
      } else {
        // Fetched
        state.fetchedEvents.unshift(event)
        // Showed
        state.showedEvents.unshift(event)
      }
    },
    removeEvent(state, id) {
      // Fetched
      state.fetchedEvents = state.fetchedEvents.filter(event => event.id != id)
      // Showed
      state.showedEvents = state.showedEvents.filter(event => event.id != id)
    },
    // showedEvents
    addToShowedEvents(state, events) {
      state.showedEvents.push(...events)
    },
    resetShowedEvents(state) {
      state.showedEvents = []
    },
    // Search
    setIsAtHome(state, isAtHome) {
      state.search.isAtHome = isAtHome
    },
    setMonth(state, month) {
      state.search.month = month
    }
  },
  getters: {
    isFiltering(state) {
      var { isAtHome, month } = state.search
      return isAtHome != null || month != -1
    },
    isShowedEventsEqualsToEvents(state, getters) {
      return state.showedEvents.length == getters.events.length
    },
    events(state, getters) {
      // No filter
      if (!getters.isFiltering) return state.fetchedEvents

      // Filter
      var events = state.fetchedEvents
      var { isAtHome, month } = state.search

      // IsAtHome
      if (isAtHome) {
        events = events.filter(event => event.isAtHome == isAtHome.value)
      }

      // Month
      if (month != null) {
        var searchMonth = `-${month.toString().padStart(2, "0")}-`
        events = events.filter(event => event.doneOn.includes(searchMonth))
      }
      return events
    },
    event: state => id => {
      return {
        ...state.fetchedEvents.find(event => event.id == id)
      }
    }
  },
  actions: {
    // OnLoad
    async onLoad({ state, getters, commit, dispatch }, { index, done }) {
      // Fetch
      await dispatch("fetchEvents")
      var events = getters["events"]
      if (!getters["isShowedEventsEqualsToEvents"]) {
        commit(
          "addToShowedEvents",
          events.slice(step * (index - 1), step * index)
        )
        done()
      } else {
        done(true)
      }
    },
    // Search
    async resetShowedEvents({ commit, dispatch }) {
      commit("resetShowedEvents")
      await dispatch("onLoad", { index: 1, done: () => {} })
    },
    async setIsAtHome(context, isAtHome) {
      context.commit("setIsAtHome", isAtHome)
      await context.dispatch("resetShowedEvents")
    },
    async setMonth(context, month) {
      context.commit("setMonth", month)
      await context.dispatch("resetShowedEvents")
    },
    // Actions
    async fetchEvents(context) {
      if (context.state.fetchedEvents.length) return

      var now = new Date()
      var year = now.getFullYear()
      var month = now.getMonth() > 8 ? now.getMonth() : "0" + now.getMonth()
      var startDate = year + "-" + (month + 1)

      var docs = await db
        .collection("events")
        .orderBy("doneOn", "asc")
        .startAt(startDate)
        .get()
      var events = utils.docsIntoArray(docs)

      context.commit("setFetchedEvents", events)
    },
    async createEvent(
      context,
      { isUpdating, event, posterPdfFile, playlistPdfFile }
    ) {
      // Assert
      if (!event.doneOn) {
        notification.error("La manifestation doit avoir une date")
        return
      }
      // Updating
      if (!isUpdating) {
        event.id = uuidv4()
      }
      // DoneOn
      event.doneOn = event.doneOn.replaceAll("/", "-")
      // IsAtHome
      event.isAtHome = event.city == "Laillé"

      // Uploading file
      // Poster
      if (posterPdfFile) {
        event.posterPdf = await utils.uploadFileAndGetSecureURL(
          "events",
          event.id,
          "poster",
          posterPdfFile
        )
      }
      // Playlist
      if (playlistPdfFile) {
        event.playlistPdf = await utils.uploadFileAndGetSecureURL(
          "events",
          event.id,
          "playlist",
          playlistPdfFile
        )
      }

      try {
        var response = await db
          .collection("events")
          .doc(event.id)
          .set(event)
        notification.success(
          "La manifestation a bien été " + (isUpdating ? "modifiée" : "créée")
        )
      } catch (e) {
        notification.error(
          "La manifestation n'a pas pu être ajoutée ou modifiée"
        )
      }

      context.commit("addEvent", { event, isUpdating })
      router().go(-1)
    },
    async deleteEvent(context, id) {
      await db
        .collection("events")
        .doc(id)
        .delete()
      notification.success("La manifestation a bien été supprimée")
      context.commit("removeEvent", id)
    }
  }
}
