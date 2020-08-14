<template>
  <div class="col-6">
    <div class="row">
      <div class="col-4">
        <Button :link="choreographyPdf" icon="picture_as_pdf" />
      </div>
      <div class="col-4">
        <Button :link="choreographyLink" icon="music_video" />
      </div>
      <div class="col-4">
        <Button :link="songLink" icon="music_note" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["choreographyPdf", "choreographyLink", "songLink"],
  components: {
    Button: () => import("components/shared/button/Button")
  }
};
</script>

<style></style>
