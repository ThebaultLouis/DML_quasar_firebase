<template>
  <div class="row q-ma-sm justify-end">
    <div class="col-12 col-sm-6 col-md-4">
      <q-input
        v-model="searchName"
        filled
        color="brown"
        label="Rechercher une danse"
        type="search"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    searchName: {
      get() {
        return this.$store.state.dance.searchName;
      },
      set(value) {
        this.$store.dispatch("dance/searchDances", value);
      }
    }
  }
};
</script>

<style></style>
