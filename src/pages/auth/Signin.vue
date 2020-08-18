<template>
  <div class="q-mt-md">
    <div class="row justify-center">
      <div class="col-12 col-sm-6 col-md-4">
        <q-card>
          <q-card-section>
            <div class="text-h6">Connexion</div>
          </q-card-section>
          <q-card-section>
            <div v-if="error" class="text-red">
              {{ this.error }}
            </div>
            <q-input
              filled
              color="brown"
              v-model="mail"
              label="Adresse mail"
              name="mail"
            />
            <br />
            <q-input
              filled
              color="brown"
              v-model="password"
              type="password"
              label="Mot de passe"
              name="password"
            />
          </q-card-section>
          <q-card-actions>
            <!-- <q-btn
              :to="{ name: 'ConfirmPasswordChange' }"
              flat
              color="amber-8"
              label="Mot de passe oublié"
            /> -->
            <q-space />
            <q-btn @click="signIn" flat color="brown" label="Se connecter" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    mail: null,
    password: null,
    error: null
  }),
  methods: {
    async signIn() {
      try {
        await this.$store.dispatch("auth/signIn", {
          mail: this.mail,
          password: this.password
        });
        this.$router.push({ name: "Dashboard" });
      } catch (e) {
        this.error = e.message;
        return;
      }
    }
  }
};
</script>

<style></style>
