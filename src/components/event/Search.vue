<template>
  <div class="row q-ma-sm justify-end">
    <div class="col-12 col-sm-6 col-md-4">
      <q-select
        filled
        v-model="isAtHome"
        :options="options"
        label="Lieu"
        color="brown"
        clearable
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // Calendar: () => import("components/shared/date/Calendar")
  },
  data: () => ({
    model: null,
    options: [
      {
        label: "Domicile",
        value: true
      },
      {
        label: "Extérieur",
        value: false
      }
    ]
  }),
  computed: {
    isAtHome: {
      get() {
        return this.$store.state.event.isAtHome;
      },
      set(item) {
        this.$store.dispatch("event/setIsAtHome", item);
      }
    }
  }
};
</script>

<style></style>
