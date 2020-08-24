import { v4 as uuidv4 } from "uuid"
import { db, utils } from "../../services/firebase"
import router from "../../router"
import { notification } from "../../services/notification"

// Modules
import dance from "../dance"
import { setLogLevel } from "firebase"

export default {
  namespaced: true,
  modules: {
    dance
  },
  state: {
    fetchedClasses: [],
    filteredClasses: [],
    dates: [],
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
    // Filter
    setFilteredClasses(state, classes) {
      state.filteredClasses = classes
    },
    // Dates
    setDates(state, dates) {
      state.dates = dates
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
    classes(state, getters) {
      return getters.isFiltering ? state.filteredClasses : state.fetchedClasses
    },
    classe: state => id => {
      return {
        ...state.fetchedClasses.find(classe => classe.id == id)
      }
    }
  },
  actions: {
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

      // Map Dates
      context.commit(
        "setDates",
        classes.map(classe => classe.doneOn)
      )

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
        // Return
        return classe
      })

      // console.log(classes)
      context.commit("setFetchedClasses", classes)
    },
    async setDate(context, date) {
      if (date) date = date.replaceAll("/", "-")
      context.commit("setSearchDate", date)
      await context.dispatch("searchClasses")
    },
    async setLevel(context, level) {
      context.commit("setSearchLevel", level ? level.value : null)
      await context.dispatch("searchClasses")
    },
    async searchClasses({ state, getters, commit }) {
      var classes = [...state.fetchedClasses]
      var search = state.search

      if (!getters["isFiltering"]) return

      if (search.date != null) {
        // Date
        classes = classes.filter(classe => classe.doneOn == search.date)
      }
      // Level
      if (search.level != null) {
        classes = classes.filter(classe => classe.level === search.level)
      }

      // Return
      commit("setFilteredClasses", classes)
    },
    async createDance(context, { isUpdating, classe }) {
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
