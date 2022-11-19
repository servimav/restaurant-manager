<script setup lang="ts">
import {
  setHeaderTitle,
  DEFAULT_COLS,
  useNotification,
  goTop,
} from 'src/helpers';
import { computed, onBeforeMount, ref } from 'vue';
import { injectStrict, OrderKey } from 'src/providers';
import { IOrder, IOrderStatus, IPaginated } from 'src/types';
import OrderSelection, {
  type IFilter,
} from 'src/components/widgets/OrderSelection.vue';
import OrderWidget from 'src/components/widgets/OrderWidget.vue';
import { Dialog } from 'quasar';
import { useRoute } from 'vue-router';
import { route } from 'quasar/wrappers';
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */

const Order = injectStrict(OrderKey);
const $route = useRoute();
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

const maxPage = computed(() => {
  if (pagination.value.meta.last_page)
    return Number(pagination.value.meta.last_page);
  return pagination.value.meta.current_page;
});

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
 * onChangeStatus
 * @param p
 */
function onChangeStatus(p: { status: IOrderStatus; order: IOrder }) {
  let label = 'Aceptado';
  if (p.status === 'r-canceled') label = 'Cancelado';
  else if (p.status === 'completed') label = 'Completado';

  Dialog.create({
    title: 'Cambio de estado',
    message: `Va a cambiar el estado de la orden #${
      p.order.id
    } a ${label.toLocaleUpperCase()}`,
    ok: 'Cambiar Estado',
    cancel: 'No Cambiar',
  }).onOk(async () => {
    try {
      await Order.update(p.order.id, p.status);
      await loadOrders(filter.value.status);
      Order.count();
    } catch (error) {
      useNotification.axiosError(error);
    }
  });
}
/**
 * onPaginationChange
 * @param p
 */
async function onPaginationChange(p: number) {
  await loadOrders(filter.value.status, p);
  goTop();
}
/**
 * -----------------------------------------
 *	Lifecycle
 * -----------------------------------------
 */

onBeforeMount(async () => {
  setHeaderTitle('Pedidos');
  if ($route.query.status)
    filter.value.status = $route.query.status as IOrderStatus;
  await loadOrders(filter.value.status);
});
</script>

<template>
  <q-page padding>
    <order-selection
      v-model="filter"
      @update:model-value="
        (v) => {
          filter = v;
          loadOrders(filter.status);
        }
      "
    />

    <!-- <q-card class="no-box-shadow mt-sm"> -->
    <q-card-section class="q-px-none">
      <div class="row q-col-gutter-sm">
        <div
          :class="DEFAULT_COLS"
          v-for="(order, key) in orders"
          :key="`order-${order.id}-${key}`"
        >
          <order-widget
            :order="order"
            @change-status="(status) => onChangeStatus({ status, order })"
          />
        </div>
      </div>
    </q-card-section>

    <q-card-actions class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="pagination.meta.current_page"
        :max="maxPage"
        input
        @update:model-value="(v:number) => onPaginationChange(v)"
      />
    </q-card-actions>
    <!-- </q-card> -->
  </q-page>
</template>
