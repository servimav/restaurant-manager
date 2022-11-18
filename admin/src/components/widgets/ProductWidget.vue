<script setup lang="ts">
import { IProduct } from 'src/types';
import { toMoney } from 'src/helpers';
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */
defineProps<{ data: IProduct }>();
</script>

<template>
  <q-card>
    <q-img :ratio="4 / 3" :src="data.image" class="full-width">
      <div
        class="absolute-bottom-right"
        style="padding: 0px; background-color: transparent"
      >
        <q-chip :label="data.category?.title" dense />
      </div>
      <div
        class="absolute-top-right"
        style="padding: 0px; background-color: transparent"
      >
        <q-chip
          dense
          text-color="white"
          :color="data.onsale ? 'positive' : 'negative'"
          :label="data.onsale ? 'Disponible' : 'No Disponible'"
        /></div
    ></q-img>
    <q-card-section class="q-py-xs">
      <div class="text-body1">{{ data.title }}</div>
      <div class="text-subtitle2">{{ toMoney(data.sell_price) }}</div>
    </q-card-section>
  </q-card>
</template>
