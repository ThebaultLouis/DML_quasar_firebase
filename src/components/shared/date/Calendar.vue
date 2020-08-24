<template>
  <q-input
    clearable
    filled
    color="brown"
    label="Date"
    mask="date"
    v-model="value"
  >
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy
          ref="qDateProxy"
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date
            color="brown"
            v-model="value"
            @input="() => $refs.qDateProxy.hide()"
            :options="isAValidDate"
          />
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
      if (!this.dates.length) return true

      return this.dates.indexOf(date.replaceAll("/", "-")) != -1
    }
  }
}
</script>

<style></style>
