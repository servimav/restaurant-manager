<template>
  <q-layout view="lHh Lpr lFF">
    <app-header v-model="drawerOpen" />
    <drawer-left v-model="drawerOpen" />
    <q-page-container class="text-grey-9 bg-grey-2">
      <router-view />
    </q-page-container>
    <app-footer v-model="drawerOpen" />
  </q-layout>
</template>

<script lang="ts" setup>
import AppFooter from './MainFooter.vue';
import AppHeader from './MainHeader.vue';
import DrawerLeft from './MainDrawerLeft.vue';
import { onBeforeMount, ref } from 'vue';
import { injectStrict, MenuKey, OrderKey } from 'src/providers';

const drawerOpen = ref(false);
const Menu = injectStrict(MenuKey);
const Order = injectStrict(OrderKey);

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
