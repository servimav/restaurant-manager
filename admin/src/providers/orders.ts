import { api } from 'src/boot/axios';
import { IOrder, IOrderStatus, IPaginated } from 'src/types';
import { InjectionKey, reactive } from 'vue';

interface ICounter {
  accepted: number;
  canceled: number;
  created: number;
  preparing: number;
  'c-canceled': number;
  'r-canceled': number;
  ready: number;
  ontable: number;
  completed: number;
}
/**
 * OrderProvider
 */
class OrderProvider {
  counter = reactive<ICounter>({
    accepted: 0,
    canceled: 0,
    created: 0,
    preparing: 0,
    'c-canceled': 0,
    'r-canceled': 0,
    ready: 0,
    ontable: 0,
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
  async count() {
    return api.get<ICounter>('orders/count');
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
}

export const Order = new OrderProvider();
export const OrderKey: InjectionKey<OrderProvider> = Symbol('OrderProvider');
