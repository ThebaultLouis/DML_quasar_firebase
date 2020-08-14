<template>
  <div>
    <!-- <q-infinite-scroll @load="onLoad" :offset="100"> -->
    <div v-for="event in events" :key="event._id">
      <q-separator />
      <Item v-bind="event" />
    </div>
    <!-- </q-infinite-scroll> -->
    <q-separator />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
    Item: () => import("components/event/Item")
  },
  beforeMount() {
    this.$store.dispatch("event/initEvents");
  },
  computed: mapState({
    events: state => state.event.events
  }),
  methods: {
    async onLoad(index, done) {
      await this.$store.dispatch("event/fetchMoreEvents");
      done();
    }
  }
};
</script>

<style></style>
