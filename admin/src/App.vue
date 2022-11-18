<template>
  <router-view />
</template>

<script setup lang="ts">
import { provide } from 'vue';
import {
  Application,
  ApplicationKey,
  Menu,
  MenuKey,
  Order,
  OrderKey,
  User,
  UserKey,
} from './providers';

provide(ApplicationKey, Application);
provide(MenuKey, Menu);
provide(UserKey, User);
provide(OrderKey, Order);

User.load();
</script>
