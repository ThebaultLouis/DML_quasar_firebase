<template>
  <div class="row items-center q-px-sm">
    <div class="col-12 col-sm-8">
      <div class="row items-cener q-gutter-x-sm ">
        <div class="col-3 text-subtitle2 ">
          {{ doneOn }}
        </div>
        <div class="col-4">
          {{ club }}
        </div>
        <div class="col-1">
          {{ zipcode }}
        </div>
        <div class="col-2">
          {{ city }}
        </div>
      </div>
    </div>
    <q-space />
    <div class="col-12 col-sm-4">
      <div class="row">
        <div class="col">
          <div class="row justify-center">
            <Button :link="posterPdf" icon="image" />
          </div>
        </div>
        <div class="col">
          <div class="row justify-center">
            <Button :link="playlistPdf" icon="queue_music" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "doneOn",
    "city",
    "zipcode",
    "club",
    "isAtHome",
    "playlistPdf",
    "posterPdf"
  ],
  components: {
    Button: () => import("components/shared/button/Button")
  },
  computed: {
    address() {
      return this.zipcode + " - " + this.city;
    }
  }
};
</script>

<style></style>
