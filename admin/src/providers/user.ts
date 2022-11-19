import { api } from 'src/boot/axios';
import { DEFAULT_USER, useStorage } from 'src/helpers';
import {
  IPaginated,
  IUser,
  IUserRequestLogin,
  IUserRequestStore,
  IUserResponseLogin,
} from 'src/types';
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

  api_token = ref<string | undefined>();

  /**
   * -----------------------------------------
   *	Actions
   * -----------------------------------------
   */
  async login(p: IUserRequestLogin) {
    const resp = await api.post<IUserResponseLogin>('users/login', p);
    const { api_token, data } = resp.data;
    this.profile = data;
    this.api_token.value = api_token;
    useStorage().set('UserProvider', resp.data);
  }
  /**
   * list
   * @returns
   */
  async list(page = 1) {
    return api.get<IPaginated<IUser[]>>(`users?page=${page}`);
  }
  /**
   * store
   * @param p
   * @returns
   */
  async store(p: IUserRequestStore) {
    return api.post<IUser>('users', p);
  }
  /**
   * update
   * @param id
   * @param p
   * @returns
   */
  async update(id: number, p: Partial<IUserRequestStore>) {
    return api.patch<IUser>(`users/${id}`, p);
  }
  /**
   * destroy
   * @param id
   * @returns
   */
  async destroy(id: number) {
    return api.delete(`users/${id}`);
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
      const { api_token, data } = storage;
      this.profile = data;
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
    this.api_token.value = undefined;
  }
}

export const User = new UserProvider();
export const UserKey: InjectionKey<UserProvider> = Symbol('UserProvider');
