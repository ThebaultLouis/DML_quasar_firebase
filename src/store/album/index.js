import { db, utils } from "../../services/firebase";

export default {
  namespaced: true,
  state: {
    albums: []
  },
  mutations: {
    setAlbums(state, albums) {
      state.albums = albums;
    }
  },
  actions: {
    async fetchAlbums(context) {
      if (context.state.albums.length) return;

      var docs = await db
        .collection("albums")
        .orderBy("doneOn", "desc")
        .get();
      var events = utils.docsIntoArray(docs);

      context.commit("setAlbums", events);
    }
  }
};
