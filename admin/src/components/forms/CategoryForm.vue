<script setup lang="ts">
import { useNotification } from 'src/helpers';
import { injectStrict, MenuKey } from 'src/providers';
import { IProductCategory } from 'src/types';
import { onBeforeMount, ref } from 'vue';

const $props = defineProps<{ update?: IProductCategory }>();
const $emit = defineEmits<{
  (e: 'completed'): void;
  (e: 'remove'): void;
}>();

const Menu = injectStrict(MenuKey);

const form = ref<Omit<IProductCategory, 'id'>>({
  tag: '',
  title: '',
});

async function onSubmit() {
  try {
    if ($props.update) {
      await Menu.updateCategory($props.update.id, form.value);
    } else {
      await Menu.createCategory(form.value);
    }
    $emit('completed');
  } catch (error) {
    useNotification.axiosError(error);
  }
}

onBeforeMount(() => {
  if ($props.update) {
    form.value = {
      tag: $props.update.tag,
      title: $props.update.title,
    };
  }
});
</script>

<template>
  <q-card>
    <q-form @submit.prevent="onSubmit">
      <q-card-section>
        <q-input v-model="form.title" type="text" label="Categoria" />
      </q-card-section>
      <q-card-actions>
        <q-btn color="primary" icon="mdi-check" label="Guardar" type="submit" />
        <q-btn
          color="negative"
          icon="mdi-delete"
          outline
          label="Eliminar"
          @click="$emit('remove')"
        />
      </q-card-actions>
    </q-form>
  </q-card>
</template>
