<template>
  <q-page class="row items-center justify-evenly"> </q-page>
</template>

<script setup lang="ts">
import { setHeaderTitle } from 'src/helpers';
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
  setHeaderTitle('Inicio');
});
</script>
