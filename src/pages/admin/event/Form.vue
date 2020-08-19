<template>
  <div class="q-ma-sm">
    <q-form @submit="onSubmit">
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
          <Calendar
            :date="event.doneOn"
            @input="value => (event.doneOn = value)"
          />
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
        <q-btn :loading="isLoading" type="submit" color="brown">
          {{
            isUpdating
              ? "Modifier la manifestation"
              : "Ajouter la manifestation"
          }}
        </q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  components: {
    Calendar: () => import("components/shared/date/Calendar")
  },
  data: () => ({
    isUpdating: false,
    isLoading: false,
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

    this.isUpdating = true;
    this.event = {
      ...this.$store.state.event.events.find(event => event.id == id)
    };
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
  },
  methods: {
    async onSubmit() {
      this.isLoading = true;

      await this.$store.dispatch("event/createEvent", {
        isUpdating: this.isUpdating,
        event: this.event,
        playlistPdfFile: this.playlistPdfFile,
        posterPdfFile: this.posterPdfFile
      });
    }
  }
};
</script>

<style></style>
