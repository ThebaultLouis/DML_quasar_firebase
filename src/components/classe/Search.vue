<template>
  <div class="row q-my-sm q-px-sm">
    <div class="col-0 col-sm-2"></div>
    <div class="col-6 col-sm-4">
      <q-select
        filled
        v-model="model"
        :options="options"
        label="Niveau"
        color="brown"
        clearable
      />
    </div>
    <div class="col-1"></div>
    <div class="col-5 col-sm-3">
      <Calendar v-model="date" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Calendar: () => import("components/shared/date/Calendar")
  },
  data: () => ({
    model: null,
    options: ["Débutant", "Intermédiaire", "Avancé"],
    date: ""
  })
}
</script>

<style></style>
