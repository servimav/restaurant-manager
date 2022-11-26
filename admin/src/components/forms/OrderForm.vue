<script setup lang="ts">
import { IClient, IOrder, IOrderProduct, IOrderRequestCreate } from 'src/types';
import { useNotification } from 'src/helpers';
import { ref } from 'vue';
import { injectStrict, OrderKey } from 'src/providers';

const $props = defineProps<{
  orderProducts: Omit<IOrderProduct, 'id'>[];
  table: number;
}>();
const $emit = defineEmits<{ (e: 'completed', p: IOrder): void }>();
const Order = injectStrict(OrderKey);
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */

const form = ref<IOrderRequestCreate>({
  order_products: [],
  table_number: 0,
});
/**
 * onSubmit
 */
async function onSubmit() {
  try {
    const resp = await Order.create({
      order_products: $props.orderProducts,
      table_number: 1,
    });
    useNotification.success([`La Orden #${resp.data.id} ha sido creada`]);
    $emit('completed', resp.data);
  } catch (error) {
    useNotification.axiosError(error);
  }
}
</script>

<template>
  <q-card class="no-box-shadow">
    <q-card-section>
      <div class="text-h6 text-center">Completar Orden</div>
    </q-card-section>
    <q-form @submit.prevent="onSubmit">
      <q-card-section class="q-gutter-y-sm"> </q-card-section>
      <q-card-actions>
        <q-btn
          color="primary"
          icon="mdi-check"
          label="Completar"
          type="submit"
          class="full-width"
        />
      </q-card-actions>
    </q-form>
  </q-card>
</template>
