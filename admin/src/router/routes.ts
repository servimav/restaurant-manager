import { RouteRecordRaw } from 'vue-router';
import { AuthGuard } from './guards';
import { ROUTE_NAME } from './names';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
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
