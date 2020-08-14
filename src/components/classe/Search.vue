<template>
  <div class="row q-my-sm q-px-sm">
    <div class="col-0 col-sm-2"></div>
    <div class="col-6 col-sm-4">
      <q-select
        filled
        v-model="model"
        :options="options"
        label="Niveau"
        color="brown"
        clearable
      />
    </div>
    <div class="col-1"></div>
    <div class="col-5 col-sm-3">
      <q-input filled color="brown" label="Date" v-model="date" mask="date">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: null,
    options: ["Débutant", "Intermédiaire", "Avancé"],
    date: ""
  })
};
</script>

<style></style>
