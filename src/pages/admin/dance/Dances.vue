<template>
  <div>
    <Search />
    <Dances :admin="true" />
  </div>
</template>

<script>
export default {
  components: {
    Search: () => import("components/dance/Search"),
    Dances: () => import("components/dance/ItemList")
  }
}
</script>

<style></style>
