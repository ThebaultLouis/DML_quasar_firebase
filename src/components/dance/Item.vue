<template>
  <div>
    <div class="gt-xs row items-center">
      <div class="col text-h6 q-ml-sm">{{ name }}</div>
      <ButtonList
        :choreographyPdf="choreographyPdf"
        :choreographyVideo="choreographyVideo"
        :songLink="songLink"
      />
    </div>
    <div class="lt-sm">
      <q-card class="q-ma-sm">
        <q-card-section>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ name }}</div>
        </q-card-section>
        <q-card-actions vertical>
          <XSButton
            :link="choreographyPdf"
            color="brown"
            label="Pdf de la chorégraphie"
          />
          <XSButton
            :link="choreographyVideo"
            color="amber-8"
            label="Vidéo de la chorégraphie"
          />
          <XSButton
            :link="songLink"
            color="grey-7"
            label="Musique de la chorégraphie"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import XSButton from "components/shared/button/XSButton";
import ButtonList from "components/shared/button/ButtonList";

export default {
  props: ["name", "choreographyPdf", "choreographyVideo", "songLink"],
  components: {
    XSButton,
    ButtonList
  }
};
</script>

<style></style>
