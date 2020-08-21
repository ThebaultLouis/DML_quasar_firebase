<template>
  <div class="row justify-center">
    <div class="col text-center">
      <q-btn @click="remove" flat size="25px" color="red" icon="close" />
    </div>
    <div class="col text-center">
      <q-btn
        flat
        size="25px"
        color="amber-8"
        icon="east"
        :to="{ name: updateLinkName, params: { id: id } }"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "updateLinkName", "deleteActionName"],
  methods: {
    async remove() {
      await this.$store.dispatch(this.deleteActionName, this.id)
      this.$emit("deleted", this.id)
    }
  }
}
</script>

<style></style>
