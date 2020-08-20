<template>
  <div>
    <q-infinite-scroll v-if="!isFiltering" @load="onLoad" :offset="250">
      <div v-if="dances.length">
        <div v-for="dance in dances" :key="dance.id">
          <Item :admin="admin" :dance="dance" />
        </div>
      </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
    <div v-else>
      <div v-for="dance in storeDances" :key="dance.id">
        <Item :admin="admin" :dance="dance" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"

import Item from "components/dance/Item"

export default {
  props: ["admin"],
  components: {
    Item
  },
  data: () => ({
    dances: []
  }),
  async beforeMount() {
    await this.$store.dispatch("dance/fetchDances")
  },
  computed: {
    ...mapGetters({
      storeDances: "dance/dances",
      isFiltering: "dance/isFiltering"
    })
  },

  methods: {
    async onLoad(index, done) {
      await this.$store.dispatch("dance/fetchDances")
      if (this.dances.length <= this.storeDances.length) {
        this.dances.push(
          ...this.storeDances.slice(10 * (index - 1), index * 10)
        )
        done()
      }
    }
  }
}
</script>

<style></style>
