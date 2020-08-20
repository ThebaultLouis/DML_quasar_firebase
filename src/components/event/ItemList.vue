<template>
  <div>
    <q-infinite-scroll v-if="!isFiltering" @load="onLoad" :offset="250">
      <div v-for="event in events" :key="event._id">
        <Item :event="event" :admin="admin" />
      </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
    <div v-else>
      <div v-for="event in storeEvents" :key="event._id">
        <Item :event="event" :admin="admin" />
      </div>
    </div>
    <q-separator />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Item from "components/event/Item";

export default {
  props: ["admin"],
  components: {
    Item
  },
  data: () => ({
    fetchedEvents: [],
    filteredEvents: []
  }),
  computed: {
    ...mapGetters({
      storeEvents: "event/events",
      isFiltering: "event/isFiltering"
    }),
    events() {
      return this.isFiltering ? this.filteredEvents : this.fetchedEvents;
    }
  },
  methods: {
    async onLoad(index, done) {
      if (this.fetchedEvents) await this.$store.dispatch("event/fetchEvents");
      if (this.events.length <= this.storeEvents.length) {
        this.events.push(
          ...this.storeEvents.slice(10 * (index - 1), index * 10)
        );
        done();
      }
    }
  }
};
</script>

<style></style>
