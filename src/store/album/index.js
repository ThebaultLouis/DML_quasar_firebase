import { v4 as uuidv4 } from "uuid"
import { db, utils } from "../../services/firebase"
import router from "../../router"
import { notification } from "../../services/notification"

export default {
  namespaced: true,
  state: {
    albums: [],
  },
  mutations: {
    setAlbums(state, albums) {
      state.albums = albums
    },
    addAlbum(state, album) {
      state.albums.unshift(album)
    },
    removeAlbum(state, id) {
      state.albums = state.albums.filter((album) => album.id != id)
    },
  },
  actions: {
    async fetchAlbums(context) {
      if (context.state.albums.length) return

      var docs = await db.collection("albums").orderBy("doneOn", "desc").get()
      var events = utils.docsIntoArray(docs)

      context.commit("setAlbums", events)
    },
    async createAlbum(context, { album, files }) {
      // Id
      album.id = uuidv4()

      // Uploading file
      // For car séquentielle avec les await contrairement à forEach
      album.photos = []
      for (var i = 0; i < files.length; i++) {
        album.photos.push(
          await utils.uploadFileAndGetSecureURL(
            "albums",
            album.id,
            i.toString(),
            files[i]
          )
        )
      }

      try {
        var response = await db.collection("albums").doc(album.id).set(album)
        notification.success("L'album photo a bien été créée")
      } catch (e) {
        console.log(e)
        notification.error("L'album photo n'a pas pu être ajoutée")
      }

      context.commit("addAlbum", album)
      router().go(-1)
    },
    async deleteAlbum(context, id) {
      await db.collection("albums").doc(id).delete()
      notification.success("L'album photo a bien été supprimé")
      context.commit("removeAlbum", id)
    },
  },
}
