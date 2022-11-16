<script setup lang="ts">
import { computed, ref } from 'vue';
import { IProduct, IProductRequestCreate } from 'src/types';
import { injectStrict, MenuKey } from 'src/providers';
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */
const Menu = injectStrict(MenuKey);
const $props = defineProps<{ update?: IProduct }>();
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */

const categories = computed(() => Menu.categories);
console.log({ categories: categories.value });
const form = ref<IProductRequestCreate>({
  category_id: 1,
  description: '',
  image_id: 1,
  production_price: 0,
  sell_price: 0,
  title: '',
  top_price: 0,
});

const isUpdate = computed(() => Boolean($props.update));
/**
 * onSubmit
 */
async function onSubmit() {
  if ($props.update) {
    form.value = {
      category_id: $props.update.category_id,
      description: $props.update.description,
      image_id: $props.update.image_id,
      production_price: $props.update.production_price,
      sell_price: $props.update.sell_price,
      title: $props.update.title,
      top_price: $props.update.top_price,
    };
  }
}
</script>

<template>
  <q-card>
    <q-form @submit.prevent="onSubmit">
      <q-card-section>
        <div class="text-h6 text-center">
          {{ isUpdate ? 'Actualizar' : 'Crear' }} Producto
        </div>
      </q-card-section>
      <q-card-section class="q-gutter-y-sm">
        <q-input v-model="form.title" type="text" label="Nombre" required />
        <q-input
          v-model="form.description"
          type="textarea"
          label="Detalles"
          required
        /><q-select
          v-model="form.category_id"
          :options="categories"
          emit-value
          map-options
          option-label="title"
          option-value="id"
          label="Categoria"
        />
        <q-input
          v-model="form.production_price"
          type="number"
          styp="0.01"
          label="Precio de Producción"
          prefix="$"
        /><q-input
          v-model="form.sell_price"
          type="number"
          styp="0.01"
          label="Precio de Venta"
          prefix="$"
          required
        /><q-input
          v-model="form.top_price"
          type="number"
          styp="0.01"
          label="Precio de Superable"
          prefix="$"
        />
      </q-card-section>
      <q-card-actions>
        <q-btn
          color="primary"
          icon="mdi-check"
          label="Guardar"
          type="submit"
          class="full-width"
        />
      </q-card-actions>
    </q-form>
  </q-card>
</template>
