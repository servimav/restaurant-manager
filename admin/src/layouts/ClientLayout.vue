<template>
  <q-layout view="lHh Lpr lFF">
    <app-header v-model="drawerOpen" client />
    <drawer-left v-model="drawerOpen" client />
    <q-page-container class="text-grey-9">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AppHeader from './MainHeader.vue';
import DrawerLeft from './MainDrawerLeft.vue';

const drawerOpen = ref(false);
</script>
