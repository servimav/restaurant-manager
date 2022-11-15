<template>
  <q-layout view="lHh Lpr lFF">
    <app-header v-model="drawerOpen" />
    <drawer-left v-model="drawerOpen" />
    <q-page-container class="text-grey-9">
      <router-view />
    </q-page-container>
    <app-footer v-model="drawerOpen" />
  </q-layout>
</template>

<script lang="ts" setup>
import AppFooter from './MainFooter.vue';
import AppHeader from './MainHeader.vue';
import DrawerLeft from './MainDrawerLeft.vue';
import { ref } from 'vue';

const drawerOpen = ref(false);
</script>
