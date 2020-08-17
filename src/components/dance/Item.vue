<template>
  <div>
    <div class="gt-xs">
      <DesktopItem v-bind="dance" :admin="admin" />
    </div>
    <div class="lt-sm">
      <MobileItem v-bind="dance" :admin="admin" />
    </div>
  </div>
</template>

<script>
import DesktopItem from "./responsive/DesktopItem";
import MobileItem from "./responsive/MobileItem";

export default {
  props: ["dance", "admin"],
  components: {
    DesktopItem,
    MobileItem
  }
};
</script>

<style></style>
