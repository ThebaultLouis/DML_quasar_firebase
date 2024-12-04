<template>
  <div class="q-pa-sm">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <div class="row justify-center">
        <div class="col-10 col-sm-6 col-md-4">
          <q-input
            filled
            v-model="dance.name"
            label="Nom de la Danse"
            :rules="requiredRule"
          />
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-10 col-sm-6 col-md-4">
          <q-input
            filled
            v-model="dance.choreographerName"
            label="Nom du chorégraphe"
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
            v-model="dance.videoLink"
            filled
            color="brown"
            label="Lien Video de la danse"
          />
        </div>
        <div class="col-10 col-sm-6 col-md-3">
          <q-select
            filled
            clearable
            v-model="dance.level"
            :options="levels"
            label="Niveau"
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
import levels from '../Levels';

export default {
  data: () => ({
    levels: levels,
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
    // Fetch before update
    this.$store.dispatch("dance/fetchDances")
    // Updating
    var id = this.$route.params.id
    if (!id) return

    this.isUpdating = true
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
      this.isLoading = false
    }
  }
}
</script>

<style></style>
