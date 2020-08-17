<template>
  <q-card>
    <q-item>
      <q-item-section>
        <q-item-label>{{ name }}</q-item-label>
        <q-item-label caption>{{ doneOn }}</q-item-label>
      </q-item-section>
      <q-item-section v-if="admin">
        <div class="row justify-end">
          <q-btn size="20px" flat color="red" icon="close" />
          <!-- <q-btn size="20px" flat color="amber-8" icon="east" /> -->
        </div>
      </q-item-section>
    </q-item>

    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      :fullscreen.sync="fullscreen"
      transition-prev="jump-right"
      transition-next="jump-left"
      control-color="brown"
      navigation
      padding
      :arrows.sync="fullscreen"
      push
    >
      <q-carousel-slide
        v-for="(photo, index) in photos"
        :key="photo"
        :name="index"
      >
        <q-img class="full-height" :src="photo" contain />
      </q-carousel-slide>
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
</template>

<script>
export default {
  props: ["name", "doneOn", "photos", "admin"],
  data: () => ({
    slide: 0,
    fullscreen: false
  }),
  beforeMount() {
    console.log(this.admin);
  }
};
</script>

<style></style>
