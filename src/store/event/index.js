import { db, utils } from "../../services/firebase";

export default {
  namespaced: true,
  state: {
    events: [],
    filteredEvents: [],
    isAtHome: null,
    date: null
  },
  mutations: {
    setEvents(state, events) {
      state.events = events;
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
    isFiltering(state) {
      return state.isAtHome != null || state.date != null;
    },
    events(state, getters) {
      return getters.isFiltering ? state.filteredEvents : state.events;
    }
  },
  actions: {
    async fetchEvents(context) {
      if (context.state.events.length) return;

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

      context.commit("setEvents", events);
    },
    async setIsAtHome(context, isAtHome) {
      context.commit("setIsAtHome", isAtHome);
      context.dispatch("searchEvents");
    },
    async setDate(context, date) {
      context.commit("setDate", date);
      context.dispatch("searchEvents");
    },
    async searchEvents(context) {
      var { isAtHome, date, events } = context.state;
      isAtHome = isAtHome.value;

      if (isAtHome == null && date == null) return;

      if (isAtHome != null) {
        events = events.filter(event => event.isAtHome == isAtHome);
      }

      if (date != null) events = events.filter(event => event.doneOn == date);

      context.commit("setFilteredDances", events);
    }
  }
};
