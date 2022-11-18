<script setup lang="ts">
import { setHeaderTitle, DEFAULT_COLS, useNotification } from 'src/helpers';
import { computed, onBeforeMount, ref } from 'vue';
import { injectStrict, OrderKey } from 'src/providers';
import { IOrder, IOrderStatus, IPaginated } from 'src/types';
import OrderSelection, {
  type IFilter,
} from 'src/components/widgets/OrderSelection.vue';
import OrderWidget from 'src/components/widgets/OrderWidget.vue';
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */

const Order = injectStrict(OrderKey);
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */

const filter = ref<IFilter>({
  icon: 'mdi-check',
  label: 'Todos',
  status: 'all',
});

const pagination = ref<IPaginated<IOrder[]>>({
  data: [],
  links: {},
  meta: {
    current_page: 0,
  },
});
const orders = computed(() => pagination.value.data);

/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */
/**
 * loadOrders
 * @param status
 * @param page
 */
async function loadOrders(status: IOrderStatus | 'all', page?: number) {
  try {
    if (status === 'all') pagination.value = (await Order.list({ page })).data;
    else pagination.value = (await Order.filter({ status, page })).data;
  } catch (error) {
    useNotification.axiosError(error);
  }
}
/**
 * setFilter
 * @param p
 */
async function setFilter(p: IFilter) {
  filter.value = p;
  await loadOrders(p.status);
}
/**
 * -----------------------------------------
 *	Lifecycle
 * -----------------------------------------
 */

onBeforeMount(async () => {
  setHeaderTitle('Pedidos');
  await loadOrders('all');
});
</script>

<template>
  <q-page padding>
    <order-selection @select="setFilter" />

    <q-card class="no-box-shadow mt-sm">
      <q-card-section>
        <div class="text-h6">{{ filter.label }}</div>
      </q-card-section>
      <q-card-section>
        <div class="row q-col-gutter-sm">
          <div
            :class="DEFAULT_COLS"
            v-for="(order, key) in orders"
            :key="`order-${order.id}-${key}`"
          >
            <order-widget :order="order" />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
