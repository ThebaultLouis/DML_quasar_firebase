<template>
  <div>
    <div class="row items-center" style="min-height:60px">
      <div class="col text-h6 q-ml-sm">
        {{ name }}
      </div>
      <q-space />
      <div class="col-6">
        <ButtonList
          :choreographyPdf="choreographyPdf"
          :choreographyVideo="choreographyVideo"
          :songLink="songLink"
        />
      </div>
      <q-separator v-if="isOnAdminPath && !isOnClassePath" vertical />
      <div class="col-2" v-if="isOnAdminPath && !isOnClassePath">
        <DesktopAdminActions
          :id="id"
          updateLinkName="AdminUpdateDance"
          deleteActionName="dance/deleteDance"
          v-on:deleted="$emit('deleted')"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Components
import ButtonList from "components/shared/button/ButtonList"
import DesktopAdminActions from "components/shared/admin/DesktopActions"
export default {
  props: ["id", "name", "choreographyPdf", "choreographyVideo", "songLink"],
  components: {
    ButtonList,
    DesktopAdminActions
  }
}
</script>

<style></style>
