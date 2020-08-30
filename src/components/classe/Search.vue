<template>
  <div class="row q-my-sm q-px-sm">
    <div class="col-0 col-sm-2"></div>
    <div class="col-6 col-sm-4">
      <LevelButton v-model="model"> </LevelButton>
    </div>
    <div class="col-1"></div>
    <div class="col-5 col-sm-3">
      <Calendar
        :dates="$store.getters['classe/dates']"
        @input="value => $store.dispatch('classe/setDate', value)"
      >
      </Calendar>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Calendar: () => import("components/shared/date/Calendar"),
    LevelButton: () => import("components/classe/LevelButton")
  },
  data: () => ({
    model: null,
    date: ""
  }),
  watch: {
    model(option) {
      this.$store.dispatch("classe/setLevel", option)
    }
  }
}
</script>

<style></style>
