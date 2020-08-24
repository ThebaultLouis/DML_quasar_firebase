<template>
  <div class="row justify-center">
    <div class="col-12 col-sm-8 q-pa-sm">
      <q-card class=" ">
        <q-card-section>
          <Header v-bind="classe" />
        </q-card-section>
        <q-card-actions v-if="classe.reviewedDances.length">
          <q-space />
          <q-item clickable @click="expanded = !expanded">
            <div class="text-grey q-mr-sm">
              Danses révisées
            </div>
            <q-icon
              size="25px"
              color="grey"
              :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            >
            </q-icon>
          </q-item>
        </q-card-actions>
        <q-slide-transition>
          <div v-show="expanded">
            <q-separator />
            <q-card-section>
              <DanceItem
                v-for="dance in classe.reviewedDances"
                :dance="dance"
                :key="dance.id"
              />
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  props: ["classe"],
  data: () => ({
    expanded: false
  }),
  components: {
    Header: () => import("components/classe/ItemHeader"),
    DanceItem: () => import("components/dance/Item")
  }
}
</script>

<style></style>
