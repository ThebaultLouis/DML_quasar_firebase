<template>
  <wrapper image="programmes.png">
    <div class="text-body1 text-center">
      <p class="text-center text-body1">
        Les cours de Country se déroulent le mercredi et sont séparés en trois
        niveaux :
      </p>

      <!-- Débutant -->
      <div>
        <div class="text-h6">
          Débutant - 18h15 : 19h15
        </div>
        <div>
          Ce cours s'adresse aux personnes qui veulent découvrir la danse
          country.
          <br />Les danses sont simples pour acquérir les bases des pas.
          <br />Si vous découvrez tout juste la country, ou n'en avez jamais
          fait, alors il est fait pour vous.
          <br />
        </div>
      </div>

      <!-- Novice -->
      <div class="q-py-md">
        <div class="text-h6">
          Novice - 19h15 : 20h30
        </div>
        <div>
          Ce cours s’adresse aux personnes qui veulent découvrir de nouvelles
          chorégraphies
          <br />tout en travaillant avec des techniques et des rythmes encore
          plus variés.
          <br />
        </div>
      </div>

      <!-- Intermédiaire -->
      <div class="q-py-md">
        <div class="text-h6">
          Intermédiaire - 20h00 : 21h45
        </div>
        <div>
          Ce cours s’adresse aux personnes qui souhaitent acquérir des
          chorégraphiques techniques sur des rythmes plus difficiles.
          <br />
        </div>
      </div>

      <p class="q-mt-sm">
        Les cours révisions se déroulent le vendredi
        <br />
        1 repas partage avec bal révisions 1 fois par trimestre.
      </p>
    </div>
  </wrapper>
</template>

<script>
import wrapper from "./Wrapper"
export default {
  components: {
    wrapper
  }
}
</script>

<style></style>
