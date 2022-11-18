import { api } from 'src/boot/axios';
import {
  IPaginated,
  IProduct,
  IProductCategory,
  IProductRequestCreate,
} from 'src/types';
import { InjectionKey, reactive } from 'vue';
/**
 * MenuProvider
 */
class MenuProvider {
  /**
   * categories
   */
  categories = reactive<IProductCategory[]>([]);

  /**
   * -----------------------------------------
   *	Actions
   * -----------------------------------------
   */
  /**
   * listCategories
   */
  async listCategories() {
    const resp = await api.get<IProductCategory[]>('product-categories');
    this.categories = resp.data;
  }
  /**
   * list
   */
  async list(page = 1) {
    return await api.get<IPaginated<IProduct[]>>(`products?page=${page}`);
  }
  /**
   * list
   */
  async onsale(page = 1) {
    return await api.get<IPaginated<IProduct[]>>(
      `products/onsale?page=${page}`
    );
  }
  /**
   * storeProduct
   * @param p
   * @returns
   */
  async storeProduct(p: IProductRequestCreate) {
    return await api.post<IProduct>('products', p);
  }
  /**
   * updateProduct
   * @param p
   * @returns
   */
  async updateProduct(id: number, p: Partial<IProductRequestCreate>) {
    return await api.patch<IProduct>(`products/${id}`, p);
  }
  /**
   * destroyProduct
   * @param p
   * @returns
   */
  async destroyProduct(p: number) {
    return await api.delete(`products/${p}`);
  }
}

export const Menu = new MenuProvider();
export const MenuKey: InjectionKey<MenuProvider> = Symbol('MenuProvider');
