<template>
  <q-select
    v-bind:value="value"
    :options="options"
    v-on:input="option => $emit('input', option)"
    filled
    label="Niveau"
    color="brown"
    clearable
  >
  </q-select>
</template>

<script>
export default {
  props: ["value"],
  data: () => ({
    options: [
      {
        label: "Débutant",
        value: "BEGINNER"
      },
      {
        label: "Novice",
        value: "NOVICE"
      },
      {
        label: "Intermédiaire",
        value: "INTERMEDIATE"
      }
    ]
  })
}
</script>

<style></style>
