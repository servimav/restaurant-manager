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
 * goTop
 */
export function goTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
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
/**
 * getDataFromQrCi
 * @param qr
 * @returns
 */
export function getDataFromQrCi(qr: string) {
  const split = qr.split(':');
  if (split.length === 5) {
    if (!split[1].split('\r\n').length) return;
    const name = split[1].split('\r\n')[0];
    if (!split[2].split('\r\n').length) return;
    const lastName = split[2].split('\r\n')[0];
    if (!split[3].split('\r\n').length) return;
    const ci = split[3].split('\r\n')[0];
    return { name, lastName, ci };
  }
  return;
}
export * from './const';
export * from './notification';
export * from './storage';
