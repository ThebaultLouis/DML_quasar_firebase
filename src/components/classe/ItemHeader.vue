<template>
  <div class="row items-center">
    <div class="col-12 col-sm">
      <div class="text-h5 q-mt-sm q-mb-xs">
        {{ learnedDance ? learnedDance.name : "Cours de révision" }}
      </div>
      <div class="text-caption text-grey">
        {{ timestampToDate(doneOn) }}
      </div>
    </div>
    <div class="col-12 col-sm-5 col-md-4">
      <div class="row gt-xs">
        <div class="col">
          <ButtonList
            v-if="learnedDance"
            :choreographyPdf="learnedDance.choreographyPdf"
            :choreographyVideo="learnedDance.choreographyVideo"
            :songLink="learnedDance.songLink"
            class="gt-xs"
          >
          </ButtonList>
        </div>
        <div v-if="isOnAdminPath" class="col-4">
          <DesktopAdminActions
            :id="id"
            v-on:deleted="$emit('deleted')"
            updateLinkName="AdminUpdateClasse"
            deleteActionName="classe/deleteClasse"
          >
          </DesktopAdminActions>
        </div>
      </div>

      <q-card-actions
        v-if="learnedDance"
        class="row lt-sm"
        vertical
        style="padding:0;margin:0"
      >
        <XSButton
          :link="learnedDance.choreographyPdf"
          color="brown"
          label="Pdf de la chorégraphie"
        />
        <XSButton
          :link="learnedDance.choreographyVideo"
          color="amber-8"
          label="Vidéo de la chorégraphie"
        />
        <XSButton
          :link="learnedDance.songLink"
          color="grey-7"
          label="Musique de la chorégraphie"
        />
        <!-- <q-separator v-if="isOnAdminPath" /> -->
        <MobileAdminActions
          v-if="isOnAdminPath"
          :id="id"
          v-on:deleted="$emit('deleted')"
          style="padding:0;margin:0"
          updateLinkName="AdminUpdateClasse"
          deleteActionName="classe/deleteClasse"
        />
      </q-card-actions>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "learnedDance", "doneOn"],
  components: {
    ButtonList: () => import("components/shared/button/ButtonList"),
    XSButton: () => import("components/shared/button/XSButton"),
    MobileAdminActions: () => import("components/shared/admin/MobileActions"),
    DesktopAdminActions: () => import("components/shared/admin/DesktopActions")
  }
}
</script>

<style></style>
