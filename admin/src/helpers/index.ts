import { $router } from 'src/boot/router';
import { ROUTE_NAME } from 'src/router';
import { LocalStorage } from 'quasar';
import { Application } from 'src/providers';

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
/**
 * toMoney
 * @param val
 * @returns
 */
export function toMoney(val: number | string) {
  if (Number.isNaN(val)) return '$0.00';
  return `$${Number(val).toFixed(2)}`;
}
/**
 * setHeaderTitle
 * @param title
 */
export function setHeaderTitle(title: string) {
  Application.headerTitle.value = title;
}

export * from './const';
export * from './notification';
