<template>
  <div class="row justify-center q-gutter-sm q-mt-sm">
    <div class="col-10 col-sm-6">
      <Section />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Section: () => import("./Section")
  },
  data: () => ({
    links: []
  })
};
</script>

<style></style>
