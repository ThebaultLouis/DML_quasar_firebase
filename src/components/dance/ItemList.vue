<template>
  <div>
    <q-infinite-scroll @load="onLoad" :offset="250">
      <div v-for="dance in dances" :key="dance.id">
        <Item :dance="dance" />
      </div>

      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </div>
</template>

<script>
import { mapState } from "vuex"

import Item from "components/dance/Item"

export default {
  components: {
    Item
  },
  beforeMount() {
    this.$store.commit("dance/resetShowedDances")
  },
  computed: {
    ...mapState({
      dances: state => state.dance.showedDances
    })
  },
  methods: {
    async onLoad(index, done) {
      await this.$store.dispatch("dance/onLoad", {
        index,
        done
      })
    }
  }
}
</script>

<style></style>
