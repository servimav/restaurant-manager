<template>
  <q-layout view="lHh Lpr lFF">
    <app-header v-model="drawerOpen" :client="isCamarero" />
    <drawer-left v-model="drawerOpen" client />
    <q-page-container class="text-grey-9">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import AppHeader from './MainHeader.vue';
import DrawerLeft from './MainDrawerLeft.vue';
import { injectStrict, UserKey } from 'src/providers';

const drawerOpen = ref(false);
const User = injectStrict(UserKey);

const isCamarero = computed(() => User.isCamarero);
</script>
