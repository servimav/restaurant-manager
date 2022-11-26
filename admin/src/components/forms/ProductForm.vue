<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue';
import { IProduct, IProductRequestCreate } from 'src/types';
import { injectStrict, MenuKey } from 'src/providers';
import { useNotification } from 'src/helpers';
import { serialize } from 'object-to-formdata';
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */
const Menu = injectStrict(MenuKey);
const $emit = defineEmits<{ (e: 'completed', p: IProduct): void }>();
const $props = defineProps<{ update?: IProduct }>();
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */
const categories = computed(() => Menu.categories);
const image = ref<File>();

const form = ref<IProductRequestCreate>({
  category_id: 1,
  description: '',
  image: '',
  production_price: 0,
  sell_price: 0,
  title: '',
  top_price: 0,
  onsale: false,
});

const isUpdate = computed(() => Boolean($props.update));

/**
 * onSubmit
 */
async function onSubmit() {
  try {
    let data: IProduct;
    form.value.image = image.value;

    const formData = serialize(form.value, {
      nullsAsUndefineds: true,
      booleansAsIntegers: true,
    });

    console.log({ form: form.value });
    if (isUpdate.value && $props.update) {
      data = (
        await Menu.updateProduct(
          $props.update.id,
          formData as unknown as Partial<IProductRequestCreate>
        )
      ).data;
    } else {
      data = (
        await Menu.storeProduct(formData as unknown as IProductRequestCreate)
      ).data;
    }
    $emit('completed', data);
  } catch (error) {
    useNotification.axiosError(error);
  }
}

onBeforeMount(() => {
  if ($props.update) {
    form.value = {
      category_id: $props.update.category.id,
      description: $props.update.description,
      image: $props.update.image,
      onsale: $props.update.onsale,
      production_price: $props.update.production_price,
      sell_price: $props.update.sell_price,
      title: $props.update.title,
      top_price: $props.update.top_price,
    };
  }
});
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
        <q-file outlined v-model="image" accept=".jpg, image/*" label="Imagen">
          <template v-slot:prepend>
            <q-icon name="mdi-image" />
          </template>
        </q-file>
        <q-toggle v-model="form.onsale" color="green" label="Disponible" />
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
