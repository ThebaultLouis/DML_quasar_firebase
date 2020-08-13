<template>
  <div>
    <!-- <div class="row">
      <div class="col"></div>
      <div class="col-2 text-h6 text-center">pdf</div>
      <div class="col-2 text-h6 text-center">choregraphie</div>
      <div class="col-2 text-h6 text-center">musique</div>
    </div> -->
    <div v-for="dance in dances" :key="dance._id">
      <Item v-bind="dance" />
      <q-separator />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
    Item: () => import("components/dance/Item")
  },
  beforeMount() {
    console.log(this.dances);
  },
  computed: mapState({
    dances: state => state.dance.dances
  })
};
</script>

<style></style>
