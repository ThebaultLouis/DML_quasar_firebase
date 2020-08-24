<template>
  <div class="row justify-center">
    <div class="col-12 col-sm-8 q-ma-sm">
      <q-card style="min-height:125px">
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
            <q-card-section style="padding:0">
              <DanceItem
                v-for="dance in classe.reviewedDances"
                :key="dance.id"
                :dance="dance"
              />
              <div class="lt-sm" style="height:10px"></div>
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
// Components
import Header from "components/classe/ItemHeader"
import DanceItem from "components/dance/Item"

export default {
  props: ["classe"],
  data: () => ({
    expanded: false
  }),
  components: {
    Header,
    DanceItem
  }
}
</script>

<style></style>
