<template>
  <q-card-actions vertical>
    <q-btn :to="{ name: updateLinkName, params: { id: id } }" flat color="red">
      Modifier
    </q-btn>
    <q-btn @click="remove" flat color="red">
      Supprimer
    </q-btn>
  </q-card-actions>
</template>

<script>
export default {
  props: ["id", "updateLinkName", "deleteActionName"],
  methods: {
    async remove() {
      this.$store.dispatch(this.deleteActionName, id)
      this.$emit("deleted", id)
    }
  }
}
</script>

<style></style>
