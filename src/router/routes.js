const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // Home
      {
        path: "",
        name: "Home",
        component: () => import("pages/Home.vue")
      },
      // Country
      // Dances
      {
        path: "country/dances",
        name: "CountryDances",
        component: () => import("pages/country/Dances.vue")
      },
      // Courses
      {
        path: "country/course",
        name: "CountryCourses",
        component: () => import("pages/country/Courses.vue")
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
