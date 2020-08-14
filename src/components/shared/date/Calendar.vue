<template>
  <q-input filled color="brown" label="Date" v-model="date" mask="date">
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy
          ref="qDateProxy"
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date
            color="brown"
            v-model="date"
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
  model: {
    prop: "date",
    event: "change"
  }
};
</script>

<style></style>
