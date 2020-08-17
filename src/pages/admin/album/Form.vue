<template>
  <div>
    <!-- Name, doneOn, photos -->
    <div class="row justify-center q-my-sm q-gutter-sm">
      <div class="col-10 col-sm-4">
        <q-input filled v-model="name" label="Nom de l'album" />
      </div>
      <div class="col-10 col-sm-4">
        <Calendar v-model="date" />
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-10 col-sm-6 col-md-4">
        <q-file
          v-model="files"
          label="Ajouter des photos"
          filled
          multiple
          append
        />
        <q-carousel
          v-if="files.length"
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
      <q-btn color="brown">
        Ajouter l'album
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
    name: null,
    date: null,
    files: [],
    slide: 0
  }),
  computed: {
    processedFiles() {
      return this.files.map(file => URL.createObjectURL(file));
    }
  }
};
</script>

<style></style>
