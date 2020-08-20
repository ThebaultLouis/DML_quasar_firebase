<template>
  <div>
    <Search />
    <Events :admin="true" />
  </div>
</template>

<script>
export default {
  components: {
    Search: () => import("components/event/Search"),
    Events: () => import("components/event/ItemList")
  }
}
</script>

<style></style>
