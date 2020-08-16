<template>
  <div>
    <!-- <q-table :data="events" /> -->
    <div v-for="event in events" :key="event._id">
      <Item v-bind="event" />
    </div>
    <q-separator />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Item from "components/event/Item";

export default {
  components: {
    Item
  },
  beforeMount() {
    this.$store.dispatch("event/fetchEvents");
  },
  computed: {
    ...mapGetters({
      events: "event/events"
    })
  },
  methods: {
    async onLoad(index, done) {
      await this.$store.dispatch("event/fetchMoreEvents");
      done();
    }
  }
};
</script>

<style></style>
