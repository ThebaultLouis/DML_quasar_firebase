<template>
  <q-page>
    <!-- <Logo /> -->
    <PrendreBonneNote />
    <NosProgrammes />
    <ParIciLesSorties />
    <AutresStandards />
  </q-page>
</template>

<script>
export default {
  components: {
    // Logo: () => import("components/home/Logo"),
    PrendreBonneNote: () => import("components/home/PrendreBonneNote"),
    NosProgrammes: () => import("components/home/NosProgrammes"),
    ParIciLesSorties: () => import("components/home/ParIciLesSorties"),
    AutresStandards: () => import("components/home/AutresStandards")
  }
};
</script>

<style></style>
