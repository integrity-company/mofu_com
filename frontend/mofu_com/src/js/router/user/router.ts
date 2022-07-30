import { createWebHistory, createRouter } from 'vue-router'

import TopPage from '../../../components/user/pages/TopPage/index.vue'
import About from '../../../components/user/pages/About/index.vue'
import ProductList from '../../../components/user/pages/ProductList/index.vue'
import Cart from '../../../components/user/pages/Cart/index.vue'
import VideoLesson from '../../../components/user/pages/VideoLesson/index.vue'
import Blog from '../../../components/user/pages/Blog/index.vue'
import ItemDetail from '../../../components/user/pages/ItemDetail/index.vue'
import { constants } from '../../constants'

const { PATH, ROUTE_NAME } = constants.LOCATION

const routes = [
  {
    path: PATH.TOP,
    name: ROUTE_NAME.TOP,
    component: TopPage,
  },
  {
    path: PATH.ABOUT,
    name: ROUTE_NAME.ABOUT,
    component: About,
  },
  {
    path: PATH.PRODUCTS,
    name: ROUTE_NAME.PRODUCTS,
    component: ProductList,
  },
  {
    path: PATH.ITEM_DETAIL,
    name: ROUTE_NAME.ITEM_DETAIL,
    component: ItemDetail,
  },
  {
    path: PATH.CART,
    name: ROUTE_NAME.CART,
    component: Cart,
  },
  {
    path: PATH.VIDEO_LESSON,
    name: ROUTE_NAME.VIDEO_LESSON,
    component: VideoLesson,
  },
  {
    path: PATH.BLOG,
    name: ROUTE_NAME.BLOG,
    component: Blog,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
