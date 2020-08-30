<template>
  <div class="row q-ma-sm justify-around">
    <div class="col-5 col-sm-4">
      <q-select
        v-model="isAtHome"
        :options="options"
        filled
        label="Lieu"
        color="brown"
        clearable
      >
      </q-select>
    </div>
    <div class="col-5 col-sm-4">
      <q-select
        v-model="selectedMonth"
        :options="months"
        filled
        label="Mois"
        color="brown"
        clearable
      >
      </q-select>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    month: null,
    months: [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre"
    ],
    options: [
      {
        label: "Domicile",
        value: true
      },
      {
        label: "Extérieur",
        value: false
      }
    ]
  }),
  computed: {
    isAtHome: {
      get() {
        return this.$store.state.event.search.isAtHome
      },
      set(item) {
        this.$store.dispatch("event/setIsAtHome", item)
      }
    },
    selectedMonth: {
      get() {
        return this.month
      },
      set(value) {
        this.month = value
        var month = this.months.findIndex(month => month == value)
        this.$store.dispatch("event/setMonth", month != -1 ? month + 1 : null)
      }
    }
  }
}
</script>

<style></style>
