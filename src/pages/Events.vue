<template>
  <div>
    <Search />
    <Events />
  </div>
</template>

<script>
export default {
  components: {
    Search: () => import("components/event/Search"),
    Events: () => import("components/event/ItemList")
  }
};
</script>

<style></style>
