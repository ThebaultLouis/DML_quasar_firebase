<template>
  <div>
    <q-infinite-scroll @load="onLoad" :offset="250">
      <div v-for="classe in classes" :key="classe.id">
        <Item :classe="classe" />
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
import { mapState, mapGetters } from "vuex"

export default {
  components: {
    Item: () => import("components/classe/Item")
  },

  computed: {
    ...mapState({
      classes: state => state.classe.showedClasses
    }),
    ...mapGetters({
      isDone: "classe/isShowedClassesEqualsToClasses"
    })
  },

  methods: {
    async onLoad(index, done) {
      await this.$store.dispatch("classe/onLoad", {
        index,
        done
      })
    }
  }
}
</script>

<style></style>
