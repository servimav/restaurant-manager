import { api } from 'src/boot/axios';
import {
  IPaginated,
  IProduct,
  IProductCategory,
  IProductRequestCreate,
} from 'src/types';
import { InjectionKey, ref } from 'vue';
/**
 * MenuProvider
 */
class MenuProvider {
  private _categories = ref<IProductCategory[]>([]);
  private _onsale = ref<IProduct[]>([]);

  get categories() {
    return this._categories.value;
  }
  set categories(c: IProductCategory[]) {
    this._categories.value = c;
  }
  get onsale() {
    return this._onsale.value;
  }
  set onsale(c: IProduct[]) {
    this._onsale.value = c;
  }

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
    this._categories.value = resp.data;
    return resp.data;
  }
  /**
   * createCategory
   * @param c
   * @returns
   */
  async createCategory(c: Omit<IProductCategory, 'id'>) {
    const resp = await api.post<IProductCategory>('product-categories', c);
    this._categories.value.push(resp.data);
    return resp.data;
  }
  /**
   * updateCategory
   * @param id
   * @param c
   * @returns
   */
  async updateCategory(id: number, c: Omit<IProductCategory, 'id'>) {
    const resp = await api.patch<IProductCategory>(
      `product-categories/${id}`,
      c
    );
    const index = this._categories.value.findIndex((c) => c.id === id);
    if (index >= 0) {
      this._categories.value[index] = resp.data;
    }
    return resp.data;
  }

  /**
   * removeCategory
   * @param id
   * @returns
   */
  async removeCategory(id: number) {
    await api.delete<IProductCategory>(`product-categories/${id}`);
    const index = this._categories.value.findIndex((c) => c.id === id);
    if (index >= 0) {
      this._categories.value.splice(index, 1);
    }
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
  async listOnsale(params?: { category_id?: number }) {
    const resp = await api.get<IProduct[]>('products/onsale', { params });
    this._onsale.value = resp.data;
    return resp.data;
  }
  /**
   * storeProduct
   * @param p
   * @returns
   */
  async storeProduct(p: IProductRequestCreate) {
    return await api.post<IProduct>('products', p, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
  /**
   * updateProduct
   * @param p
   * @returns
   */
  async updateProduct(id: number, p: Partial<IProductRequestCreate>) {
    return await api.post<IProduct>(`products/${id}`, p, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
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
