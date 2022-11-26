<script setup lang="ts">
import { toMoney } from 'src/helpers';
import { IOrder, IOrderStatus } from 'src/types';
import { computed, toRefs } from 'vue';
import OrderOffer from './OrderOfferWidget.vue';
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */

const $props = defineProps<{ order: IOrder; editable?: boolean }>();
const $emit = defineEmits<{ (e: 'change-status', p: IOrderStatus): void }>();
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
        text: 'Denegado',
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
        text: 'Cancelado',
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
      <div class="absolute-top-left q-pa-xs">
        <q-chip class="glossy" :label="`#${order.id}`" />
      </div>
      <div class="absolute-top-right q-pa-xs">
        <q-chip :label="`Mesa ${order.table_number}`" />
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
        class="mt-sm"
      >
        <order-offer :data="of" details />
      </div>
    </q-card-section>
    <q-card-section>
      <div class="text-body1">Total: {{ toMoney(order.total_price) }}</div>
      <div class="text-subtitle">Creado por: {{ order.user.name }}</div>
    </q-card-section>

    <q-card-section v-if="editable">
      <q-btn
        color="primary"
        dense
        label="Aceptar"
        @click="$emit('change-status', 'accepted')"
        v-if="order.status === 'created'"
      />
      <q-btn
        color="negative"
        dense
        label="Cancelar"
        @click="$emit('change-status', 'r-canceled')"
        v-if="order.status === 'accepted' || order.status === 'created'"
      />
      <q-btn
        color="positive"
        dense
        label="Completar"
        @click="$emit('change-status', 'completed')"
        v-if="order.status === 'accepted'"
      />
    </q-card-section>
  </q-card>
</template>
