<template>
  <q-select
    filled
    v-bind:value="value"
    v-on:input="option => $emit('input', option)"
    :options="options"
    label="Niveau"
    color="brown"
    clearable
  />
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
