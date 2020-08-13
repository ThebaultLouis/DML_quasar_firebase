<template>
  <div>
    <q-item
      v-if="!children"
      clickable
      :to="{ name: linkName }"
      active-class="text-brown"
    >
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>
          {{ title }}
        </q-item-label>
      </q-item-section>
    </q-item>

    <q-expansion-item v-else :icon="icon" :label="title">
      <q-item
        v-for="link in children"
        :key="link.linkName"
        clickable
        :to="{ name: link.linkName }"
        active-class="text-brown"
      >
        <q-item-section v-if="link.icon" avatar>
          <q-icon :name="link.icon" />
        </q-item-section>

        <q-item-section>
          <q-item-label>
            {{ link.title }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-expansion-item>
  </div>
</template>

<script>
export default {
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true
    },

    linkName: {
      type: String,
      default: "Home"
    },

    icon: {
      type: String,
      default: ""
    },

    children: {
      default: null
    }
  },
  data: () => ({})
};
</script>
