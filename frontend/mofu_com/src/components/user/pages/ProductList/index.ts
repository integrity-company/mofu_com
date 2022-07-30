import { onBeforeMount, reactive } from 'vue'
import { ProductStore } from '../../../../js/store/ProductStore'
import { ProductList } from '../../../../js/type/user/general/Products'

type UseProductListStates = {
  productList: ProductList[]
}

export const useProductListStates = (): UseProductListStates => {
  return reactive<UseProductListStates>({
    productList: [],
  })
}

export const useProductListActions = (
  states: UseProductListStates,
  store: ProductStore
) => {
  onBeforeMount(async () => {
    await store.fetchProductList()
    states.productList = store.getProductList()
  })
  return
}
