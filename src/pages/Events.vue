<template>
  <div>
    <Search />
    <Events :class="{ 'q-mx-xs': $q.screen.lt.sm }" />
  </div>
</template>

<script>
export default {
  meta: {
    title: "Toutes les manifestations",
    meta: {
      ogTitle: {
        name: "og:title",
        content: "Toutes les manifestations"
      },
      ogUrl: {
        name: "og:url",
        content: "https://danse-musique-laille.web.app/events"
      }
    }
  },
  components: {
    Search: () => import("components/event/Search"),
    Events: () => import("components/event/ItemList")
  }
}
</script>

<style></style>
