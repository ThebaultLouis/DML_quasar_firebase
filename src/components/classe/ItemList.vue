<template>
  <div>
    <q-infinite-scroll v-if="!isFiltering" @load="onLoad" :offset="250">
      <div v-if="classes.length">
        <div v-for="classe in classes" :key="classe.id">
          <Item :classe="classe" />
        </div>
      </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
    <div v-else>
      <div v-for="classe in storeClasses" :key="classe.id">
        <Item :classe="classe" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  components: {
    Item: () => import("components/classe/Item")
  },
  data: () => ({
    classes: []
  }),
  computed: {
    ...mapGetters({
      storeClasses: "classe/classes",
      isFiltering: "classe/isFiltering"
    })
  },

  methods: {
    async onLoad(index, done) {
      await this.$store.dispatch("classe/fetchClasses")
      if (this.classes.length <= this.storeClasses.length) {
        this.classes.push(
          ...this.storeClasses.slice(6 * (index - 1), index * 6)
        )
        done()
      }
    }
  }
}
</script>

<style></style>
