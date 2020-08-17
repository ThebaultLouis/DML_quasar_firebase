<template>
  <div>
    <Albums :admin="true" />
  </div>
</template>

<script>
export default {
  components: {
    Albums: () => import("components/album/ItemList")
  }
};
</script>

<style></style>
