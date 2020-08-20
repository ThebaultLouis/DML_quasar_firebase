<template>
  <div class="row">
    <div class="col">
      <q-file
        filled
        v-bind:file="file"
        v-on:change="$emit('change', $event.target.file)"
        label="Playlist"
      />
      <q-img
        class="q-my-sm"
        style="max-height:250px"
        contain
        v-if="fileUrl"
        :src="fileUrl"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["file", "url"],
  model: {
    prop: "file",
    event: "input"
  },
  model: {},
  computed: {
    fileUrl() {
      if (!this.file && !this.url) return null
      return this.file ? URL.createObjectURL(this.pfile) : this.url
    }
  }
}
</script>

<style></style>
