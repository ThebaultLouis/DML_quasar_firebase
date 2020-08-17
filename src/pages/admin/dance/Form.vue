<template>
  <div class="q-ma-sm">
    <div class="row justify-center">
      <div class="col-10 col-sm-6 col-md-4">
        <q-input filled v-model="dance.name" label="Nom de la musique" />
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
      <q-btn color="brown">
        Ajouter la danse
      </q-btn>
    </div>
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
    choreographyPdfFile: null
  }),
  beforeMount() {
    var id = this.$route.params.id;
    if (!id) return;

    this.dance = this.$store.state.dance.dances.find(dance => dance.id == id);
  }
};
</script>

<style></style>
