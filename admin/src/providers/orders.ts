import { api } from 'src/boot/axios';
import { IOrder, IOrderProduct, IOrderStatus, IPaginated } from 'src/types';
import { InjectionKey, ref } from 'vue';

interface ICounter {
  accepted: number;
  created: number;
  'c-canceled': number;
  'r-canceled': number;
  completed: number;
}
/**
 * OrderProvider
 */
class OrderProvider {
  counter = ref<ICounter>({
    accepted: 0,
    created: 0,
    'c-canceled': 0,
    'r-canceled': 0,
    completed: 0,
  });
  private _cart = ref<Omit<IOrderProduct, 'id'>[]>([]);

  get cart() {
    return this._cart.value;
  }
  set cart(c: Omit<IOrderProduct, 'id'>[]) {
    this._cart.value = c;
  }
  /**
   * -----------------------------------------
   *	Actions
   * -----------------------------------------
   */

  /**
   * count
   * @returns
   */
  async count(params?: { status: IOrderStatus }) {
    const resp = await api.get<ICounter>('orders/count', { params });
    this.counter.value = resp.data;
    return resp.data;
  }
  /**
   * filter
   * @param status
   * @returns
   */
  async filter(params: { status: IOrderStatus; page?: number }) {
    return api.get<IPaginated<IOrder[]>>('orders/filter', { params });
  }
  /**
   * list
   * @returns
   */
  async list(params?: { page?: number }) {
    return api.get<IPaginated<IOrder[]>>('orders', { params });
  }
  /**
   * update
   * @param id
   * @param status
   * @returns
   */
  async update(id: number, status: IOrderStatus) {
    return api.patch<IOrder>(`orders/${id}`, { status });
  }

  /**
   * -----------------------------------------
   *	Methods
   * -----------------------------------------
   */
  /**
   * addToCart
   * @param p
   */
  addToCart(p: Omit<IOrderProduct, 'id'>) {
    if (p.qty < 1) return;
    // Check if exists
    const index = this.cart.findIndex((c) => c.product_id === p.product_id);
    if (index >= 0) {
      this.cart[index].qty += p.qty;
    } else {
      this.cart.push(p);
    }
  }
}

export const Order = new OrderProvider();
export const OrderKey: InjectionKey<OrderProvider> = Symbol('OrderProvider');
