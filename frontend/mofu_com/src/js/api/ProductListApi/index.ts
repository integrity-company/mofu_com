import axios from 'axios'
import { ProductList } from '../../type/user/general/products'

const PATH = {
  SAMPLE_DATA: '/api',
}

type ProductListResponse = ProductList[]

export class ProductListApi {
  public async fetchProductList(): Promise<ProductListResponse> {
    const { data } = await axios.get(PATH.SAMPLE_DATA)
    return data
  }
}
