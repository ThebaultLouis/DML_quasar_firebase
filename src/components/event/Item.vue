<template>
  <div v-if="!isDeleted">
    <MobileItem
      v-on:deleted="isDeleted = true"
      class="q-my-md"
      v-bind="event"
    />
  </div>
</template>

<script>
// import DesktopItem from "./responsive/DesktopItem"
import MobileItem from "./responsive/MobileItem"
export default {
  props: ["event"],
  components: {
    // DesktopItem,
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
