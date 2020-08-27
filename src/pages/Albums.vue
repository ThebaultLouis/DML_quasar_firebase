<template>
  <div>
    <Albums :class="{ 'q-mx-xs': $q.screen.lt.sm }" />
  </div>
</template>

<script>
export default {
  meta: {
    title: "Tous les albums photos",
    meta: {
      ogTitle: {
        name: "og:title",
        content: "Tous les albums photos"
      },
      ogUrl: {
        name: "og:url",
        content: "https://danse-musique-laille.web.app/albums"
      }
    }
  },
  components: {
    Albums: () => import("components/album/ItemList")
  }
}
</script>

<style></style>
