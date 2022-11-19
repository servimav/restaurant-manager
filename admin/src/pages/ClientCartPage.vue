<script setup lang="ts">
import { setHeaderTitle, toMoney } from 'src/helpers';
import { computed, onBeforeMount } from 'vue';
import OrderProduct from 'components/widgets/OrderOfferWidget.vue';
import ClientForm from 'src/components/forms/ClientForm.vue';
import { ApplicationKey, injectStrict, OrderKey } from 'src/providers';
import { ROUTE_NAME } from 'src/router';

const App = injectStrict(ApplicationKey);
const Order = injectStrict(OrderKey);

const cart = computed(() => Order.cart);
const table = computed(() => App.table);

const totalPrice = computed(() => {
  let total = 0;
  cart.value.forEach((c) => {
    if (c.product) total += c.product.sell_price * c.qty;
  });
  return total;
});

onBeforeMount(() => {
  setHeaderTitle('Carrito');
});
</script>

<template>
  <q-page padding>
    <q-card class="no-box-shadow">
      <q-card-section>
        <div class="text-h6">Mesa No. {{ table }}</div>
      </q-card-section>
      <q-card-section v-if="cart.length">
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
      <q-card-section v-if="cart.length">
        <ClientForm :order-products="cart" :table="table" />
      </q-card-section>
    </q-card>
  </q-page>
</template>
