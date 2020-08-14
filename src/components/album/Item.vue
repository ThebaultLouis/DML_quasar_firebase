<template>
  <div class="row justify-center">
    <div class="col-12 col-sm-8">
      <q-card>
        <q-item>
          <q-item-section>
            <q-item-label>{{ name }}</q-item-label>
            <q-item-label caption>{{ doneOn }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-carousel
          swipeable
          animated
          v-model="slide"
          thumbnails
          infinite
          :fullscreen.sync="fullscreen"
        >
          <q-carousel-slide
            v-for="(photo, index) in photos"
            :key="photo"
            :name="index"
            :img-src="photo"
          />
          <template v-slot:control>
            <q-carousel-control position="bottom-right" :offset="[18, 18]">
              <q-btn
                push
                round
                dense
                color="white"
                text-color="brown"
                :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreen = !fullscreen"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
      </q-card>
    </div>

    <!-- <q-card>
      <q-card />
      <div class="q-pa-md">
        
      </div>
    </q-card> -->
  </div>
</template>

<script>
export default {
  props: ["name", "doneOn", "photos"],
  data: () => ({
    slide: 0,
    fullscreen: false
  })
};
</script>

<style></style>
