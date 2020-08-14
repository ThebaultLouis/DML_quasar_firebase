<template>
  <q-btn
    v-if="link"
    type="a"
    :href="link"
    target="_blank"
    flat
    color="brown"
    :icon="icon"
    size="25px"
  />
</template>

<script>
export default {
  props: ["link", "icon"]
};
</script>

<style></style>
