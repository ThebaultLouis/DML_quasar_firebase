<template>
  <div class="q-pa-sm">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <div class="row justify-center">
        <div class="col-10 col-sm-6 col-md-4">
          <q-input
            filled
            v-model="dance.name"
            label="Nom de la musique"
            :rules="requiredRule"
          />
        </div>
      </div>
      <div class="row justify-center q-mt-sm q-gutter-sm">
        <div class="col-10 col-sm-6 col-md-3">
          <q-file
            v-model="choreographyPdfFile"
            filled
            color="brown"
            label="Pdf de la chorégraphie"
          />
        </div>
        <div class="col-10 col-sm-6 col-md-3">
          <q-input
            v-model="dance.choreographyVideo"
            filled
            color="brown"
            label="Lien vidéo de la chorégraphie"
          />
        </div>
        <div class="col-10 col-sm-6 col-md-3">
          <q-input
            v-model="dance.songLink"
            filled
            color="brown"
            label="Lien de la musique"
          />
        </div>
      </div>

      <div class="row justify-center q-mt-md">
        <q-btn :loading="isLoading" type="submit" color="brown">
          {{ isUpdating ? "Modifier la danse" : "Ajouter la danse" }}
        </q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    dance: {
      id: null,
      name: null,
      choreographyPdf: null,
      choreographyVideo: null,
      songLink: null
    },
    isLoading: false,
    isUpdating: false,
    choreographyPdfFile: null,
    requiredRule: [
      val => (val && val.length > 0) || "Ce champs ne doit pas être vide"
    ]
  }),
  beforeMount() {
    var id = this.$route.params.id
    if (!id) return

    this.isUpdating = true
    console.log(this.$store.getters)
    this.dance = this.$store.getters["dance/dance"](id)
  },
  methods: {
    async onSubmit() {
      this.isLoading = true
      await this.$store.dispatch("dance/createDance", {
        isUpdating: this.isUpdating,
        dance: this.dance,
        choreographyPdfFile: this.choreographyPdfFile
      })
    },
    reset() {
      this.dance = {
        id: null,
        name: null,
        choreographyPdf: null,
        choreographyVideo: null,
        songLink: null
      }
      // this.choreographyPdfFile = null;
    }
  }
}
</script>

<style></style>
