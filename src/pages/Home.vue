<template>
  <q-page>
    <!-- <Logo /> -->
    <q-infinite-scroll @load="onLoad" :offset="250">
      <PrendreBonneNote v-if="prendreBonneNoteIsVisible" />
      <NosProgrammes v-if="nosProgrammesIsVisible" />
      <ParIciLesSorties v-if="parIciLesSortiesIsVisible" />
      <AutresStandards v-if="autresStandardsIsVisible" />
    </q-infinite-scroll>
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
  },
  data: () => ({
    prendreBonneNoteIsVisible: false,
    nosProgrammesIsVisible: false,
    parIciLesSortiesIsVisible: false,
    autresStandardsIsVisible: false
  }),
  methods: {
    onLoad(index, done) {
      switch (index) {
        case 1:
          this.prendreBonneNoteIsVisible = true;
          break;
        case 2:
          this.nosProgrammesIsVisible = true;
          break;
        case 3:
          this.parIciLesSortiesIsVisible = true;
          break;
        case 4:
          this.autresStandardsIsVisible = true;
          break;
        default:
      }
      done();
    }
  }
};
</script>

<style></style>
