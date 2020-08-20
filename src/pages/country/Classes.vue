<template>
  <div>
    <Search />
    <Dances />
  </div>
</template>

<script>
export default {
  components: {
    Search: () => import("components/classe/Search"),
    Dances: () => import("components/classe/ItemList")
  }
}
</script>

<style></style>
