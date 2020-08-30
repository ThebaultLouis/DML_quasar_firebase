<template>
  <div>
    <q-card class="q-ma-sm">
      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ timestampToDate(doneOn) }}</div>
        <div class="text-caption text-grey">
          {{ club }}
        </div>
        <div class="text-caption text-grey">{{ address }}</div>
      </q-card-section>
      <q-card-actions vertical>
        <!-- <q-space /> -->
        <XSButton :link="posterPdf" label="Affiche" color="brown" />
        <XSButton :link="playlistPdf" label="Playlist" color="amber-8" />
      </q-card-actions>
      <q-separator />
      <MobileAdminActions
        v-if="isOnAdminPath"
        :id="id"
        updateLinkName="AdminUpdateEvent"
        deleteActionName="event/deleteEvent"
        v-on:deleted="$emit('deleted')"
      />
    </q-card>
  </div>
</template>

<script>
import XSButton from "components/shared/button/XSButton"
import MobileAdminActions from "components/shared/admin/MobileActions"
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
    XSButton,
    MobileAdminActions
  },
  computed: {
    address() {
      if (!this.zipcode) return this.city
      if (!this.city) return this.zipcode
      return this.city + " - " + this.zipcode
    }
  }
}
</script>

<style></style>
