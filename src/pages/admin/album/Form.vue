<template>
  <div>
    <!-- Name, doneOn, photos -->
    <q-form @submit="onSubmit">
      <div class="row justify-center q-my-sm q-gutter-sm">
        <div class="col-10 col-sm-4">
          <q-input filled v-model="album.name" label="Nom de l'album" />
        </div>
        <div class="col-10 col-sm-4">
          <Calendar
            :date="album.doneOn"
            @input="value => (album.doneOn = value)"
          />
        </div>
      </div>
      <div class="row justify-center">
        <div class="col-10 col-sm-6 col-md-4">
          <q-file
            v-model="album.photos"
            label="Ajouter des photos"
            filled
            multiple
            append
          />
          <q-carousel
            v-if="album.photos.length"
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="brown"
            navigation
            padding
            arrows
            height="300px"
            class="q-mt-sm bg-grey-1 shadow-2 rounded-borders"
          >
            <q-carousel-slide
              v-for="(file, index) in processedFiles"
              :key="index"
              :name="index"
            >
              <q-img class="full-height" :src="file" contain> </q-img>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
      <div class="row justify-center q-mt-sm">
        <q-btn :loading="isLoading" type="submit" color="brown">
          Ajouter la manifestation
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
    isLoading: false,
    album: {
      name: null,
      doneOn: null,
      photos: []
    },

    slide: 0
  }),
  computed: {
    processedFiles() {
      return this.album.photos.map(file => URL.createObjectURL(file));
    }
  },
  methods: {
    async onSubmit() {
      this.isLoading = true;
      await this.$store.dispatch("album/createAlbum", {
        album: this.album
      });
    }
  }
};
</script>

<style></style>
