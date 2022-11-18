<script setup lang="ts">
import { IUser } from 'src/types';

defineProps<{ data: IUser }>();
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">
        {{ data.name }} ({{ data.role?.toLocaleUpperCase() }})
      </div>
      <div class="text-subtitle2">{{ data.phone }}</div>
    </q-card-section>
  </q-card>
</template>
