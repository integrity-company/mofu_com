import { createWebHistory, createRouter } from "vue-router";

import TopPage from "../../../components/user/pages/TopPage/index.vue";
import About from "../../../components/user/pages/About/index.vue";

const routes = [
  {
    path: "/",
    component: TopPage,
  },
  {
    path: "/about",
    component: About,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
