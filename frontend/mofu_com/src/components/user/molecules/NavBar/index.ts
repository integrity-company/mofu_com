import { constants } from '../../../../js/constants'

export const useNavBarActions = () => {
  return {
    goToTop() {
      return constants.LOCATION.PATH.TOP
    },
    goToProducts() {
      return constants.LOCATION.PATH.PRODUCTS
    },
    goToAbout() {
      return constants.LOCATION.PATH.ABOUT
    },
    goToItemDetail() {
      return constants.LOCATION.PATH.ITEM_DETAIL
    },
    goToCart() {
      return constants.LOCATION.PATH.CART
    },
    goToVideoLesson() {
      return constants.LOCATION.PATH.VIDEO_LESSON
    },
    goToBlog() {
      return constants.LOCATION.PATH.BLOG
    },
  }
}
