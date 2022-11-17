<script setup lang="ts">
import { IProduct } from 'src/types';
import { toMoney } from 'src/helpers';
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */
const $props = defineProps<{ data: IProduct }>();
</script>

<template>
  <q-card>
    <img src="/images/default.jpg" />
    <q-card-section>
      <div class="text-h6">{{ data.title }}</div>
      <div class="text-subtitle2">{{ toMoney(data.sell_price) }}</div>
    </q-card-section>
  </q-card>
</template>
