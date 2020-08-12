<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          DML 35
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <!-- <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label> -->
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Accueil",
    icon: "home",
    link: "/"
  },
  {
    title: "Country",
    icon: "",
    children: [
      {
        title: "Danses",
        icon: "group",
        link: "/country/dances"
      },
      {
        title: "Cours",
        icon: "school",
        link: "/country/courses"
      }
    ]
  },
  {
    title: "Manifestations",
    icon: "event",
    link: "/events"
  },
  {
    title: "Album photo",
    icon: "photo",
    link: "/album"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  }
};
</script>
