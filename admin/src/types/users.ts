/**
 * User interface
 */
export interface IUser {
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
export type IRoleName = 'admin' | 'manager' | 'supervisor';

/**
 * User Role Interfce
 */
export interface IUserRole {
  id: number;
  name: IRoleName;
}
/**
 * IUserRequestLogin
 */
export interface IUserRequestLogin {
  phone: string;
  password: string;
}