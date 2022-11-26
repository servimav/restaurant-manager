<script setup lang="ts">
import { DEFAULT_COLS, setHeaderTitle } from 'src/helpers';
import { injectStrict, MenuKey } from 'src/providers';
import { computed, onBeforeMount, ref } from 'vue';
import CategoryWidget from 'components/widgets/CategoryWidget.vue';
import CategoryForm from 'src/components/forms/CategoryForm.vue';
import { IProductCategory } from 'src/types';
import { Dialog } from 'quasar';

const Menu = injectStrict(MenuKey);
const categories = computed(() => Menu.categories);
const selected = ref<IProductCategory>();
const dialogForm = ref(false);

function select(c: IProductCategory) {
  selected.value = c;
  dialogForm.value = true;
}

function onRemove() {
  if (selected.value) {
    Dialog.create({
      title: 'Eliminar Categoria',
      message: `Desea eliminar la categoria ${selected.value.title}`,
      ok: 'SI',
    }).onOk(async () => {
      if (selected.value) await Menu.removeCategory(selected.value.id);
      onCompleted();
    });
  }
}

function onCompleted() {
  dialogForm.value = false;
  selected.value = undefined;
}

onBeforeMount(async () => {
  setHeaderTitle('Categorías');

  await Menu.listCategories();
});
</script>

<template>
  <q-page padding>
    <q-card class="no-box-shadow">
      <q-card-section>
        <q-btn
          icon="mdi-plus"
          label="Añadir Categoria"
          class="full-width"
          color="primary"
          @click="
            () => {
              onCompleted();
              dialogForm = true;
            }
          "
        />
      </q-card-section>
    </q-card>

    <q-card-section class="q-px-none">
      <div class="row q-col-gutter-sm">
        <div
          :class="DEFAULT_COLS"
          v-for="(c, key) in categories"
          :key="`cat-${c.id}-${key}`"
        >
          <category-widget :data="c" @click="select(c)" />
        </div>
      </div>
    </q-card-section>
  </q-page>

  <q-dialog v-model="dialogForm">
    <CategoryForm
      :update="selected"
      class="dialog-form"
      @completed="onCompleted"
      @remove="onRemove"
    />
  </q-dialog>
</template>
