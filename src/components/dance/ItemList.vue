<template>
  <div>
    <div v-if="isFiltering">
      <div v-for="dance in filteredDances" :key="dance._id">
        <q-separator />
        <Item v-bind="dance" />
      </div>
      <q-separator />
    </div>
    <div v-else>
      <q-infinite-scroll @load="onLoad" :offset="250">
        <div v-for="dance in fetchedDances" :key="dance._id">
          <q-separator />
          <Item v-bind="dance" />
        </div>
      </q-infinite-scroll>
      <q-separator />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    Item: () => import("components/dance/Item")
  },
  beforeMount() {
    // if (this.fetchedDances.length) return;
    // this.$store.dispatch("dance/fetchDances");
  },
  computed: {
    ...mapState({
      fetchedDances: state => state.dance.dances,
      filteredDances: state => state.dance.filteredDances,
      isFiltering: state => state.dance.isFiltering
    }),
    ...mapGetters({ isFiltering: "dance/isFiltering" })
  },

  methods: {
    async onLoad(index, done) {
      await this.$store.dispatch("dance/fetchDances");
      done();
    }
  }
};
</script>

<style></style>
