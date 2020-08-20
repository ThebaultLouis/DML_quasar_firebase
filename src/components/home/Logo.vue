<template>
  <div>
    <div
      class="background"
      v-bind:style="{
        'background-image': 'url(' + 'images/home/background-logo.png' + ')'
      }"
    >
      <div class="row justify-end">
        <div class="col-6">
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
  background: contain no-repeat;
  /* min-height: 500px; */
  /* background-size: contain; */
}
</style>
