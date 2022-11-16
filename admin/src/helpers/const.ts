import { IUser } from 'src/types';

/**
 * DEFAULT_COLS
 */
export const DEFAULT_COLS = 'col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2';
/**
 * DEFAULT_USER
 */
export const DEFAULT_USER: IUser = {
  id: 0,
  name: '',
  phone: '',
  created_at: '',
  role: {
    id: 0,
    name: 'admin',
  },
  updated_at: '',
};
