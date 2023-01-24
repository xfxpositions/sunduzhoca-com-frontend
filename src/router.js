import { createWebHashHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import Deneme from "./pages/Deneme.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/Deneme", name: "Deneme", component: Deneme },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
