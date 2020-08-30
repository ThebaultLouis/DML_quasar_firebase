<template>
  <q-input
    v-model="value"
    clearable
    filled
    color="brown"
    label="Date"
    mask="date"
  >
    <template v-slot:append="">
      <q-icon class="cursor-pointer" name="event">
        <q-popup-proxy
          ref="qDateProxy"
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date
            v-model="value"
            :options="isAValidDate"
            @input="() => $refs.qDateProxy.hide()"
            color="brown"
            mask="YYYY-MM-DD"
          >
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat> </q-btn>
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  props: ["date", "dates"],
  data: () => ({
    value: null
  }),
  beforeMount() {
    if (this.date) this.value = this.date
  },
  watch: {
    value() {
      this.$emit("input", this.value)
    }
  },
  methods: {
    isAValidDate(date) {
      if (!this.dates || !this.dates.length) return true

      return this.dates.indexOf(date.replaceAll("/", "-")) != -1
    }
  }
}
</script>

<style></style>
