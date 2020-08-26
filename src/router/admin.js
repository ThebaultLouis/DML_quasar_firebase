var routes = [
  {
    path: "",
    name: "Dashboard",
    component: () => import("pages/admin/Dashboard.vue")
  },
  // Dance
  {
    path: "dances",
    name: "AdminDances",
    component: () => import("pages/country/Dances.vue")
  },
  {
    path: "dance/create",
    name: "AdminCreateDance",
    component: () => import("pages/admin/dance/Form.vue")
  },
  {
    path: "dance/update/:id",
    name: "AdminUpdateDance",
    component: () => import("pages/admin/dance/Form.vue")
  },
  // Classe
  {
    path: "classes",
    name: "AdminClasses",
    component: () => import("pages/country/Classes.vue"),
    meta: {
      classe: true
    }
  },
  {
    path: "classe/create",
    name: "AdminCreateClasse",
    component: () => import("pages/admin/classe/Form.vue")
  },
  {
    path: "classe/update/:id",
    name: "AdminUpdateClasse",
    component: () => import("pages/admin/classe/Form.vue")
  },
  // Event
  {
    path: "events",
    name: "AdminEvents",
    component: () => import("pages/Events.vue")
  },
  {
    path: "event/create",
    name: "AdminCreateEvent",
    component: () => import("pages/admin/event/Form.vue")
  },
  {
    path: "event/update/:id",
    name: "AdminUpdateEvent",
    component: () => import("pages/admin/event/Form.vue")
  },
  // Album
  {
    path: "albums",
    name: "AdminAlbums",
    component: () => import("pages/Albums.vue")
  },
  {
    path: "album/create",
    name: "AdminCreateAlbum",
    component: () => import("pages/admin/album/Form.vue")
  },
  {
    path: "album/update/:id",
    name: "AdminUpdateAlbum",
    component: () => import("pages/admin/album/Form.vue")
  }
]

export default routes
