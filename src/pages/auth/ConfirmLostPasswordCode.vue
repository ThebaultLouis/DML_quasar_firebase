<template>
  <div class="q-mt-md">
    <div class="row justify-center">
      <div class="col-12 col-sm-6 col-md-4">
        <q-card>
          <q-card-section>
            <div class="text-h6">Un code vous a été envoyé par mail</div>
          </q-card-section>
          <q-card-section>
            <q-input filled color="brown" v-model="code" label="Code" />
          </q-card-section>
          <q-card-actions>
            <q-space />
            <q-btn flat color="brown" label="Confirmer" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    code: null
  })
};
</script>

<style></style>
