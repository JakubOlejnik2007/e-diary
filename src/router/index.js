import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LogInView from "../views/LogInView.vue";
import AboutView from "../views/AboutView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/login",
    name: "login",
    component: LogInView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
