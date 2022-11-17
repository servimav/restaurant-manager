import { $router } from 'src/boot/router';
import { ROUTE_NAME } from 'src/router';
import { Application, User } from 'src/providers';

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
export const isAuth = () => Boolean(User.api_token.value);
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
export * from './storage';
