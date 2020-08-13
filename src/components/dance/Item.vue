<template>
  <div class="row items-center">
    <div class="col text-h6 q-ml-sm">{{ name }}</div>
    <Button :link="choreographyPdf" icon="picture_as_pdf" />
    <Button :link="choreographyLink" icon="music_video" />
    <Button :link="songLink" icon="music_note" />
  </div>
</template>

<script>
export default {
  props: ["name", "choreographyPdf", "choreographyLink", "songLink"],
  beforeMount() {
    console.log(this.name);
  },
  components: {
    Button: () => import("components/dance/Button")
  }
};
</script>

<style></style>
