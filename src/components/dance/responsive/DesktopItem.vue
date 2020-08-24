<template>
  <div>
    <q-separator />
    <div class="row items-center" style="min-height:50px">
      <div class="col-5 text-h6 q-ml-sm">
        {{ name }}
      </div>
      <q-space />
      <div class="col-4">
        <ButtonList
          :choreographyPdf="choreographyPdf"
          :choreographyVideo="choreographyVideo"
          :songLink="songLink"
        />
      </div>
      <q-separator v-if="isOnAdminPath" vertical />
      <div class="col-2" v-if="isOnAdminPath">
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
