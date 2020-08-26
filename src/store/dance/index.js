import { v4 as uuidv4 } from "uuid"
import { db, utils } from "../../services/firebase"
import router from "../../router"
import { notification } from "../../services/notification"

// Variables
const step = 10

export default {
  namespaced: true,
  state: {
    fetchedDances: [],
    showedDances: [],
    searchName: ""
  },
  mutations: {
    setFetchedDances(state, dances) {
      state.fetchedDances = dances
    },
    addDance(state, { dance, isUpdating }) {
      if (isUpdating) {
        // FetchedDances
        var i = state.fetchedDances.findIndex(d => d.id == dance.id)
        state.fetchedDances[i] = dance
        // ShowedDances
        i = state.showedDances.findIndex(d => d.id == dance.id)
        if (i != -1) state.showedDances[i] = dance
      } else {
        // Fetched
        state.fetchedDances.unshift(dance)
        // Showed
        state.showedDances.unshift(dance)
      }
    },
    removeDance(state, id) {
      // Fetched
      state.fetchedDances = state.fetchedDances.filter(dance => dance.id != id)
      // Showed
      state.showedDances = state.showedDances.filter(dance => dance.id != id)
    },
    // showedDances
    addToShowedDances(state, dances) {
      state.showedDances.push(...dances)
    },
    resetShowedDances(state) {
      state.showedDances = []
    },
    // Search
    setSearchName(state, name) {
      state.searchName = name
    },
    clearSearchName(state) {
      state.searchName = ""
    }
  },
  getters: {
    isFiltering(state) {
      return state.searchName != ""
    },
    isShowedDancesEqualsToDances(state, getters) {
      return state.showedDances.length == getters.dances.length
    },
    dances(state, getters) {
      // No filter
      if (!getters.isFiltering) return state.fetchedDances
      // Filter
      var searchName = state.searchName.toLowerCase()
      return state.fetchedDances.filter(dance =>
        dance.name.toLowerCase().includes(searchName)
      )
    },
    dance: state => id => {
      return {
        ...state.fetchedDances.find(dance => dance.id == id)
      }
    }
  },
  actions: {
    // Showed Dances
    async onLoad({ state, getters, commit, dispatch }, { index, done }) {
      // Fetch
      await dispatch("fetchDances")
      var dances = getters["dances"]
      if (!getters["isShowedDancesEqualsToDances"]) {
        commit(
          "addToShowedDances",
          dances.slice(step * (index - 1), step * index)
        )
        done()
      } else {
        done(true)
      }
    },
    // Search
    async resetShowedDances({ commit, dispatch }) {
      commit("resetShowedDances")
      await dispatch("onLoad", { index: 1, done: () => {} })
    },
    async setSearchName({ commit, dispatch }, searchName) {
      commit("setSearchName", searchName)
      await dispatch("resetShowedDances")
    },
    // Fetch
    async fetchDances(context) {
      if (context.state.fetchedDances.length) return
      var docs = await db
        .collection("dances")
        .orderBy("name")
        .get()
      var dances = utils.docsIntoArray(docs)

      context.commit("setFetchedDances", dances)
    },
    // Actions
    async createDance(context, { isUpdating, dance, choreographyPdfFile }) {
      // Assert
      if (!dance.name) {
        notification.error("Le nom de la dance ne doit pas être nul")
        return
      }
      // Id
      if (!isUpdating) {
        dance.id = uuidv4()
      }
      // Name
      dance.name = dance.name.charAt(0).toUpperCase() + dance.name.slice(1)

      // Uploading file
      if (choreographyPdfFile) {
        dance.choreographyPdf = await utils.uploadFileAndGetSecureURL(
          "dances",
          dance.id,
          "choreography",
          choreographyPdfFile
        )
      }

      try {
        var response = await db
          .collection("dances")
          .doc(dance.id)
          .set(dance)
        notification.success(
          "La danse a bien été " + (isUpdating ? "modifiée" : "créée")
        )
      } catch (e) {
        notification.error(e.message)
        return
      }
      context.commit("addDance", {
        dance,
        isUpdating
      })
      router().go(-1)
    },
    async deleteDance(context, id) {
      await db
        .collection("dances")
        .doc(id)
        .delete()
      context.commit("removeDance", id)
      notification.success("La danse a bien été supprimée")
    }
  }
}
