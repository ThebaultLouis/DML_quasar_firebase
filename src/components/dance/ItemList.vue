<template>
  <div>
    <!-- <q-infinite-scroll @load="onLoad" :offset="100"> -->
    <div v-for="dance in dances" :key="dance._id">
      <q-separator />
      <Item v-bind="dance" />
    </div>
    <!-- </q-infinite-scroll> -->
    <q-separator />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
    Item: () => import("components/dance/Item")
  },
  beforeMount() {
    this.$store.dispatch("dance/initDances");
  },
  computed: mapState({
    dances: state => state.dance.dances
  }),
  methods: {
    async onLoad(index, done) {
      await this.$store.dispatch("dance/fetchMoreDances");
      done();
    }
  }
};
</script>

<style></style>
