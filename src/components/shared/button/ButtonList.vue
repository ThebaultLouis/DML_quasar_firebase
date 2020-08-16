<template>
  <div class="col-6">
    <div class="row">
      <div class="col-4">
        <Button :link="choreographyPdf" icon="picture_as_pdf" />
      </div>
      <div class="col-4">
        <Button :link="choreographyVideo" icon="music_video" />
      </div>
      <div class="col-4">
        <Button :link="songLink" icon="music_note" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  props: ["choreographyPdf", "choreographyVideo", "songLink"],
  components: {
    Button
  }
};
</script>

<style></style>
