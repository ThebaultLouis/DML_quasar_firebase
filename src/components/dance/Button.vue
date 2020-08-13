<template>
  <div class="col-2">
    <q-btn
      v-if="link"
      type="a"
      :href="link"
      target="_blank"
      flat
      :icon="icon"
      size="30px"
    />
  </div>
</template>

<script>
export default {
  props: ["link", "icon"]
};
</script>

<style></style>
