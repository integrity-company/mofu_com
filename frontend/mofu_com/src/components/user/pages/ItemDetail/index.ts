import { onBeforeMount, reactive } from 'vue'
import { Router, useRouter } from 'vue-router'
import { constants } from '../../../../js/constants'
import { ProductStore } from '../../../../js/store/ProductStore/index'
import { ProductList } from '../../../../js/type/user/general/products'

type ItemDetailStates = {
  itemId: string
  itemDetail: ProductList
  showModal: boolean
}

export const useItemDetailStates = () =>
  reactive<ItemDetailStates>({
    itemId: '',
    itemDetail: {
      _id: '',
      title: '',
      description: '',
      url: '',
      price: 0,
      lastUpdate: 0,
    },
    showModal: false,
  })

export const useItemDetailActions = (
  states: ItemDetailStates,
  store: ProductStore,
  itemId: string,
  router: Router
) => {
  onBeforeMount(async () => {
    await store.fetchItemDetail(itemId)
    states.itemDetail = store.getItemDetail()
  })
  return {
    showModal(id: string) {
      states.showModal = true
    },
    goToCart() {
      router.push(constants.LOCATION.PATH.CART)
    },
  }
}
