<template>
  <div>
    <!-- <q-infinite-scroll @load="onLoad" :offset="100"> -->
    <div v-for="album in albums" :key="album._id">
      <Item v-bind="album" class="q-my-md" />
    </div>
    <!-- </q-infinite-scroll> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
    Item: () => import("components/album/Item")
  },
  beforeMount() {
    this.$store.dispatch("album/initAlbums");
  },
  computed: mapState({
    albums: state => state.album.albums
  })
};
</script>

<style></style>
