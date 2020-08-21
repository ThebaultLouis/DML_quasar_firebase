<template>
  <div v-if="!isDeleted">
    <!-- gt-xs -->
    <div class="gt-xs ">
      <DesktopItem
        v-on:deleted="isDeleted = true"
        v-bind="event"
        :admin="admin"
      />
    </div>
    <!-- lt-sm -->
    <div class="lt-sm">
      <MobileItem
        v-on:deleted="isDeleted = true"
        class="q-my-md"
        v-bind="event"
        :admin="admin"
      />
    </div>
  </div>
</template>

<script>
import DesktopItem from "./responsive/DesktopItem"
import MobileItem from "./responsive/MobileItem"
export default {
  props: ["event", "admin"],
  components: {
    DesktopItem,
    MobileItem
  },
  data: () => ({
    isDeleted: false
  }),
  computed: {
    address() {
      if (!this.zipcode) return this.city
      if (!this.city) return this.zipcode
      return this.city + " - " + this.zipcode
    }
  }
}
</script>

<style></style>
