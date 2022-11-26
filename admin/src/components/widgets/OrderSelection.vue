<script setup lang="ts">
import { IOrderStatus } from 'src/types';
import { toRefs } from 'vue';

export interface IFilter {
  icon: string;
  label: string;
  status: IOrderStatus | 'all';
}
const $props = defineProps<{ modelValue: IFilter }>();
const $emit = defineEmits<{ (e: 'update:model-value', p: IFilter): void }>();

const chips: IFilter[] = [
  // {
  //   icon: 'mdi-expand-all-outline',
  //   label: 'Todos',
  //   status: 'all',
  // },
  {
    icon: 'mdi-cart-plus',
    label: 'Nuevos',
    status: 'created',
  },
  {
    icon: 'mdi-check',
    label: 'Aceptados',
    status: 'accepted',
  },
  // {
  //   icon: 'mdi-food-turkey',
  //   label: 'Preparando',
  //   status: 'preparing',
  // },
  // {
  //   icon: 'mdi-account-cancel',
  //   label: 'Cancelado',
  //   status: 'c-canceled',
  // },
  {
    icon: 'mdi-cancel',
    label: 'Denegado',
    status: 'r-canceled',
  },
  // {
  //   icon: 'mdi-hand-okay',
  //   label: 'Listo',
  //   status: 'ready',
  // },
  // {
  //   icon: 'mdi-table-chair',
  //   label: 'Servido',
  //   status: 'ontable',
  // },
  {
    icon: 'mdi-receipt-text-check-outline',
    label: 'Completado',
    status: 'completed',
  },
];

const { modelValue } = toRefs($props);

function onSelect(chip: IFilter) {
  $emit('update:model-value', chip);
}
</script>

<template>
  <q-card class="no-box-shadow">
    <q-card-section>
      <q-chip
        v-for="(chip, key) in chips"
        :key="`chip-${key}`"
        clickable
        class="glossy"
        :icon="chip.icon"
        :label="chip.label"
        @click="onSelect(chip)"
        :color="modelValue.status === chip.status ? 'primary' : ''"
        :text-color="modelValue.status === chip.status ? 'white' : ''"
      />
    </q-card-section>
  </q-card>
</template>
