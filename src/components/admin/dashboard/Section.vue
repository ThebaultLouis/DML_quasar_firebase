<template>
  <q-card>
    <q-card-section>
      <div class="text-h5 q-mt-sm q-mb-xs">
        {{ title }}
      </div>
    </q-card-section>
    <q-card-actions vertical>
      <q-btn
        :to="{ name: createLinkName }"
        flat
        color="amber-8"
        label="Ajouter"
      />
      <q-btn
        :to="{ name: listLinkName }"
        flat
        color="brown"
        label="Consulter"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: ["title", "createLinkName", "listLinkName"]
};
</script>

<style></style>
