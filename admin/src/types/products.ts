/**
 * Product Category Interface
 */
export interface IProductCategory {
  id: number;
  tag: string;
  title: string;
}
/**
 * Product interface
 */
export interface IProduct {
  id: number;
  title: string;
  description: string;
  sell_price: number; // Precio de venta
  production_price: number; // Precio de produccion
  top_price: number; // Precio maximo
  category: IProductCategory;
  image: string;
  onsale: boolean;
}

export interface IProductRequestCreate {
  title: string;
  description: string;
  sell_price: number; // Precio de venta
  production_price: number; // Precio de produccion
  top_price: number; // Precio maximo
  category_id: number;
  image: string;
  onsale: boolean;
}
