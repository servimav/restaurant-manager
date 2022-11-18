<script setup lang="ts">
import UserWidget from 'src/components/widgets/UserWidget.vue';
import UserForm from 'src/components/forms/UserForm.vue';
import {
  DEFAULT_COLS,
  setHeaderTitle,
  useNotification,
  goTop,
} from 'src/helpers';
import { IPaginated, IUser } from 'src/types';
import { computed, onBeforeMount, ref } from 'vue';
import { injectStrict, UserKey } from 'src/providers';
import { Dialog, Notify } from 'quasar';
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */
const User = injectStrict(UserKey);
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */
const formDialog = ref(false);
const pagination = ref<IPaginated<IUser[]>>({
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
const selected = ref<IUser>();

const users = computed(() => pagination.value.data);
/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */
/**
 * onEdit
 * @param p
 */
function openForm(p?: IUser) {
  selected.value = p ? p : undefined;
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
async function onRemove(p: IUser) {
  if (p.id === 1) {
    Notify.create({
      message: `No se puede eliminar el usuario ${p.name} porque es un usuario protegido`,
      color: 'negative',
    });
    return;
  }
  Dialog.create({
    title: 'Eliminar Usuario',
    message: `Desea eliminar el usuario ${p.name}`,
    ok: 'Eliminar',
    cancel: 'Cancelar',
  }).onOk(async () => {
    try {
      await User.destroy(p.id);
      onFormCompleted();
    } catch (error) {
      useNotification.axiosError(error);
    }
  });
}
function onFormCompleted() {
  formDialog.value = false;
  selected.value = undefined;
  loadData();
}
/**
 * loadProducts
 */
async function loadData(p = 1) {
  try {
    pagination.value = (await User.list(p)).data;
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
  setHeaderTitle('Ajustes');
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
          label="Añadir Usuario"
          class="full-width"
          outline
          @click="openForm(undefined)"
        />
      </q-card-section>
      <q-card-section>
        <div class="row q-col-gutter-sm">
          <div
            :class="DEFAULT_COLS"
            v-for="(p, pKey) in users"
            :key="`user-${p.id}-${pKey}`"
          >
            <UserWidget :data="p" @click="openForm(p)" />
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
    </q-card>
  </q-page>

  <!-- Dialog -->
  <q-dialog v-model="formDialog">
    <UserForm
      class="dialog-form"
      :update="selected"
      @completed="onFormCompleted"
      @destroy="(p) => onRemove(p)"
  /></q-dialog>

  <!-- / Dialog -->
</template>
