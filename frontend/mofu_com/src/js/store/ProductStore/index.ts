import { ProductListApi } from "../../api/user/ProductListApi";
import { ProductList } from "../../type/user/general/products";
import { Ref, ref } from "vue";

type ProductListDetail = ProductList[];

export class ProductStore {
  private api: ProductListApi;
  private _data: Ref<ProductListDetail>;

  constructor() {
    this.api = new ProductListApi();
    this._data = ref<ProductListDetail>([]);
  }

  /**
   * 取得した商品リストを返す
   * @returns 商品リスト
   */
  public getProductList() {
    return this._data.value;
  }

  /**
   * 商品を取得するAPIを呼び出す
   */
  public async fetchProductList(): Promise<void> {
    await this.api
      .fetchProductList()
      .then((data) => {
        this._data.value = data;
        console.log("store data : ", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
