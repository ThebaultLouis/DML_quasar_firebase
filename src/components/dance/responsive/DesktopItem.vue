<template>
  <div>
    <q-separator />
    <div class="row items-center">
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
      <q-separator v-if="admin" vertical />
      <div class="col-2" v-if="admin">
        <DesktopAdminActions
          :id="id"
          updateLinkName="AdminUpdateDance"
          deleteActionName="dance/deleteDance"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonList from "components/shared/button/ButtonList";
import DesktopAdminActions from "components/shared/admin/DesktopActions";
export default {
  props: [
    "admin",
    "id",
    "name",
    "choreographyPdf",
    "choreographyVideo",
    "songLink"
  ],
  components: {
    ButtonList,
    DesktopAdminActions
  }
};
</script>

<style></style>
