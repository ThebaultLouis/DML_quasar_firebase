<template>
  <div>
    <Search />
    <q-separator class="gt-xs" />
    <Dances :class="{ 'q-mx-xs': $q.screen.lt.sm }" />
  </div>
</template>

<script>
export default {
  meta: {
    title: "Toutes les danses Country de l'association dml 35",
    meta: {
      ogTitle: {
        name: "og:title",
        content: "Toutes les danses Country de l'association dml 35"
      },
      ogUrl: {
        name: "og:url",
        content: "https://danse-musique-laille.web.app/#/country/dances"
      }
    }
  },
  components: {
    Search: () => import("components/dance/Search"),
    Dances: () => import("components/dance/ItemList")
  }
}
</script>

<style></style>
