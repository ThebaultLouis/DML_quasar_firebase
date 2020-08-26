<template>
  <div class="row">
    <div class="col">
      <Button :link="choreographyPdf" icon="picture_as_pdf" />
    </div>
    <div class="col">
      <Button :link="choreographyVideo" icon="music_video" />
    </div>
    <div class="col">
      <Button :link="songLink" icon="music_note" />
    </div>
  </div>
</template>

<script>
import Button from "./Button"
export default {
  props: ["choreographyPdf", "choreographyVideo", "songLink"],
  components: {
    Button
    // XSButton: () => import("components/shared/button/XSButton"),
    // MobileAdminActions: () => import("components/shared/admin/MobileActions"),
    // DesktopAdminActions: () => import("components/shared/admin/DesktopActions")
  }
}
</script>

<style></style>
