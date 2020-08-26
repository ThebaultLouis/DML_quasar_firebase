<template>
  <div class="row">
    <div class="col">
      <Button :link="choreographyPdf" icon="picture_as_pdf" />
    </div>
    <div class="col">
      <Button :link="choreographyVideo" icon="music_video" />
    </div>
    <div class="col">
      <Button :link="songLink" icon="music_note" />
    </div>
  </div>
</template>

<script>
import Button from "./XLButton"
export default {
  props: ["choreographyPdf", "choreographyVideo", "songLink"],
  components: {
    Button
  }
}
</script>

<style></style>
