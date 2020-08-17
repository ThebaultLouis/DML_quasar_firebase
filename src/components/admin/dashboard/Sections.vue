<template>
  <div class="row justify-center q-gutter-md q-mt-sm">
    <div
      v-for="section in sections"
      :key="section.title"
      class="col-10 col-sm-6"
    >
      <Section v-bind="section" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Section: () => import("./Section")
  },
  data: () => ({
    sections: [
      {
        title: "Danses Country",
        createLinkName: "AdminCreateDance",
        listLinkName: "AdminDances"
      },
      {
        title: "Manifestations",
        createLinkName: "AdminCreateEvent",
        listLinkName: "AdminEvents"
      },
      {
        title: "Album",
        createLinkName: "AdminCreateAlbum",
        listLinkName: "AdminAlbums"
      }
    ]
  })
};
</script>

<style></style>
