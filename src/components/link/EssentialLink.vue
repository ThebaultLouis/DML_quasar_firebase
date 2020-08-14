<template>
  <div>
    <Item v-if="!children" :title="title" :icon="icon" :linkName="linkName" />

    <q-expansion-item v-else :icon="icon" :label="title">
      <q-separator />
      <Item v-for="link in children" :key="link.linkName" v-bind="link" />
    </q-expansion-item>
  </div>
</template>

<script>
export default {
  name: "EssentialLink",
  components: {
    Item: () => import("components/link/Item")
  },
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
