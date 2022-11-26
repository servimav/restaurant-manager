<script setup lang="ts">
import { useNotification, DEFAULT_COLS_SM, setHeaderTitle } from 'src/helpers';
import { injectStrict, MenuKey, OrderKey, UserKey } from 'src/providers';
import { computed, onBeforeMount, ref } from 'vue';
import { IProduct } from 'src/types';
import ProductWidget from 'src/components/widgets/ProductWidget.vue';
import ProductDetailed from 'src/components/widgets/ProductDetailed.vue';
import { onBeforeRouteUpdate } from 'vue-router';

const Menu = injectStrict(MenuKey);
const Order = injectStrict(OrderKey);
const User = injectStrict(UserKey);
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */

const products = computed(() => Menu.onsale);
const selected = ref<IProduct>();
const dialogDetails = ref(false);
const isCamarero = computed(() => User.isCamarero);
/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */
/**
 * loadData
 * @param cat
 */
async function loadData(cat?: number) {
  try {
    await Menu.listOnsale({ category_id: cat });
  } catch (error) {
    useNotification.axiosError(error);
  }
}
/**
 * onAddToCart
 * @param p
 */
function onAddToCart(p: { product: IProduct; qty: number }) {
  dialogDetails.value = false;
  selected.value = undefined;
  Order.addToCart({
    product_id: p.product.id,
    qty: p.qty,
    product: p.product,
  });
}
/**
 * showDetails
 * @param p
 */
function showDetails(p: IProduct) {
  selected.value = p;
  dialogDetails.value = true;
}

onBeforeMount(async () => {
  setHeaderTitle('Menu');
  await loadData();
});

onBeforeRouteUpdate((route) => {
  const cat = route.query.category;
  if (cat) {
    loadData(Number(cat));
    const category = Menu.categories.find((c) => c.id == Number(cat));
    if (category) setHeaderTitle(category.title);
  } else loadData();
});
</script>

<template>
  <q-page padding>
    <q-card class="no-box-shadow">
      <q-card-section>
        <div class="row q-col-gutter-sm">
          <div
            :class="DEFAULT_COLS_SM"
            v-for="(product, pKey) in products"
            :key="`p-${product.id}-${pKey}`"
          >
            <product-widget
              class="cursor-pointer"
              :data="product"
              @click="showDetails(product)"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-dialog v-model="dialogDetails" v-if="selected">
      <product-detailed
        :data="selected"
        class="dialog-form"
        :cart="isCamarero"
        @add-to-cart="onAddToCart"
      />
    </q-dialog>
  </q-page>
</template>
