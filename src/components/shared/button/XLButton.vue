<template>
  <q-btn
    v-if="link"
    type="a"
    :href="link"
    target="_blank"
    flat
    color="red-5"
    :icon="icon"
    size="25px"
  />
</template>

<script>
export default {
  props: ["link", "icon"]
}
</script>

<style></style>
