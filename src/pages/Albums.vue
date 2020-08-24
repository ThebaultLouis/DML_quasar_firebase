<template>
  <div>
    <Albums :class="{ 'q-mx-xs': $q.screen.lt.sm }" />
  </div>
</template>

<script>
export default {
  components: {
    Albums: () => import("components/album/ItemList")
  }
}
</script>

<style></style>
