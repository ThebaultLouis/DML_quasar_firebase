import { db, utils } from "../../services/firebase";

export default {
  namespaced: true,
  state: {
    dances: [],
    filteredDances: [],
    searchName: ""
  },
  mutations: {
    setDances(state, dances) {
      state.dances = dances;
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
    }
  }
};
