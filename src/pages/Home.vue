<template>
  <q-page>
    <!-- <Logo /> -->
    <q-infinite-scroll @load="onLoad" :offset="400">
      <Logo v-if="logoIsVisible" />
      <PrendreBonneNote v-if="prendreBonneNoteIsVisible" />
      <NosProgrammes v-if="nosProgrammesIsVisible" />
      <ParIciLesSorties v-if="parIciLesSortiesIsVisible" />
      <AutresStandards v-if="autresStandardsIsVisible" />
    </q-infinite-scroll>
  </q-page>
</template>

<script>
import Logo from "components/home/Logo"
import PrendreBonneNote from "components/home/PrendreBonneNote"
import NosProgrammes from "components/home/NosProgrammes"
import ParIciLesSorties from "components/home/ParIciLesSorties"
import AutresStandards from "components/home/AutresStandards"

export default {
  components: {
    // Logo: () => import("components/home/Logo"),
    Logo,
    PrendreBonneNote,
    NosProgrammes,
    ParIciLesSorties,
    AutresStandards
  },
  data: () => ({
    logoIsVisible: false,
    prendreBonneNoteIsVisible: false,
    nosProgrammesIsVisible: false,
    parIciLesSortiesIsVisible: false,
    autresStandardsIsVisible: false
  }),
  methods: {
    onLoad(index, done) {
      switch (index) {
        case 1:
          this.logoIsVisible = true
          break
        case 2:
          this.prendreBonneNoteIsVisible = true
          break
        case 3:
          this.nosProgrammesIsVisible = true
          break
        case 4:
          this.parIciLesSortiesIsVisible = true
          break
        case 5:
          this.autresStandardsIsVisible = true
          break
        default:
          done(true)
      }
      done()
    }
  }
}
</script>

<style></style>
