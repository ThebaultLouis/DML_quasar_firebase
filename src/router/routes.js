// Admin Route
import adminRoutes from "./admin";

// Components
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
      // Auth
      // Signin
      {
        path: "signin",
        name: "Signin",
        component: () => import("pages/auth/Signin.vue")
      },
      {
        path: "confirmPasswordChange",
        name: "ConfirmPasswordChange",
        component: () => import("pages/auth/ConfirmPasswordChange.vue")
      },
      {
        path: "confirmLostPasswordCode",
        name: "ConfirmLostPasswordCode",
        component: () => import("pages/auth/ConfirmLostPasswordCode.vue")
      },
      {
        path: "changePassword",
        name: "ChangePassword",
        component: () => import("pages/auth/ChangePassword.vue")
      },
      // Admin
      {
        path: "admin",
        component: () => import("pages/admin/Index.vue"),
        meta: {
          requiresAuth: true
        },
        children: adminRoutes
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
