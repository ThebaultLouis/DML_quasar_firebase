<template>
  <q-card>
    <q-card-section>
      <div class="text-h5 q-mt-sm q-mb-xs">Albums</div>
    </q-card-section>
    <q-card-actions vertical="">
      <q-btn
        :to="{ name: 'AdminCreateAlbum' }"
        flat
        color="amber-8"
        label="Ajouter un nouvel album"
      />
      <q-btn
        :to="{ name: 'AdminAlbums' }"
        flat
        color="brown"
        label="Voir les albums"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {};
</script>

<style></style>
