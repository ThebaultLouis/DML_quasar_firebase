<template>
  <q-item clickable :to="{ name: linkName }" active-class="text-brown">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>
        {{ title }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: ["title", "linkName", "icon"]
};
</script>

<style></style>
