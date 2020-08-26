<template>
  <div class="q-pa-sm">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <div class="row justify-center">
        <div class="col-10 col-sm-6 col-md-4 q-gutter-y-md">
          <q-select
            filled
            clearable
            v-model="classe.learnedDance"
            :options="dances"
            option-label="name"
            label="Danse apprise"
            hint="Si aucune dance n'est sélectionné alors le cours est un cours de révision"
          />
          <Calendar
            :date="classe.doneOn"
            @input="value => (classe.doneOn = value)"
          />

          <div class="row justify-center">
            <q-btn
              color="amber-8"
              label="Ajouter une danse révisée"
              @click="classe.reviewedDances.push(null)"
            />
          </div>
          <div v-if="classe.reviewedDances.length">
            <div
              v-for="index in classe.reviewedDances.length"
              :key="index"
              class="q-my-sm"
            >
              <div class="row items-center">
                <div class="col">
                  <q-select
                    filled
                    v-model="classe.reviewedDances[index - 1]"
                    :options="dances"
                    option-label="name"
                    :label="'Danse révisée n°' + index"
                  />
                </div>
                <div class="col-2 text-center">
                  <q-btn
                    color="amber-10"
                    flat
                    icon="close"
                    @click="
                      classe.reviewedDances = classe.reviewedDances.splice(
                        index,
                        1
                      )
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-center q-mt-md">
        <q-btn :loading="isLoading" type="submit" color="brown">
          {{ isUpdating ? "Modifier le cours" : "Ajouter le cours" }}
        </q-btn>
      </div>
    </q-form>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  components: {
    Calendar: () => import("components/shared/date/Calendar")
  },
  data: () => ({
    classe: {
      id: null,
      doneOn: null,
      learnedDance: null,
      reviewedDances: []
    },
    isLoading: false,
    isUpdating: false,
    requiredRule: [
      val => (val && val.length > 0) || "Ce champs ne doit pas être vide"
    ]
  }),
  computed: {
    ...mapState({
      dances: state => state.dance.fetchedDances
    })
  },
  async beforeMount() {
    // Fetch before update
    await this.$store.dispatch("classe/fetchClasses")
    // Updating
    var id = this.$route.params.id
    if (!id) return

    this.isUpdating = true
    this.classe = this.$store.getters["classe/classe"](id)
  },
  methods: {
    async onSubmit() {
      this.classe.reviewedDances = this.classe.reviewedDances.filter(
        dance => !!dance
      )
      // console.log(this.classe)
      this.isLoading = true
      await this.$store.dispatch("classe/createClasse", {
        isUpdating: this.isUpdating,
        classe: this.classe
      })
    }
  }
}
</script>

<style></style>
