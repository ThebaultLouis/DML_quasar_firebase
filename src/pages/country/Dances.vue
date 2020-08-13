<template>
  <div>
    <Dances />
  </div>
</template>

<script>
export default {
  components: {
    Dances: () => import("components/dance/ListItem")
  }
};
</script>

<style></style>
