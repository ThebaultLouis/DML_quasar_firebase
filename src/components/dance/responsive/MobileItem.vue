<template>
  <div>
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
      <q-separator v-if="isOnAdminPath && !isOnClassePath" />
      <MobileAdminActions
        v-if="isOnAdminPath && !isOnClassePath"
        :id="id"
        updateLinkName="AdminUpdateDance"
        deleteActionName="dance/deleteDance"
        v-on:deleted="$emit('deleted')"
      />
    </q-card>
  </div>
</template>

<script>
import XSButton from "components/shared/button/XSButton"
import MobileAdminActions from "components/shared/admin/MobileActions"

export default {
  props: ["id", "name", "choreographyPdf", "choreographyVideo", "songLink"],
  components: {
    XSButton,
    MobileAdminActions
  }
}
</script>

<style></style>
