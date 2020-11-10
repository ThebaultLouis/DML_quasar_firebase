<template>
  <div>
    <q-infinite-scroll @load="onLoad" :offset="250">
      <div class="row justify-center">
        <div class="col col-sm-10 col-md-8">
          <q-card class="gt-xs">
            <q-card-section>
              <div v-for="dance in dances" :key="dance.id">
                <Item :dance="dance" />
              </div>
            </q-card-section>
          </q-card>
          <div class="lt-sm">
            <div v-for="dance in dances" :key="dance.id">
              <Item :dance="dance" />
            </div>
          </div>
        </div>
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
