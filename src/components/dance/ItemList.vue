<template>
  <div>
    <div>
      <div v-if="dances.length">
        <div v-for="dance in dances" :key="dance.id">
          <q-separator />
          <Item v-bind="dance" />
        </div>
        <q-separator />
      </div>
      <div v-else>
        <div class="row justify-center">
          <q-spinner color="brown" size="10em" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import Item from "components/dance/Item";

export default {
  components: {
    Item
  },
  beforeMount() {
    if (this.dances.length) return;
    this.$store.dispatch("dance/fetchDances");
  },
  computed: {
    ...mapGetters({ dances: "dance/dances" })
  }
};
</script>

<style></style>
