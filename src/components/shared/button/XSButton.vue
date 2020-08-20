<template>
  <q-btn
    v-if="link"
    type="a"
    :href="link"
    target="_blank"
    flat
    :color="color"
    :label="label"
  />
</template>

<script>
export default {
  props: ["link", "color", "label"]
}
</script>

<style></style>
