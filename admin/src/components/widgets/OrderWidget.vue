<script setup lang="ts">
import { toMoney } from 'src/helpers';
import { IOrder } from 'src/types';
import { computed, toRefs } from 'vue';
import OrderOffer from './OrderOfferWidget.vue';
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */

const $props = defineProps<{ order: IOrder }>();
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */
const { order } = toRefs($props);
const status = computed<{
  text: string;
  icon: string;
  color: string;
  text_color: string;
}>(() => {
  switch (order.value.status) {
    case 'r-canceled':
      return {
        icon: 'mdi-cancel',
        text: 'Cancelado por usted',
        color: 'negative',
        text_color: 'white',
      };
    case 'accepted':
      return {
        icon: 'mdi-check',
        text: 'Aceptado',
        color: 'info',
        text_color: 'dark',
      };
    case 'c-canceled':
      return {
        icon: 'mdi-cancel',
        text: 'Cancelado por Cliente',
        color: 'negative',
        text_color: 'white',
      };
    case 'completed':
      return {
        icon: 'mdi-check-all',
        text: 'Completado',
        color: 'positive',
        text_color: 'white',
      };
    default:
      return {
        icon: 'mdi-clock',
        text: 'En Proceso',
        color: '',
        text_color: 'dark',
      };
  }
});
/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-body1">{{ toMoney(order.total_price) }}</div>
      <div class="absolute-top-right q-pa-xs">
        <q-chip
          class="glossy"
          :label="status.text"
          :icon="status.icon"
          :color="status.color"
          :text-color="status.text_color"
        />
      </div>
    </q-card-section>
    <q-card-section>
      <div
        v-for="(of, ofKey) in order.order_products"
        :key="`order-offer-${order.id}-${ofKey}`"
      >
        <order-offer :data="of" />
      </div>
    </q-card-section>
    <q-card-actions>
      <q-btn color="primary" label="Detalles" />
    </q-card-actions>
  </q-card>
</template>
