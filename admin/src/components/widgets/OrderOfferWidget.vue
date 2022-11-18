<template>
  <q-card v-if="data.product" class="text-grey-9">
    <q-card-section horizontal>
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
/**
 * -----------------------------------------
 *	Setup
 * -----------------------------------------
 */

interface Props {
  data: IOrderProduct;
}
defineProps<Props>();
</script>
