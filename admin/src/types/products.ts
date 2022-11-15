import { IWithImage } from './images';

/**
 * Product Category Interface
 */
export interface IProductCategory {
  id: number;
  tag: string;
  title: string;
  icon: string;
  parent_id?: number;
  onsale: boolean;
}
/**
 * Product interface
 */
export interface IProduct extends IWithImage {
  id: number;
  title: string;
  description: string;
  sell_price: number; // Precio de venta
  production_price: number; // Precio de produccion
  top_price: number; // Precio maximo
  category_id: number;
  category?: IProductCategory;
}
