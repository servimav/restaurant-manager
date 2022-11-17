<script setup lang="ts">
import ProductWidget from 'src/components/widgets/ProductWidget.vue';
import ProductForm from 'src/components/forms/ProductForm.vue';
import { DEFAULT_COLS, setHeaderTitle } from 'src/helpers';
import { IProduct } from 'src/types';
import { onBeforeMount, reactive, ref } from 'vue';
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */
const formDialog = ref(false);
const page = ref(1);
const products = reactive<IProduct[]>([]);
const updateProduct = ref<IProduct>();
/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */
/**
 * openForm
 * @param update
 */
function openForm(update?: IProduct) {
  updateProduct.value = update ? update : undefined;
  formDialog.value = true;
}
/**
 * -----------------------------------------
 *	Lifecycle
 * -----------------------------------------
 */
onBeforeMount(() => {
  setHeaderTitle('Menu');
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
          outline
          @click="openForm"
        />
      </q-card-section>
      <q-card-section>
        <div class="row q-col-gutter-sm">
          <div
            :class="DEFAULT_COLS"
            v-for="(p, pKey) in products"
            :key="`product-${p.id}-${pKey}`"
          >
            <ProductWidget :data="p" />
          </div>
        </div>
      </q-card-section>

      <q-card-actions class="q-pa-lg flex flex-center">
        <q-pagination v-model="page" :max="5" input />
      </q-card-actions>
    </q-card>
  </q-page>

  <!-- Dialog -->
  <q-dialog v-model="formDialog"> <ProductForm class="dialog-form" /></q-dialog>
  <!-- / Dialog -->
</template>
