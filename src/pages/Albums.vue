<template>
  <div>
    <Albums :class="{ 'q-mx-xs': $q.screen.lt.sm }" />
  </div>
</template>

<script>
export default {
  meta: {
    title: "Tous les albums photos de l'association dml 35",
    meta: {
      ogTitle: {
        name: "og:title",
        content: "Tous les albums photos de l'association dml 35"
      },
      ogUrl: {
        name: "og:url",
        content: "https://danse-musique-laille.web.app/#/albums"
      }
    }
  },
  components: {
    Albums: () => import("components/album/ItemList")
  }
}
</script>

<style></style>
