import { v4 as uuidv4 } from "uuid";
import { db, utils } from "../../services/firebase";
import router from "../../router";
import { notification } from "../../services/notification";

export default {
  namespaced: true,
  state: {
    fetchedDances: [],
    dances: [],
    filteredDances: [],
    searchName: ""
  },
  mutations: {
    setDances(state, dances) {
      state.dances = dances;
    },
    addDance(state, { dance, isUpdating }) {
      if (isUpdating) {
        var i = context.state.dances.findIndex(d => d.id == dance.id);
        state.dances[i] = dance;
      } else {
        state.dances.unshift(dance);
      }
    },
    removeDance(state, id) {
      state.dances = state.dances.filter(dance => dance.id != id);
    },
    setSearchName(state, name) {
      state.searchName = name;
    },
    clearSearchName(state) {
      state.searchName = "";
    },
    setFilteredDances(state, dances) {
      state.filteredDances = dances;
    }
  },
  getters: {
    isFiltering(state) {
      return state.searchName != "";
    },
    dances(state, getters) {
      return getters.isFiltering ? state.filteredDances : state.dances;
    }
  },
  actions: {
    async fetchDances(context) {
      if (context.state.dances.length) return;
      var docs = await db
        .collection("dances")
        .orderBy("name")
        .get();
      var dances = utils.docsIntoArray(docs);

      context.commit("setDances", dances);
    },
    async searchDances(context, searchName) {
      // searchName = searchName.charAt(0).toUpperCase() + searchName.slice(1);
      context.commit("setSearchName", searchName);
      searchName = searchName.toLowerCase();
      var dances = context.state.dances.filter(dance =>
        dance.name.toLowerCase().includes(searchName)
      );
      context.commit("setFilteredDances", dances);
    },
    async createDance(context, { isUpdating, dance, choreographyPdfFile }) {
      // Assert
      console.assert(dance.name, "Le nom de la dance ne doit pas être nulle");
      // Id
      if (!isUpdating) {
        dance.id = uuidv4();
      }

      // Uploading file
      if (choreographyPdfFile) {
        dance.choreographyPdf = await utils.uploadFileAndGetSecureURL(
          "dances",
          dance.id,
          "choreography",
          choreographyPdfFile
        );
        console.log(dance.choreographyPdf);
      }

      try {
        var response = await db
          .collection("dances")
          .doc(dance.id)
          .set(dance);
        notification.success(
          "La danse a bien été " + (isUpdating ? "modifiée" : "créée")
        );
      } catch (e) {
        notification.error("La danse n'a pas pu être ajoutée ou modifiée");
      }
      context.commit("addDance", { dance, isUpdating });
      router().go(-1);
    },
    async deleteDance(context, id) {
      await db
        .collection("dances")
        .doc(id)
        .delete();
      context.commit("removeDance", id);
      notification.success("La danse a bien été supprimée");
    }
  }
};
