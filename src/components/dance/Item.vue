<template>
  <div class="row items-center">
    <div class="col text-h6 q-ml-sm">{{ name }}</div>
    <ButtonList
      :choreographyPdf="choreographyPdf"
      :choreographyLink="choreographyLink"
      :songLink="songLink"
    />
    <!-- <Button :link="choreographyPdf" icon="picture_as_pdf" />
    <Button :link="choreographyLink" icon="music_video" />
    <Button :link="songLink" icon="music_note" /> -->
  </div>
</template>

<script>
export default {
  props: ["name", "choreographyPdf", "choreographyLink", "songLink"],
  components: {
    ButtonList: () => import("components/dance/ButtonList")
    // Button: () => import("components/dance/Button")
  }
};
</script>

<style></style>
