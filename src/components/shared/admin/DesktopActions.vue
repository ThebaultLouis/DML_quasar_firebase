<template>
  <div class="row justify-center">
    <div class="col text-center">
      <q-btn
        @click="$store.dispatch(deleteActionName, id)"
        flat
        size="25px"
        color="red"
        icon="close"
      />
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
    delete() {
      this.$store.dispatch(this.deleteActionName, id);
    }
  }
};
</script>

<style></style>
