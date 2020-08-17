<template>
  <div>
    <q-card class="q-ma-sm">
      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ doneOn }}</div>
        <div class="text-caption text-grey">
          {{ club }}
        </div>
        <div class="text-caption text-grey">{{ address }}</div>
      </q-card-section>
      <q-card-actions>
        <q-space />
        <XSButton :link="posterPdf" label="Affiche" color="brown" />
        <XSButton :link="playlistPdf" label="Playlist" color="amber-8" />
      </q-card-actions>
      <q-card-actions v-if="admin">
        <q-space />
        <XSButton :link="posterPdf" label="Supprimer" color="red" />
        <XSButton :link="posterPdf" label="Modifier" color="amber-8" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import XSButton from "components/shared/button/XSButton";
export default {
  props: [
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
    XSButton
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
