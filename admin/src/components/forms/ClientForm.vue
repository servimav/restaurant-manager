<script setup lang="ts">
import { IClient, IOrder, IOrderProduct } from 'src/types';
import { getDataFromQrCi, useNotification } from 'src/helpers';
import { computed, ref } from 'vue';
import { QrStream } from 'vue3-qr-reader';
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

const showReader = ref(false);
const qrReady = computed(() => client.value.ci && client.value.name);

const client = ref<IClient>({
  ci: '',
  contact: '',
  id: 0,
  name: '',
});
/**
 * onDecode
 * @param qr
 */
function onDecode(qr: string) {
  const decode = getDataFromQrCi(qr);
  if (decode) {
    client.value = {
      ci: decode.ci,
      contact: '',
      id: 0,
      name: decode.name + ' ' + decode.lastName,
    };
  }
  showReader.value = false;
}
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
      <q-card-section v-if="!qrReady">
        <qr-stream @decode="onDecode" class="mb" v-if="showReader">
          <div style="color: red" class="frame"></div>
        </qr-stream>
        <q-btn
          color="primary"
          icon="mdi-barcode-scan"
          label="Escanear Carné"
          class="full-width"
          @click="showReader = true"
        />
      </q-card-section>
      <q-card-section class="q-gutter-y-sm">
        <q-input v-model="client.name" type="text" label="Nombre" />
        <q-input v-model="client.ci" type="text" label="CI" />
        <q-input v-model="client.contact" type="tel" label="Telefono" />
      </q-card-section>
      <q-card-actions>
        <q-btn
          color="primary"
          icon="mdi-check"
          label="Completar"
          :disable="!qrReady"
          type="submit"
          class="full-width"
        />
      </q-card-actions>
    </q-form>
  </q-card>
</template>
