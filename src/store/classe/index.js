import { v4 as uuidv4 } from "uuid"
import { db, utils } from "../../services/firebase"
import router from "../../router"
import { notification } from "../../services/notification"

// Modules
import dance from "../dance"

// Variables
const step = 5

export default {
  namespaced: true,
  modules: {
    dance
  },
  state: {
    fetchedClasses: [],
    showedClasses: [],
    search: {
      date: null,
      level: null
    }
  },
  mutations: {
    setFetchedClasses(state, classes) {
      state.fetchedClasses = classes
    },
    addClasse(state, { classe, isUpdating }) {
      if (isUpdating) {
        var i = state.fetchedClasses.findIndex(d => d.id == classe.id)
        state.fetchedClasses[i] = classe
      } else {
        state.fetchedClasses.unshift(classe)
      }
    },
    removeClasse(state, id) {
      state.classes = state.fetchedClasses.filter(classe => classe.id != id)
    },
    // showedClasses
    addToShowedClasses(state, classes) {
      state.showedClasses.push(...classes)
    },
    resetShowedClasses(state) {
      state.showedClasses = []
    },
    // Search
    setSearchDate(state, date) {
      if (date) state.search.date = date
      else state.search.date = null
    },
    setSearchLevel(state, level) {
      state.search.level = level
    }
  },
  getters: {
    isFiltering(state) {
      return state.search.date != null || state.search.level != null
    },
    isShowedClassesEqualsToClasses(state, getters) {
      return state.showedClasses.length == getters.classes.length
    },
    classes(state, getters) {
      // No filter
      if (!getters["isFiltering"]) return state.fetchedClasses
      // Filter
      var classes = [...state.fetchedClasses]
      var search = state.search

      // Date
      if (search.date) {
        classes = classes.filter(classe => classe.doneOn == search.date)
      }
      // Level
      if (search.level) {
        classes = classes.filter(classe => classe.level === search.level)
      }

      return classes
    },
    classe: state => id => {
      return {
        ...state.fetchedClasses.find(classe => classe.id == id)
      }
    },
    // Date
    dates(state, getters) {
      var classes = state.fetchedClasses
      if (state.search.level) {
        classes = classes.filter(classe => classe.level === search.level)
      }
      return classes.map(classe => classe.doneOn)
    }
  },
  actions: {
    // Showed Dances
    async onLoad({ state, getters, commit, dispatch }, { index, done }) {
      // Fetch
      await dispatch("fetchClasses")
      var classes = getters["classes"]
      if (!getters["isShowedClassesEqualsToClasses"]) {
        commit(
          "addToShowedClasses",
          classes.slice(step * (index - 1), step * index)
        )
        done()
      }
    },
    // Search
    async resetShowedClasses({ commit, dispatch }) {
      commit("resetShowedClasses")
      await dispatch("onLoad", { index: 1, done: () => {} })
    },
    async setDate({ commit, dispatch }, date) {
      if (date == "") return
      if (date) date = date.replaceAll("/", "-")
      commit("setSearchDate", date)
      await dispatch("resetShowedClasses")
    },
    async setLevel({ commit, dispatch }, level) {
      commit("setSearchLevel", level ? level.value : null)
      await dispatch("resetShowedClasses")
    },
    // Actions
    async fetchClasses(context) {
      if (context.state.fetchedClasses.length) return
      // Classes
      var docs = await db
        .collection("classes")
        .orderBy("doneOn", "desc")
        .get()
      var classes = utils.docsIntoArray(docs)
      // Dances
      await context.dispatch("dance/fetchDances")
      var dances = context.state.dance.fetchedDances

      // Map classe
      classes = classes.map(classe => {
        // Learned Dance
        if (classe.learnedDance) {
          classe.learnedDance = dances.find(
            dance => dance.id == classe.learnedDance
          )
        }
        // Reviewed Dances
        if (classe.reviewedDances) {
          classe.reviewedDances = classe.reviewedDances.map(reviewedDance =>
            dances.find(dance => dance.id == reviewedDance)
          )
        }
        return classe
      })

      // console.log(classes)
      context.commit("setFetchedClasses", classes)
    },
    async createClasse(context, { isUpdating, classe }) {
      // Assert
      console.assert(classe.doneOn, "Le cours doit avoir une date")

      // Id
      if (!isUpdating) {
        dance.id = uuidv4()
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
        notification.error("La danse n'a pas pu être ajoutée ou modifiée")
        return
      }
      context.commit("addDance", { dance, isUpdating })
      router().go(-1)
    },
    async deleteClasse(context, id) {
      await db
        .collection("dances")
        .doc(id)
        .delete()
      context.commit("removeDance", id)
      notification.success("La danse a bien été supprimée")
    }
  }
}
