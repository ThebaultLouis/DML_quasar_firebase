<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar class="bg-brown">
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
      overlay
      bordered
      content-class="bg-grey-1"
    >
      <div class="bg-brown header">
        <q-img src="images/home/logo_white.png" />
      </div>
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
import EssentialLink from "components/link/EssentialLink.vue";

const linksData = [
  {
    title: "Accueil",
    icon: "home",
    linkName: "Home"
  },
  {
    title: "Country",
    icon: "",
    children: [
      {
        title: "Danses",
        icon: "group",
        linkName: "CountryDances"
      },
      {
        title: "Cours",
        icon: "school",
        linkName: "CountryClasses"
      }
    ]
  },
  {
    title: "Manifestations",
    icon: "event",
    linkName: "Events"
  },
  {
    title: "Album photo",
    icon: "photo",
    linkName: "Albums"
  },
  {
    title: "Admin",
    icon: "person",
    linkName: "Dashboard"
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

<style scoped></style>
