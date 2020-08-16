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
export default {
  props: ["name", "choreographyPdf", "choreographyVideo", "songLink"],
  components: {
    ButtonList: () => import("components/shared/button/ButtonList")
  }
};
</script>

<style></style>
