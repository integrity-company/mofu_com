import { ProductListApi } from '../../api/ProductListApi'
import { ProductList } from '../../type/user/general/products'
import { Ref, ref } from 'vue'

type ProductListDetail = ProductList[]

export class ProductStore {
  private api: ProductListApi
  private _productsData: Ref<ProductListDetail>
  private _itemDetailData: Ref<ProductList>

  constructor() {
    this.api = new ProductListApi()
    this._productsData = ref<ProductListDetail>([])
    this._itemDetailData = ref<ProductList>({
      _id: '',
      title: '',
      description: '',
      url: '',
      price: 0,
      lastUpdate: 0,
    })
  }

  /**
   * 取得した商品リストを返す
   * @returns 商品リスト
   */
  public getProductList() {
    return this._productsData.value
  }

  /**
   * 取得した商品リストを返す
   * @returns 商品リスト
   */
  public getItemDetail() {
    return this._itemDetailData.value
  }

  /**
   * 商品を取得するAPIを呼び出す
   */
  public async fetchProductList(): Promise<void> {
    await this.api
      .fetchProductList()
      .then((data) => {
        this._productsData.value = data
      })
      .catch((error) => {
        console.log(error)
      })
  }

  /**
   * 商品の詳細情報APIを呼び出す
   */
  public async fetchItemDetail(id: string) {
    await this.api
      .fetchItemDetail(id)
      .then((data) => {
        this._itemDetailData.value = data
      })
      .catch((error) => {
        console.log('error : ', error)
      })
  }
}
