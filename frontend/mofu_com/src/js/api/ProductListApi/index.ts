import axios from 'axios'
import { ProductList } from '../../type/user/general/products'

const PATH = {
  PRODUCTS: '/api/products',
  ITEM_DETAIL: '/api/products/item/detail',
}

type ProductListResponse = ProductList[]

/**
 * Products関連
 */
export class ProductListApi {
  /**
   * 商品リスト取得
   * @returns 商品リスト
   */
  public async fetchProductList(): Promise<ProductListResponse> {
    const { data } = await axios.get(PATH.PRODUCTS)
    return data
  }

  /**
   * fetchItemDetail
   * @returns 選択した商品の詳細オブジェクト
   */
  public async fetchItemDetail(id: string): Promise<ProductList> {
    const { data } = await axios.get(`${PATH.ITEM_DETAIL}/${id}`)
    return data
  }
}
