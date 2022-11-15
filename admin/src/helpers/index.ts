import { $router } from 'src/boot/router';
import { ROUTE_NAME } from 'src/router';

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
