<template>
  <div class="row justify-center q-gutter-sm">
    <div class="col-12 col-sm-6" v-for="album in albums" :key="album._id">
      <Item v-bind="album" :admin="admin" class="q-my-md" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["admin"],
  components: {
    Item: () => import("components/album/Item")
  },
  beforeMount() {
    console.log(this.admin);
    if (this.albums.length) return;
    this.$store.dispatch("album/fetchAlbums");
  },
  computed: mapState({
    albums: state => state.album.albums
  })
};
</script>

<style></style>
