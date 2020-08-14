<template>
  <div>
    <!-- <q-infinite-scroll @load="onLoad" :offset="100"> -->
    <div v-for="i in 5" :key="i">
      <!-- <div v-for="classe in classes" :key="classe._id"> -->
      <Item />
      <!-- <Item v-bind="classe" /> -->
    </div>
    <!-- </q-infinite-scroll> -->
    <q-separator />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
    Item: () => import("components/classe/Item")
  },
  beforeMount() {
    // console.log(this.classes);
    // this.$store.dispatch("classe/initClasses");
    this.$store.dispatch("dance/initDances");
  },
  computed: mapState({
    classes: state => state.classe.classes
  }),
  methods: {
    async onLoad(index, done) {
      await this.$store.dispatch("classe/fetchMoreClasses");
      done();
    }
  }
};
</script>

<style></style>
