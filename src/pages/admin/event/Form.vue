<template>
  <div class="q-ma-sm">
    <!-- doneOn, club, zipcode, city, playlistPdf, posterPdf -->
    <div class="row q-gutter-sm justify-center">
      <div class="col-10 col-sm-3">
        <q-input filled v-model="event.club" label="Club" />
      </div>
      <div class="col-10 col-sm-3">
        <q-input filled v-model="event.city" label="Ville" />
      </div>
      <div class="col-10 col-sm-2">
        <q-input filled v-model="event.zipcode" label="Code postal" />
      </div>
      <div class="col-10 col-sm-3">
        <Calendar v-model="event.doneOn" />
      </div>
    </div>
    <div class="row justify-center q-ma-sm q-gutter-sm">
      <div class="col-12 col-sm-8 col-md-4">
        <q-file filled v-model="playlistPdfFile" label="Playlist" />
        <q-img
          class="q-my-sm"
          style="max-height:250px"
          contain
          v-if="playlistPdfUrl"
          :src="playlistPdfUrl"
        />
      </div>
      <div class="col-12 col-sm-8 col-md-4">
        <q-file filled v-model="posterPdfFile" label="Poster" />
        <q-img
          class="q-my-sm"
          style="max-height:250px"
          contain
          v-if="posterPdfUrl"
          :src="posterPdfUrl"
        />
      </div>
    </div>
    <div class="row justify-center q-mt-sm">
      <q-btn color="brown">
        Ajouter la manifestation
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Calendar: () => import("components/shared/date/Calendar")
  },
  data: () => ({
    event: {
      doneOn: null,
      club: null,
      zipcode: null,
      city: null,
      playlistPdf: null,
      posterPdf: null
    },

    playlistPdfFile: null,
    posterPdfFile: null
  }),
  beforeMount() {
    var id = this.$route.params.id;
    if (!id) return;

    this.event = this.$store.state.event.events.find(event => event.id == id);
  },
  computed: {
    playlistPdfUrl() {
      if (!this.playlistPdfFile && !this.event.playlistPdf) return null;
      return !this.playlistPdfFile
        ? this.event.playlistPdf
        : URL.createObjectURL(this.playlistPdfFile);
    },
    posterPdfUrl() {
      if (!this.posterPdfFile && !this.event.posterPdf) return null;
      return !this.posterPdfFile
        ? this.event.posterPdf
        : URL.createObjectURL(this.posterPdfFile);
    }
  }
};
</script>

<style></style>
