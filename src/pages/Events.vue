<template>
  <div>
    <Search />
    <Events :class="{ 'q-mx-xs': $q.screen.lt.sm }" />
  </div>
</template>

<script>
export default {
  meta: {
    title: "Toutes les manifestations enregistrées par l'association dml 35",
    meta: {
      ogTitle: {
        name: "og:title",
        content:
          "Toutes les manifestations enregistrées par l'association dml 35"
      },
      ogUrl: {
        name: "og:url",
        content: "https://danse-musique-laille.web.app/#/events"
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
