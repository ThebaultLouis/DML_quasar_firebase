<template>
  <div>
    <Search />
    <br class="gt-xs q-my-xs" />
    <Dances :class="{ 'q-mx-xs': $q.screen.lt.sm }" />
  </div>
</template>

<script>
export default {
  meta: {
    title: "Toutes les danses Country",
    meta: {
      ogTitle: {
        name: "og:title",
        content: "Toutes les danses Country"
      },
      ogUrl: {
        name: "og:url",
        content: "https://danse-musique-laille.web.app/country/dances"
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
