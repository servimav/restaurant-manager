<template>
  <q-card v-if="data.product" class="text-grey-9">
    <q-card-section v-if="details">
      <div class="text-body1">
        {{ data.product.title }}
        <q-chip class="glossy" :label="`x${data.qty}`" />
      </div>
      <div class="text-subtitle">
        {{ toMoney(data.product.sell_price) }}
        <q-chip :label="toMoney(data.product.sell_price * data.qty)" />
      </div>
      <div class="text-subtitle"></div>
    </q-card-section>
    <q-card-section horizontal v-else>
      <div class="q-pa-md">
        <div class="text-body1">
          {{ data.product.title }}
          <q-chip class="glossy" :label="`x${data.qty}`" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import type { IOrderProduct } from 'src/types';
import { toMoney } from 'src/helpers';
/**
 * -----------------------------------------
 *	Setup
 * -----------------------------------------
 */

interface Props {
  data: Omit<IOrderProduct, 'id'>;
  details?: boolean;
}
defineProps<Props>();
</script>
