import { api } from 'src/boot/axios';
import { IOrder, IOrderStatus, IPaginated } from 'src/types';
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
}

export const Order = new OrderProvider();
export const OrderKey: InjectionKey<OrderProvider> = Symbol('OrderProvider');
