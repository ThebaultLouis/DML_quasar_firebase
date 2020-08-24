<template>
  <div>
    <Search />
    <Dances :class="{ 'q-mx-xs': $q.screen.lt.sm }" />
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
