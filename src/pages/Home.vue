<template>
  <q-page>
    <q-infinite-scroll @load="onLoad" :offset="250">
      <Logo v-if="logoIsVisible" />
      <PrendreBonneNote v-if="prendreBonneNoteIsVisible" />
      <NosProgrammes v-if="nosProgrammesIsVisible" />
      <ParIciLesSorties v-if="parIciLesSortiesIsVisible" />
    </q-infinite-scroll>
  </q-page>
</template>

<script>
import Logo from "components/home/Logo"
import PrendreBonneNote from "components/home/PrendreBonneNote"
import NosProgrammes from "components/home/NosProgrammes"
import ParIciLesSorties from "components/home/ParIciLesSorties"

export default {
  meta: {
    meta: {
      ogTitle: {
        name: "og:title",
        content: "Page d'accueil du site de l'association dml 35"
      },
      ogUrl: {
        name: "og:url",
        content: "https://danse-musique-laille.web.app/"
      }
    }
  },
  components: {
    Logo,
    PrendreBonneNote,
    NosProgrammes,
    ParIciLesSorties
  },
  data: () => ({
    logoIsVisible: false,
    prendreBonneNoteIsVisible: false,
    nosProgrammesIsVisible: false,
    parIciLesSortiesIsVisible: false
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
        default:
          done(true)
      }
      done()
    }
  }
}
</script>

<style></style>
