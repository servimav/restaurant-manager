import { isAuth } from 'src/helpers';
import { User } from 'src/providers';
import { NavigationGuard } from 'vue-router';
import { ROUTE_NAME } from './names';
/**
 * AuthGuard
 * @param to
 * @param from
 * @param next
 */
export const AuthGuard: NavigationGuard = (to, from, next) => {
  if (to.name !== ROUTE_NAME.AUTH_LOGIN && isAuth()) next();
  else next({ name: ROUTE_NAME.AUTH_LOGIN });
};
/**
 * AdminGuard
 * @param to
 * @param from
 * @param next
 */
export const AdminGuard: NavigationGuard = (to, from, next) => {
  if (
    to.name !== ROUTE_NAME.AUTH_LOGIN &&
    isAuth() &&
    User.profile.role &&
    User.isAdmin
  )
    next();
  else next({ name: ROUTE_NAME.AUTH_LOGIN });
};

/**
 * ManagerGuard
 * @param to
 * @param from
 * @param next
 */
export const ManagerGuard: NavigationGuard = (to, from, next) => {
  if (
    to.name !== ROUTE_NAME.AUTH_LOGIN &&
    isAuth() &&
    User.profile.role &&
    User.isManager
  )
    next();
  else next({ name: ROUTE_NAME.AUTH_LOGIN });
};
