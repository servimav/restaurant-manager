<script setup lang="ts">
import ProductWidget from 'src/components/widgets/ProductWidget.vue';
import ProductDetailed from 'src/components/widgets/ProductDetailed.vue';
import ProductForm from 'src/components/forms/ProductForm.vue';
import {
  DEFAULT_COLS_SM,
  setHeaderTitle,
  useNotification,
  goTop,
} from 'src/helpers';
import { IPaginated, IProduct } from 'src/types';
import { computed, onBeforeMount, ref } from 'vue';
import { injectStrict, MenuKey } from 'src/providers';
import { Dialog } from 'quasar';
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */
const Menu = injectStrict(MenuKey);
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */
const detailsDialog = ref(false);
const formDialog = ref(false);
const pagination = ref<IPaginated<IProduct[]>>({
  data: [],
  links: {},
  meta: {
    current_page: 0,
  },
});
const maxPage = computed(() => {
  if (pagination.value.meta.last_page)
    return Number(pagination.value.meta.last_page);
  return pagination.value.meta.current_page;
});
const selectedProduct = ref<IProduct>();

const products = computed(() => pagination.value.data);
/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */
/**
 * showProduct
 * @param product
 */
function showProduct(product: IProduct) {
  selectedProduct.value = product;
  detailsDialog.value = true;
}
/**
 * onEdit
 * @param p
 */
function openForm(p?: IProduct) {
  selectedProduct.value = p ? p : undefined;
  detailsDialog.value = false;
  formDialog.value = true;
}
/**
 * onPaginationChange
 * @param p
 */
async function onPaginationChange(p: number) {
  await loadData(p);
  goTop();
}
/**
 * onRemove
 * @param p
 */
async function onRemove(p: IProduct) {
  Dialog.create({
    title: 'Eliminar Producto',
    message: `Desea eliminar el producto ${p.title}?`,
    ok: 'Eliminar',
    cancel: 'Cancelar',
  }).onOk(async () => {
    try {
      await Menu.destroyProduct(p.id);
      onFormCompleted();
    } catch (error) {
      useNotification.axiosError(error);
    }
  });
}
function onFormCompleted() {
  formDialog.value = false;
  detailsDialog.value = false;
  selectedProduct.value = undefined;
  loadData();
}
/**
 * loadProducts
 */
async function loadData(p = 1) {
  try {
    pagination.value = (await Menu.list(p)).data;
  } catch (error) {
    useNotification.axiosError(error);
  }
}
/**
 * -----------------------------------------
 *	Lifecycle
 * -----------------------------------------
 */
onBeforeMount(async () => {
  setHeaderTitle('Menu');
  await loadData();
});
</script>

<template>
  <q-page padding>
    <q-card class="no-box-shadow">
      <q-card-section>
        <q-btn
          color="primary"
          icon="mdi-plus"
          label="Añadir"
          class="full-width"
          @click="openForm(undefined)"
        />
      </q-card-section>
    </q-card>
    <q-card-section class="q-px-none">
      <div class="row q-col-gutter-sm">
        <div
          :class="DEFAULT_COLS_SM"
          v-for="(p, pKey) in products"
          :key="`product-${p.id}-${pKey}`"
        >
          <ProductWidget :data="p" @click="showProduct(p)" />
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

  <!-- Dialog -->
  <q-dialog v-model="formDialog">
    <ProductForm
      class="dialog-form"
      :update="selectedProduct"
      @completed="onFormCompleted"
  /></q-dialog>

  <q-dialog v-model="detailsDialog" v-if="selectedProduct">
    <ProductDetailed
      :data="selectedProduct"
      editable
      class="dialog-form"
      @edit="openForm"
      @remove="onRemove"
  /></q-dialog>
  <!-- / Dialog -->
</template>
