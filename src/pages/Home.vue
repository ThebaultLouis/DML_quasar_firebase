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
import PrendreBonneNote from "components/home/PrendreBonneNote";
import NosProgrammes from "components/home/NosProgrammes";
import ParIciLesSorties from "components/home/ParIciLesSorties";
import AutresStandards from "components/home/AutresStandards";

export default {
  components: {
    // Logo: () => import("components/home/Logo"),
    PrendreBonneNote,
    NosProgrammes,
    ParIciLesSorties,
    AutresStandards
  }
};
</script>

<style></style>
