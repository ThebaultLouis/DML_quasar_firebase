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
        var i = state.fetchedDances.findIndex(d => d.id == dance.id)
        state.fetchedDances[i] = dance
      } else {
        state.fetchedDances.unshift(dance)
      }
    },
    removeDance(state, id) {
      state.dances = state.fetchedDances.filter(dance => dance.id != id)
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
      console.assert(dance.name, "Le nom de la dance ne doit pas être nulle")
      // Id
      if (!isUpdating) {
        dance.id = uuidv4()
      }

      // Uploading file
      if (choreographyPdfFile) {
        dance.choreographyPdf = await utils.uploadFileAndGetSecureURL(
          "dances",
          dance.id,
          "choreography",
          choreographyPdfFile
        )
      }

      // Name
      dance.name = dance.name.charAt(0).toUpperCase() + dance.name.slice(1)

      try {
        var response = await db
          .collection("dances")
          .doc(dance.id)
          .set(dance)
        notification.success(
          "La danse a bien été " + (isUpdating ? "modifiée" : "créée")
        )
      } catch (e) {
        notification.error("La danse n'a pas pu être ajoutée ou modifiée")
        return
      }
      context.commit("addDance", { dance, isUpdating })
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
