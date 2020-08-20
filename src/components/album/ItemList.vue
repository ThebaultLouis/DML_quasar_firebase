<template>
  <q-infinite-scroll @load="onLoad" :offset="250">
    <div class="row justify-center q-gutter-sm">
      <div class="col-12 col-sm-6" v-for="album in albums" :key="album.id">
        <Item v-bind="album" :admin="admin" class="q-my-md" />
      </div>
    </div>
  </q-infinite-scroll>
</template>

<script>
import { mapState } from "vuex"

export default {
  props: ["admin"],
  components: {
    Item: () => import("components/album/Item")
  },
  data: () => ({
    albums: []
  }),
  computed: mapState({
    fetchedAlbums: state => state.album.albums
  }),
  methods: {
    async onLoad(index, done) {
      await this.$store.dispatch("album/fetchAlbums")
      if (this.albums.length <= this.fetchedAlbums.length) {
        this.albums.push(this.fetchedAlbums[this.albums.length])
        done()
      }
    }
  }
}
</script>

<style></style>
