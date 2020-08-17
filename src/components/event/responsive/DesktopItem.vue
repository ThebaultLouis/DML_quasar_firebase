<template>
  <div>
    <!-- gt-xs -->
    <q-separator />
    <div class="row items-center q-px-sm" style="min-height:70px">
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
        <div class="row items-center">
          <div class="col text-center">
            <Button :link="posterPdf" icon="image" />
          </div>
          <div class="col text-center">
            <Button :link="playlistPdf" icon="queue_music" />
          </div>
          <div v-if="admin" class="col text-center">
            <q-btn flat size="25px" color="red" icon="close" />
          </div>
          <div v-if="admin" class="col text-center">
            <q-btn
              flat
              size="25px"
              color="amber-8"
              icon="east"
              :to="{ name: 'AdminUpdateEvent', params: { id: id } }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "components/shared/button/Button";
export default {
  props: [
    "id",
    "admin",
    "doneOn",
    "city",
    "zipcode",
    "club",
    "isAtHome",
    "playlistPdf",
    "posterPdf"
  ],
  components: {
    Button
  },
  computed: {
    address() {
      if (!this.zipcode) return this.city;
      if (!this.city) return this.zipcode;
      return this.city + " - " + this.zipcode;
    }
  }
};
</script>

<style></style>
