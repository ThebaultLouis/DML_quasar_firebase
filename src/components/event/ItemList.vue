<template>
  <div>
    <q-infinite-scroll @load="onLoad" :offset="250">
      <div class="row justify-center">
        <div class="col col-sm-8 col-md-6">
          <div v-for="event in events" :key="event._id">
            <Item :event="event" />
          </div>
        </div>
      </div>
      <template v-slot:loading>
        <div class="row justify-center">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
    <!-- <q-separator /> -->
  </div>
</template>

<script>
import { mapState } from "vuex"

import Item from "components/event/Item"

export default {
  components: {
    Item
  },

  computed: {
    ...mapState({
      events: state => state.event.showedEvents
    })
  },
  methods: {
    async onLoad(index, done) {
      await this.$store.dispatch("event/onLoad", {
        index,
        done
      })
    }
  }
}
</script>

<style></style>
