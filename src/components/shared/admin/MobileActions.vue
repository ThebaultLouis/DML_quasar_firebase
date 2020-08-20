<template>
  <q-card-actions vertical>
    <q-btn :to="{ name: updateLinkName, params: { id: id } }" flat color="red">
      Modifier
    </q-btn>
    <q-btn @click="$store.dispatch(deleteActionName, id)" flat color="red">
      Supprimer
    </q-btn>
  </q-card-actions>
</template>

<script>
export default {
  props: ["id", "updateLinkName", "deleteActionName"],
  methods: {
    delete() {
      this.$store.dispatch(this.deleteActionName, id)
    }
  }
}
</script>

<style></style>
