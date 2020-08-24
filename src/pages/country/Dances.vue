<template>
  <div>
    <Search />
    <q-separator class="gt-xs" />
    <Dances :class="{ 'q-mx-xs': $q.screen.lt.sm }" />
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
