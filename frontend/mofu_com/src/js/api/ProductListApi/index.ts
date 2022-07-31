import axios from 'axios'
import { ProductList } from '../../type/user/general/products'

const PATH = {
  PRODUCTS: '/api/products',
}

type ProductListResponse = ProductList[]

export class ProductListApi {
  public async fetchProductList(): Promise<ProductListResponse> {
    const { data } = await axios.get(PATH.PRODUCTS)
    return data
  }
}
