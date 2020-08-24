<template>
  <div class="row items-center">
    <div class="col">
      <div class="text-h5 q-mt-sm q-mb-xs">
        {{ learnedDance ? learnedDance.name : "Cours de révision" }}
      </div>
      <div class="text-caption text-grey">
        {{ timestampToDate(doneOn) }}
      </div>
    </div>
    <div class="col-6 col-sm-5 col-md-4">
      <ButtonList
        v-if="learnedDance"
        :choreographyPdf="learnedDance.choreographyPdf"
        :choreographyLink="learnedDance.choreographyLink"
        :songLink="learnedDance.songLink"
      />
    </div>
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
