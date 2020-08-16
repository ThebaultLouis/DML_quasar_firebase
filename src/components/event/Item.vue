<template>
  <div>
    <q-separator />
    <div class="gt-xs row items-center q-px-sm" style="min-height:70px">
      <div class="col-12 col-sm-8">
        <div class="row items-cener q-gutter-x-sm ">
          <div class="col-3 text-subtitle2 ">
            {{ doneOn }}
          </div>
          <div class="col-4">
            {{ club }}
          </div>
          <div class="col-1">
            {{ zipcode }}
          </div>
          <div class="col-2">
            {{ city }}
          </div>
        </div>
      </div>
      <q-space />
      <div class="col-12 col-sm-4">
        <div class="row">
          <div class="col">
            <div class="row justify-center">
              <Button :link="posterPdf" icon="image" />
            </div>
          </div>
          <div class="col">
            <div class="row justify-center">
              <Button :link="playlistPdf" icon="queue_music" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lt-sm">
      <q-card class="q-ma-sm">
        <q-card-section>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ doneOn }}</div>
          <div class="text-caption text-grey">
            {{ club }}
          </div>
          <div class="text-caption text-grey">{{ address }}</div>
        </q-card-section>
        <q-card-actions>
          <q-space />
          <SmallButton :link="posterPdf" label="Affiche" color="brown" />
          <SmallButton :link="playlistPdf" label="Playlist" color="amber-8" />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import SmallButton from "./Button";
import Button from "components/shared/button/Button";
export default {
  props: [
    "doneOn",
    "city",
    "zipcode",
    "club",
    "isAtHome",
    "playlistPdf",
    "posterPdf"
  ],
  components: {
    Button,
    SmallButton
  },
  computed: {
    address() {
      if (!this.zipcode) return this.city;
      if (!this.city) return this.zipcode;
      return this.city + " - " + this.zipcode;
    }
  }
};
</script>

<style></style>
