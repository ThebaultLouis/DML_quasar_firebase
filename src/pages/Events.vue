<template>
  <div>
    <Search />
    <Events :class="{ 'q-mx-xs': $q.screen.lt.sm }" />
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
