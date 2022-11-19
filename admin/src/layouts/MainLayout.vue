<template>
  <q-layout view="lHh Lpr lFF">
    <app-header v-model="drawerOpen" />
    <drawer-left v-model="drawerOpen" />
    <q-page-container class="text-grey-9 bg-grey-5">
      <router-view />
    </q-page-container>
    <app-footer v-model="drawerOpen" />
  </q-layout>
</template>

<script lang="ts" setup>
import AppFooter from './MainFooter.vue';
import AppHeader from './MainHeader.vue';
import DrawerLeft from './MainDrawerLeft.vue';
import { onBeforeMount, provide, ref } from 'vue';
import { injectStrict, MenuKey, Order, OrderKey } from 'src/providers';

provide(OrderKey, Order);

const drawerOpen = ref(false);
const Menu = injectStrict(MenuKey);

onBeforeMount(async () => {
  await Menu.listCategories();
  await Order.count();
});
</script>

<style scoped>
.bg-page {
  background-color: gray;
}
</style>
