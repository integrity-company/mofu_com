import { onBeforeMount, reactive } from 'vue'
import { ProductStore } from '../../../../js/store/ProductStore/index'
import { ProductList } from '../../../../js/type/user/general/products'

type ItemDetailStates = {
  itemId: string
  itemDetail: ProductList
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
  })

export const useItemDetailActions = (
  states: ItemDetailStates,
  store: ProductStore,
  itemId: string
) => {
  onBeforeMount(async () => {
    await store.fetchItemDetail(itemId)
    states.itemDetail = store.getItemDetail()
  })
  return {}
}
