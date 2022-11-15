<template>
  <router-view />
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { Application, ApplicationKey, User, UserKey } from './providers';

provide(ApplicationKey, Application);
provide(UserKey, User);
</script>
