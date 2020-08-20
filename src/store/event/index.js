import { v4 as uuidv4 } from "uuid";
import { db, utils } from "../../services/firebase";
import router from "../../router";
import { notification } from "../../services/notification";

export default {
  namespaced: true,
  state: {
    fetchedEvents: [],
    filteredEvents: [],
    isAtHome: null
  },
  mutations: {
    setFetchedEvents(state, events) {
      state.fetchedEvents = events;
    },
    addEvent(state, { event, isUpdating }) {
      if (isUpdating) {
        var i = state.fetchedEvents.findIndex(d => d.id == event.id);
        state.fetchedEvents[i] = event;
      } else {
        state.fetchedEvents.unshift(event);
      }
    },
    removeEvent(state, id) {
      state.fetchedEvents = state.fetchedEvents.filter(event => event.id != id);
    },
    setFilteredDances(state, events) {
      state.filteredEvents = events;
    },
    setIsAtHome(state, isAtHome) {
      state.isAtHome = isAtHome;
    },
    setDate(state, date) {
      state.Date = date;
    }
  },
  getters: {
    events(state, getters) {
      return getters.isFiltering ? state.filteredEvents : state.fetchedEvents;
    },
    event: state => id => {
      return {
        ...state.fetchedEvents.find(event => event.id == id)
      };
    },
    isFiltering(state) {
      return state.isAtHome != null || state.date != null;
    }
  },
  actions: {
    async fetchEvents(context) {
      if (context.state.fetchedEvents.length) return;

      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth() > 8 ? now.getMonth() : "0" + now.getMonth();
      var startDate = year + "-" + month;

      var docs = await db
        .collection("events")
        .orderBy("doneOn", "asc")
        .startAt(startDate)
        .get();
      var events = utils.docsIntoArray(docs);

      context.commit("setFetchedEvents", events);
    },
    async setIsAtHome(context, isAtHome) {
      context.commit("setIsAtHome", isAtHome);
      context.dispatch("searchEvents");
    },
    async searchEvents(context) {
      var { isAtHome, fetchedEvents } = context.state;

      if (isAtHome == null) return;
      isAtHome = isAtHome.value;

      fetchedEvents = fetchedEvents.filter(event => event.isAtHome == isAtHome);

      context.commit("setFilteredDances", fetchedEvents);
    },
    async createEvent(
      context,
      { isUpdating, event, posterPdfFile, playlistPdfFile }
    ) {
      if (!isUpdating) {
        event.id = uuidv4();
      }

      // Uploading file
      // Poster
      if (posterPdfFile) {
        event.posterPdf = await utils.uploadFileAndGetSecureURL(
          "events",
          event.id,
          "poster",
          posterPdfFile
        );
      }
      // Playlist
      if (playlistPdfFile) {
        event.playlistPdf = await utils.uploadFileAndGetSecureURL(
          "events",
          event.id,
          "playlist",
          playlistPdfFile
        );
      }

      try {
        var response = await db
          .collection("events")
          .doc(event.id)
          .set(event);
        notification.success(
          "La manifestation a bien été " + (isUpdating ? "modifiée" : "créée")
        );
      } catch (e) {
        notification.error(
          "La manifestation n'a pas pu être ajoutée ou modifiée"
        );
      }

      context.commit("addEvent", { event, isUpdating });
      router().go(-1);
    },
    async deleteEvent(context, id) {
      await db
        .collection("events")
        .doc(id)
        .delete();
      notification.success("La manifestation a bien été supprimée");
      context.commit("removeEvent", id);
    }
  }
};
