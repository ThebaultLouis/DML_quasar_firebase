<template>
  <div class="row items-center">
    <div class="col text-h6 q-ml-sm">{{ name }}</div>
    <ButtonList
      :choreographyPdf="choreographyPdf"
      :choreographyLink="choreographyLink"
      :songLink="songLink"
    />
  </div>
</template>

<script>
export default {
  props: ["name", "choreographyPdf", "choreographyLink", "songLink"],
  components: {
    ButtonList: () => import("components/shared/button/ButtonList")
  }
};
</script>

<style></style>
