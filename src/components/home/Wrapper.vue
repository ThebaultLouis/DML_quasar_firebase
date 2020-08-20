<template>
  <div>
    <div class="q-pa-sm bg-amber-2">
      <div class="row justify-center">
        <div class="col-11 col-sm-6">
          <q-img :src="titlePath" />
        </div>
      </div>
    </div>
    <q-img :src="subtitlePath" />
    <!-- <div :style="{background-image : url(backgroundPath}"> -->
    <div
      class="background"
      v-bind:style="{ 'background-image': 'url(' + backgroundPath + ')' }"
    >
      <q-page-container>
        <div class="row justify-center">
          <slot> </slot>
        </div>
      </q-page-container>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image"],
  computed: {
    titlePath() {
      return "/images/home/title/" + this.image
    },
    subtitlePath() {
      return "/images/home/subtitle/" + this.image
    },
    backgroundPath() {
      return "/images/home/background/" + this.image
    }
  }
}
</script>

<style>
.background {
  /* background: center / contain no-repeat; */
  background-size: cover;
}
</style>
