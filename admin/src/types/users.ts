/**
 * User interface
 */
export interface IUser {
  id: number;
  name: string;
  phone: string;
  role?: IRoleName;
  created_at?: Date | string;
  updated_at?: Date | string;
}

/**
 * Role Name type
 */
export type IRoleName = 'admin' | 'manager' | 'supervisor' | 'camarero';

/**
 * IUserRequestLogin
 */
export interface IUserRequestLogin {
  phone: string;
  password: string;
}
/**
 * IUserResponseLogin
 */
export interface IUserResponseLogin {
  data: IUser;
  api_token: string;
}
/**
 * IUserRequestStore
 */
export interface IUserRequestStore {
  name: string;
  phone: string;
  role: IRoleName;
  password: string;
  password_confirmation: string;
}
