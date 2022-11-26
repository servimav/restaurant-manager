<script setup lang="ts">
import { IProductCategory } from 'src/types';

defineProps<{
  data: IProductCategory;
}>();
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ data.title }}</div>
    </q-card-section>
  </q-card>
</template>
