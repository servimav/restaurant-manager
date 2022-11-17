import { api } from 'src/boot/axios';
import { DEFAULT_USER, useStorage } from 'src/helpers';
import { IUser, IUserRequestLogin, IUserResponseLogin } from 'src/types';
import { InjectionKey, reactive, ref } from 'vue';
/**
 * useUser
 * @returns
 */
class UserProvider {
  /**
   * profile
   */
  profile = reactive<IUser>(DEFAULT_USER);

  api_token = ref<string>();

  /**
   * -----------------------------------------
   *	Actions
   * -----------------------------------------
   */
  async login(p: IUserRequestLogin) {
    const resp = await api.post<IUserResponseLogin>('users/login', p);
    const { api_token, profile } = resp.data;
    this.profile = profile;
    this.api_token.value = api_token;
    useStorage().set('UserProvider', resp.data);
  }
  /**
   * -----------------------------------------
   *	Methods
   * -----------------------------------------
   */

  /**
   * load
   */
  load() {
    const storage = useStorage().get<IUserResponseLogin | null>('UserProvider');
    if (storage) {
      const { api_token, profile } = storage;
      this.profile = profile;
      this.api_token.value = api_token;
    }
  }

  /**
   * logout
   */
  logout() {
    useStorage().remove('UserProvider');
    this.profile = {
      id: 0,
      name: '',
      phone: '',
      created_at: '',
      role: 'supervisor',
    };
  }
}

export const User = new UserProvider();
export const UserKey: InjectionKey<UserProvider> = Symbol('UserProvider');
