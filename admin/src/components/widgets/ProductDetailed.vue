<script setup lang="ts">
import { IProduct } from 'src/types';
import { toMoney } from 'src/helpers';
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */
defineProps<{ data: IProduct; editable?: boolean }>();
const $emit = defineEmits<{
  (e: 'remove', p: IProduct): void;
  (e: 'edit', p: IProduct): void;
}>();
</script>

<template>
  <q-card>
    <q-img :ratio="4 / 3" :src="data.image" class="full-width">
      <div
        class="absolute-bottom-right"
        style="padding: 0px; background-color: transparent"
      >
        <q-chip :label="data.category?.title" />
      </div>
      <div
        class="absolute-top-right"
        style="padding: 0px; background-color: transparent"
      >
        <q-chip
          text-color="white"
          :color="data.onsale ? 'positive' : 'negative'"
          :label="data.onsale ? 'Disponible' : 'No Disponible'"
        /></div
    ></q-img>
    <q-card-section>
      <div class="text-h6">{{ data.title }}</div>
      <div class="text-subtitle2">{{ data.description }}</div>
    </q-card-section>
    <q-card-section>
      <p>Venta: {{ toMoney(data.sell_price) }}</p>
      <p>Produccion: {{ toMoney(data.production_price) }}</p>
      <p>Precio Tope: {{ toMoney(data.top_price) }}</p>
    </q-card-section>
    <q-card-actions v-if="editable">
      <q-btn
        label="Editar"
        icon="mdi-pencil"
        color="primary"
        @click="$emit('edit', data)"
      />
      <q-btn
        outline
        color="negative"
        label="Eliminar"
        icon="mdi-delete"
        @click="$emit('remove', data)"
      />
    </q-card-actions>
  </q-card>
</template>
