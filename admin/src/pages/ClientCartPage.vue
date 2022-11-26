<script setup lang="ts">
import { setHeaderTitle, toMoney, useNotification } from 'src/helpers';
import { computed, onBeforeMount, ref } from 'vue';
import OrderProduct from 'components/widgets/OrderOfferWidget.vue';
import { injectStrict, OrderKey } from 'src/providers';
import { ROUTE_NAME } from 'src/router';
import { useRouter } from 'vue-router';

const $router = useRouter();
const Order = injectStrict(OrderKey);

const cart = computed(() => Order.cart);
const table = ref(1);

const totalPrice = computed(() => {
  let total = 0;
  cart.value.forEach((c) => {
    if (c.product) total += c.product.sell_price * c.qty;
  });
  return total;
});

/**
 * onSubmit
 */
async function onSubmit() {
  try {
    const resp = await Order.create({
      order_products: cart.value,
      table_number: 1,
    });
    useNotification.success([`La Orden #${resp.data.id} ha sido creada`]);
    void $router.push({ name: ROUTE_NAME.CLIENT_MENU });
  } catch (error) {
    useNotification.axiosError(error);
  }
}

onBeforeMount(() => {
  setHeaderTitle('Carrito');
});
</script>

<template>
  <q-page padding>
    <q-card class="no-box-shadow" v-if="cart.length">
      <q-card-section>
        <q-input v-model="table" type="number" min="1" label="No. Mesa" />
      </q-card-section>
      <q-card-section>
        <div
          v-for="(of, ofKey) in cart"
          :key="`order-offer-${of.product_id}-${ofKey}`"
          class="mt-sm"
        >
          <order-product :data="of" details />
        </div>
        <div class="text-body1" style="margin-top: 2rem">
          Total: {{ toMoney(totalPrice) }}
        </div>
      </q-card-section>
      <q-card-section v-if="cart.length">
        <q-btn
          color="primary"
          icon="mdi-check"
          class="full-width"
          label="Completar"
          @click="onSubmit"
        />
      </q-card-section>
    </q-card>

    <q-card-section v-else>
      <q-btn
        color="primary"
        icon="mdi-cart-plus"
        class="full-width"
        outline
        label="Ver Menu"
        :to="{ name: ROUTE_NAME.CLIENT_MENU }"
      />
    </q-card-section>
  </q-page>
</template>
