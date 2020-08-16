import { db, utils } from "../../services/firebase";

const DANCES_PER_FETCHING = 10;

export default {
  namespaced: true,
  state: {
    dances: [],
    filteredDances: [],
    searchName: ""
  },
  mutations: {
    setDances(state, dances) {
      state.dances.push(...dances);
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
    lastFetchedDanceName(state) {
      if (!state.dances.length) return "";
      return state.dances[state.dances.length - 1].name;
    }
  },
  actions: {
    async fetchDances(context) {
      console.log(context.getters.lastFetchedDanceName);
      var docs = await db
        .collection("dances")
        .orderBy("name")
        .startAfter(context.getters.lastFetchedDanceName)
        .limit(DANCES_PER_FETCHING)
        .get();
      var dances = utils.docsIntoArray(docs);

      context.commit("setDances", dances);
    },
    async searchDances(context, searchName) {
      searchName = searchName.charAt(0).toUpperCase() + searchName.slice(1);
      context.commit("setSearchName", searchName);
      var docs = await db
        .collection("dances")
        .orderBy("name")
        .startAt(searchName)
        .endAt(searchName + "\uf8ff")
        .get();
      var dances = utils.docsIntoArray(docs);
      context.commit("setFilteredDances", dances);
    }
  }
};
