<template>
  <div v-if="!isDeleted">
    <div class="gt-xs">
      <DesktopItem v-on:deleted="isDeleted = true" v-bind="dance" />
    </div>
    <div class="lt-sm">
      <MobileItem
        v-on:deleted="isDeleted = true"
        v-bind="dance"
        class="q-my-md"
      />
    </div>
  </div>
</template>

<script>
import DesktopItem from "./responsive/DesktopItem"
import MobileItem from "./responsive/MobileItem"

export default {
  props: ["dance"],
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
