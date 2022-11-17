import { DEFAULT_USER } from 'src/helpers';
import { IUser } from 'src/types';
import { InjectionKey, reactive } from 'vue';
/**
 * useUser
 * @returns
 */
class UserProvider {
  /**
   * profile
   */
  profile = reactive<IUser>(DEFAULT_USER);

  /**
   * logout
   */
  logout() {
    this.profile = {
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
  }
}

export const User = new UserProvider();
export const UserKey: InjectionKey<UserProvider> = Symbol('UserProvider');
