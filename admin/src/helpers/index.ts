import { $router } from 'src/boot/router';
import { ROUTE_NAME } from 'src/router';
import { LocalStorage } from 'quasar';

export * from './notification';

/**
 * goTo
 * @param route
 */
export const goTo = (route: ROUTE_NAME) => {
  void $router.push({ name: route });
};
/**
 * isAuth
 * @returns
 */
// export const isAuth = () => Boolean($user.apiToken);
/**
 * useStorage
 */
export const useStorage = () => ({
  /**
   * save
   * @param key
   * @param value
   * @returns
   */
  set: (key: string, value: unknown) =>
    LocalStorage.set(key, JSON.stringify(value)),
  /**
   * get
   * @param key
   * @returns
   */
  get: <T>(key: string) => {
    const value = LocalStorage.getItem(key);
    if (value) return JSON.parse(String(value)) as T;
  },
});
