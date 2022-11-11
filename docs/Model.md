# Modelos de Datos

## User

Solamente van a ser usuarios los miembros del restaurant. Los usuarios se van a dividir en grupos definidos por sus roles. 

Roles:
- Administrador (`admin`): Controlar `Ajustes`, `Usuarios`, `Productos` y `Ordenes`
- Manager (`manager`): Controlar `Productos` y `Ordenes`
- Supervisor (`supervisor`): Visualizar `Productos` y `Ordenes`


```typescript
/**
 * User interface
 */
interface IUser {
	id: number;
	name: string;
	phone: string;
	role?: IUserRole;
	created_at?: Date;
	updated_at?: Date;
}

/**
 * Role Name type
 */ 
type IRoleName = 'admin' | 'manager' | 'supervisor';

/**
 * User Role Interfce
 */
interface IUserRole {
	id: number;
	name: IRoleName;
} 
```

## Image
Las `Imagenes` se controlan aparte y se asignan a cada modelo que requirea una imagen

```typescript
/**
 * Image Interface
 */
interface IImage {
	id: number;
	title: string;
	path: string;
}
/**
 * Declare object with image
 */ 
interface IWithImage {
	image_id: number;
	image?: IImage; // Opcional
}
```

## Application

La aplicacion contiene la configuracion del sistema

```typescript
/**
 * Application Interface
 */
interface IApplication extends IWithImage {
	id: number;
	title: string;
	description: string;
	logo_id: number;
	logo?: IImage;
	active: boolean;
	settings: IApplicationSettings; // Ajustes
	created_at: Date;
	updated_at: Date;
}

/**
 * Application Settings Interface
 */ 
interface IApplicationSettings {

}
```

## Client

Los clientes que acceden al restaurant. Se autentican con el `CI`
```typescript
/**
 * Client Interface
 */
interface IClient {
	id: number;
	name: string;
	ci: string; // Carne de Identidad
	contact: string;
	created_at: Date;
	updated_at: Date;
} 
```

## Product

Las ofertas del restaurant. Pueden estar con `{onsale: false}` para modo edicion. Contienen una imagen relacionada y estan distribuidos en categorias. La iconografia de las categorias es `mdi-v6`

```typescript
/**
 * Product Category Interface
 */
interface IProductCategory {
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
interface IProduct extends IWithImage {
	id: number;
	title: string;
	description: string;
	sell_price: number; // Precio de venta
	production_price: number; // Precio de produccion
	top_price: number; // Precio maximo
	category_id: number;
	category?: IProductCategory;
} 
```

## Order

Los pedidos de los clientes. Tienen un ciclo de vida que define el estado de la orden

- `created`: Cuando la orden es creada por el `Cliente`
- `accepted`: La orden fue aceptada por el `Manager`
- `preparing`: La orden esta siendo preparada por los cocineros
- `c-canceled`: Cancelada por el `Cliente`
- `r-canceled`: Cancelada por el `Manager`
- `ready`: Lista para ser servida
- `ontable`: En la mesa del `Cliente`
- `completed`: Orden completada y pagada
- `other`: Estado variable atipico


```typescript
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
type IOrderStatus = 'created' | 'accepted' | 'preparing' | 'c-canceled' | 'r-canceled' | 'ready' | 'ontable' | 'completed' | 'other'; 

/**
 * Order Interface
 */ 
interface IOrder {
	id: number;
	client_id: number;
	client:? IClient;
	total_price: number;
	status: IOrderStatus;
	created_at: Date;
	updated_at: Date;
	order_products?: IOrderProduct[];
}
```