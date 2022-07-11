import { createWebHistory, createRouter } from "vue-router";

import TopPage from "../../../components/user/pages/TopPage/index.vue";

const routes = [
  {
    path: "/",
    component: TopPage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
