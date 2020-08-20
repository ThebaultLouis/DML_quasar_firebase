<template>
  <q-input filled color="brown" label="Date" mask="date" v-model="value">
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
          />
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  props: ["date"],
  data: () => ({
    value: null
  }),
  beforeMount() {
    this.value = this.date
  },
  watch: {
    value() {
      this.$emit("input", this.value)
    }
  }
  // model: {
  //   prop: "date",
  //   event: "input"
  // }
}
</script>

<style></style>
