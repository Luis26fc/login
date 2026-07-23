// Importacion de las rutas
import MainLayout from "../layouts/MainLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/home/HomeView.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/LoginView.vue"),
  },
  // ¡Aquí agregamos la ruta mágica que faltaba!
  {
    path: "/registro",
    name: "registro",
    component: () => import("../views/auth/RegisterView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;