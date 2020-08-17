import Home from "pages/Home.vue";
import CountryDances from "pages/country/Dances.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // Home
      {
        path: "",
        name: "Home",
        component: Home
      },
      // Country
      // Dances
      {
        path: "country/dances",
        name: "CountryDances",
        component: CountryDances
      },
      // Courses
      {
        path: "country/classes",
        name: "CountryClasses",
        component: () => import("pages/country/Classes.vue")
      },
      // Events
      {
        path: "events",
        name: "Events",
        component: () => import("pages/Events.vue")
      },
      // Albums
      {
        path: "albums",
        name: "Albums",
        component: () => import("pages/Albums.vue")
      },
      // Signin
      {
        path: "signin",
        name: "Signin",
        component: () => import("pages/admin/Signin.vue")
      },
      // Admin
      {
        path: "admin",
        component: () => import("pages/admin/Index.vue"),
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: "",
            name: "Dashboard",
            component: () => import("pages/admin/Dashboard.vue")
          },
          {
            path: "events",
            name: "AdminEvents",
            component: () => import("pages/admin/event/Events.vue")
          },
          {
            path: "event",
            name: "AdminCreateEvent",
            component: () => import("pages/admin/event/Form.vue")
          },
          {
            path: "event/:id",
            name: "AdminUpdateEvent",
            component: () => import("pages/admin/event/Form.vue")
          },
          {
            path: "albums",
            name: "AdminAlbums",
            component: () => import("pages/admin/album/Albums.vue")
          },
          {
            path: "album",
            name: "AdminCreateAlbum",
            component: () => import("pages/admin/album/Form.vue")
          },
          {
            path: "album/:id",
            name: "AdminUpdateAlbum",
            component: () => import("pages/admin/album/Form.vue")
          }
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
