<template>
  <div>
    <!-- gt-xs -->
    <div class="row items-center q-px-sm" style="min-height:70px">
      <q-separator />
      <div class="col-8">
        <div class="row items-center q-gutter-x-sm ">
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
      <div class="col-4">
        <div class="row items-center">
          <div class="col text-center">
            <Button :link="posterPdf" icon="image" />
          </div>
          <div class="col text-center">
            <Button :link="playlistPdf" icon="queue_music" />
          </div>
          <q-separator v-if="admin" vertical />
          <div class="col" v-if="admin">
            <DesktopAdminActions
              :id="id"
              updateLinkName="AdminUpdateEvent"
              deleteActioName="dance/deleteEvent"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "components/shared/button/Button";
import DesktopAdminActions from "components/shared/admin/DesktopActions";
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
    Button,
    DesktopAdminActions
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
