import { RouteRecordRaw } from 'vue-router';
import { ManagerGuard } from './guards';
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
        name: ROUTE_NAME.CLIENT_ORDERS,
        component: () => import('pages/OrdersPage.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    beforeEnter: ManagerGuard,
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
        path: 'categories',
        name: ROUTE_NAME.CATEGORIES,
        component: () => import('pages/CategoriesPage.vue'),
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
      {
        path: 'reports',
        name: ROUTE_NAME.REPORTS,
        component: () => import('pages/ReportsPage.vue'),
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
