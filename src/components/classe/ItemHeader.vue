<template>
  <div class="row items-center">
    <div class="col">
      <div class="text-h5 q-mt-sm q-mb-xs">
        {{ learnedDance ? learnedDance.name : "Cours de révision" }}
      </div>
      <div class="text-caption text-grey">
        5 août 2020
      </div>
    </div>
    <ButtonList
      v-if="learnedDance"
      :choreographyPdf="choreographyPdf"
      :choreographyLink="choreographyLink"
      :songLink="songLink"
    />
  </div>
</template>

<script>
export default {
  props: [
    "learnedDance",
    "doneOn",
    "choreographyPdf",
    "choreographyLink",
    "songLink"
  ],
  components: {
    ButtonList: () => import("components/shared/button/ButtonList")
  }
}
</script>

<style></style>
