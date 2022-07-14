import { createWebHistory, createRouter } from "vue-router";

import TopPage from "../../../components/user/pages/TopPage/index.vue";
import About from "../../../components/user/pages/About/index.vue";
import ProductList from "../../../components/user/pages/ProductList/index.vue";
import Cart from "../../../components/user/pages/Cart/index.vue";
import VideoLesson from "../../../components/user/pages/VideoLesson/index.vue";
import Blog from "../../../components/user/pages/Blog/index.vue";

const routes = [
  {
    path: "/",
    component: TopPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/product_list",
    component: ProductList,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/video_lesson",
    component: VideoLesson,
  },
  {
    path: "/blog",
    component: Blog,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
