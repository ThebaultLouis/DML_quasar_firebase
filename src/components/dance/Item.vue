<template>
  <div class="row items-center">
    <div class="col text-h6 q-ml-sm">{{ name }}</div>
    <ButtonList
      :choreographyPdf="choreographyPdf"
      :choreographyVideo="choreographyVideo"
      :songLink="songLink"
    />
  </div>
</template>

<script>
import ButtonList from "components/shared/button/ButtonList";

export default {
  props: ["name", "choreographyPdf", "choreographyVideo", "songLink"],
  components: {
    ButtonList
  }
};
</script>

<style></style>
