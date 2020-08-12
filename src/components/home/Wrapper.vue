<template>
  <div>
    <q-img :src="headerTitleImage" />
    <q-img :src="headerSubtitleImage" />
    <q-img :src="headerTitleImage">
      <slot> </slot>
    </q-img>
  </div>
</template>

<script>
export default {
  props: ["headerTitleImage", "headerSubtitleImage", "backgroundImage"]
};
</script>

<style></style>
