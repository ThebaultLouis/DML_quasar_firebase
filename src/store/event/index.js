import { v4 as uuidv4 } from "uuid";
import { db, utils } from "../../services/firebase";
import router from "../../router";
import { notification } from "../../services/notification";

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
    removeEvent(state, id) {
      state.events = state.events.filter(event => event.id != id);
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
    },
    async createEvent(
      context,
      { isUpdating, event, playlistPdfFile, posterPdfFile }
    ) {
      // Uploading file
      // TODO

      if (!isUpdating) {
        event.id = uuidv4();
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

      if (isUpdating) {
        var i = context.state.events.findIndex(event => event.id == event.id);
        context.state.events[i] = event;
      } else {
        context.state.events.unshift(event);
      }
      router().go(-1);
    },
    async deleteEvent(context, id) {
      await db
        .collection("events")
        .doc(id)
        .delete();
      context.commit("removeEvent", id);
    }
  }
};
