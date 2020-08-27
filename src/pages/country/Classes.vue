<template>
  <div>
    <Search />
    <Dances :class="{ 'q-mx-xs': $q.screen.lt.sm }" />
  </div>
</template>

<script>
export default {
  meta: {
    title: "Tous les cours de Country",
    meta: {
      ogTitle: {
        name: "og:title",
        content: "Tous les cours de Country"
      },
      ogUrl: {
        name: "og:url",
        content: "https://danse-musique-laille.web.app/country/classes"
      }
    }
  },
  components: {
    Search: () => import("components/classe/Search"),
    Dances: () => import("components/classe/ItemList")
  }
}
</script>

<style></style>
