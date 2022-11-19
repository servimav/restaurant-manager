import { RouteRecordRaw } from 'vue-router';
import { AuthGuard } from './guards';
import { ROUTE_NAME } from './names';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/ClientLayout.vue'),
    children: [
      {
        path: '',
        name: ROUTE_NAME.CLIENT_MENU,
        component: () => import('pages/ClientMenuPage.vue'),
      },
      {
        path: 'menu',
        name: ROUTE_NAME.CLIENT_CART,
        component: () => import('pages/ClientCartPage.vue'),
      },
      {
        path: 'orders',
        name: ROUTE_NAME.CLIENT_CHECKOUT,
        component: () => import('pages/OrdersPage.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    beforeEnter: AuthGuard,
    children: [
      {
        path: '',
        name: ROUTE_NAME.HOME,
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'menu',
        name: ROUTE_NAME.MENU,
        component: () => import('pages/MenuPage.vue'),
      },
      {
        path: 'orders',
        name: ROUTE_NAME.ORDERS,
        component: () => import('pages/OrdersPage.vue'),
      },
      {
        path: 'settings',
        name: ROUTE_NAME.SETTINGS,
        component: () => import('pages/SettingsPage.vue'),
      },
    ],
  },
  {
    path: '/auth',
    name: ROUTE_NAME.AUTH_LOGIN,
    component: () => import('layouts/AuthLayout.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
