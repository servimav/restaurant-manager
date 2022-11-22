<script setup lang="ts">
import { IProduct } from 'src/types';
import { toMoney } from 'src/helpers';
import { ref } from 'vue';
import InputSpinner from 'src/components/forms/InputSpinner.vue';
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */
defineProps<{ data: IProduct; editable?: boolean; cart?: boolean }>();

const $emit = defineEmits<{
  (e: 'remove', p: IProduct): void;
  (e: 'edit', p: IProduct): void;
  (e: 'addToCart', p: { product: IProduct; qty: number }): void;
}>();

const qty = ref(1);
</script>

<template>
  <q-card>
    <q-card-actions v-if="cart">
      <div class="full-width">
        <div class="row q-col-gutter-sm">
          <div class="col-xs-4">
            <input-spinner v-model="qty" :min="1" button-class="bg-primary" />
          </div>
          <div class="col">
            <q-btn
              outline
              color="primary"
              style="height: 2.5rem"
              icon="mdi-cart-plus"
              label="Añadir"
              class="full-width"
              @click="$emit('addToCart', { product: data, qty })"
            />
          </div>
        </div>
      </div>
    </q-card-actions>
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
        />
      </div>
      <div
        class="absolute-bottom-left"
        style="padding: 0px; background-color: transparent"
      >
        <q-chip :label="toMoney(data.sell_price)" /></div
    ></q-img>
    <q-card-section>
      <div class="text-h6">{{ data.title }}</div>
      <div class="text-subtitle2">{{ data.description }}</div>
    </q-card-section>
    <q-card-section v-if="editable">
      <!-- <p>Venta: {{ toMoney(data.sell_price) }}</p> -->
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
