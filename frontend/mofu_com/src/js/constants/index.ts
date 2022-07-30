export const constants = {
  LOCATION: {
    PATH: {
      /** top page*/
      TOP: '/',
      /** about page*/
      ABOUT: '/about',
      /** product list page*/
      PRODUCTS: '/products',
      /** item detail page*/
      ITEM_DETAIL: '/products/detail/:id',
      /** cart page*/
      CART: '/cart',
      /** video lesson page*/
      VIDEO_LESSON: '/video_lesson',
      /** blog page*/
      BLOG: '/blog',
    },
    ROUTE_NAME: {
      /** top page*/
      TOP: 'top',
      /** about page*/
      ABOUT: 'about',
      /** product list page*/
      PRODUCTS: 'productList',
      /** item detail page*/
      ITEM_DETAIL: 'productDetail',
      /** cart page*/
      CART: 'cart',
      /** video lesson page*/
      VIDEO_LESSON: 'videoLesson',
      /** blog page*/
      BLOG: 'blog',
    },
  },
} as const
