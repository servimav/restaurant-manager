import { IClient } from './clients';
import { IProduct } from './products';

/**
 * Order Product Interface
 */
interface IOrderProduct {
  id: number;
  order_id: number;
  product_id: number;
  product?: IProduct;
  qty: number;
}

/**
 * Order Status type
 */
export type IOrderStatus =
  | 'created'
  | 'accepted'
  | 'preparing'
  | 'c-canceled'
  | 'r-canceled'
  | 'ready'
  | 'ontable'
  | 'completed'
  | 'other';

/**
 * Order Interface
 */
export interface IOrder {
  id: number;
  client_id: number;
  client?: IClient;
  total_price: number;
  status: IOrderStatus;
  created_at: Date | string;
  updated_at: Date | string;
  order_products?: IOrderProduct[];
}
