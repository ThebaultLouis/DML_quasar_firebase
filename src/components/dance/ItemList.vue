<template>
  <div>
    <div>
      <div v-if="dances.length">
        <!-- <q-infinite-scroll @load="onLoad" :offset="250">
        <div v-for="dance in dances" :key="dance.id">
          <Item :admin="admin" :dance="dance" />
        </div>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll> -->
        <div v-for="dance in dances" :key="dance.id">
          <Item :admin="admin" :dance="dance" />
        </div>
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
  props: ["admin"],
  components: {
    Item
  },
  data: () => ({
    // dances: []
  }),
  async beforeMount() {
    if (this.dances.length) return;
    await this.$store.dispatch("dance/fetchDances");
  },
  computed: {
    ...mapGetters({ dances: "dance/dances" })
  },
  methods: {
    onLoad(index, done) {
      const step = 10;
      var indexStart = (index - 1) * 10;
      var indexEnd = index * 10;
      console.log(indexStart, indexEnd);
      this.dances.push(...this.storeDances.slice(indexStart, indexEnd));
      done();
    }
  }
};
</script>

<style></style>
