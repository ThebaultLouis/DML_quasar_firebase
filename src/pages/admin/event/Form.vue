<template>
  <div class="q-ma-sm">
    <q-form @submit="onSubmit">
      <div class="row q-gutter-sm justify-center">
        <div class="col-10 col-sm-3">
          <q-input v-model="event.club" filled label="Club"> </q-input>
        </div>
        <div class="col-10 col-sm-3">
          <q-input
            v-model="event.city"
            filled
            label="Ville"
            hint="Pour une manifestation à domicile écrire 'Laillé'"
          >
          </q-input>
        </div>
        <div class="col-10 col-sm-2">
          <q-input v-model="event.zipcode" filled label="Code postal">
          </q-input>
        </div>
        <div class="col-10 col-sm-3">
          <Calendar
            :date="event.doneOn"
            @input="value => (event.doneOn = value)"
          >
          </Calendar>
        </div>
      </div>
      <div class="row justify-center q-ma-sm q-gutter-sm">
        <div class="col-12 col-sm-8 col-md-4">
          <q-file v-model="playlistPdfFile" filled label="Playlist"> </q-file>
        </div>
        <div class="col-12 col-sm-8 col-md-4">
          <q-file v-model="posterPdfFile" filled label="Poster"> </q-file>
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
    // Fetch before update
    this.$store.dispatch("event/fetchEvents")
    // Updating
    var id = this.$route.params.id
    if (!id) return

    this.isUpdating = true
    this.event = this.$store.getters["event/event"](id)
  },

  methods: {
    async onSubmit() {
      this.isLoading = true

      await this.$store.dispatch("event/createEvent", {
        isUpdating: this.isUpdating,
        event: this.event,
        playlistPdfFile: this.playlistPdfFile,
        posterPdfFile: this.posterPdfFile
      })
    }
  }
}
</script>

<style></style>
