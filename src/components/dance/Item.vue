<template>
  <div v-if="!isDeleted">
    <div class="gt-xs">
      <DesktopItem
        v-on:deleted="isDeleted = true"
        v-bind="dance"
        :admin="admin"
      />
    </div>
    <div class="lt-sm">
      <MobileItem
        v-on:deleted="isDeleted = true"
        v-bind="dance"
        :admin="admin"
        class="q-my-md"
      />
    </div>
  </div>
</template>

<script>
import DesktopItem from "./responsive/DesktopItem"
import MobileItem from "./responsive/MobileItem"

export default {
  props: ["dance", "admin"],
  components: {
    DesktopItem,
    MobileItem
  },
  data: () => ({
    isDeleted: false
  })
}
</script>

<style></style>
