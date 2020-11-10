<template>
  <div>
    <div
      class="background q-pt-sm"
      v-bind:style="{
        'background-image': 'url(' + 'images/home/background-logo.jpg' + ')',
        height: $q.screen.lt.sm ? '400px' : 'calc(100vh - 50px)'
      }"
    >
      <div class="row justify-center">
        <div class="col-6 text-center">
          <q-img src="images/home/logo_white.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.background {
  background-position: bottom;
  max-height: calc(100vh - 50px);
  height: calc(100vh - 50px);
  background-size: cover;
}
</style>
