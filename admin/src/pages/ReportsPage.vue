<script setup lang="ts">
import { setHeaderTitle, DEFAULT_COLS } from 'src/helpers';
import { onBeforeMount, ref } from 'vue';
import { baseURL } from 'src/boot/axios';

const form = ref<{
  show: boolean;
  mode: 'orders' | 'products' | 'menu';
  date: null | {
    from: string;
    to: string;
  };
}>({
  mode: 'orders',
  show: false,
  date: null,
});

function openDialog(mode: 'orders' | 'products' | 'menu') {
  if (mode === 'menu') {
    window.location.assign(`${baseURL}/reports/cart`);
  } else {
    form.value = {
      mode,
      show: true,
      date: null,
    };
  }
}

function onSubmit() {
  let url: string;
  if (form.value.mode === 'products') {
    url = `${baseURL}/reports/products`;
    if (form.value.date) {
      if (form.value.date.from) url += `?from=${form.value.date.from}`;
      if (form.value.date.to) url += `&to=${form.value.date.to}`;
    }
    window.location.assign(url);
  } else if (form.value.mode === 'orders') {
    url = `${baseURL}/reports/orders`;
    if (form.value.date) {
      if (form.value.date.from) url += `?from=${form.value.date.from}`;
      if (form.value.date.to) url += `&to=${form.value.date.to}`;
    }
    window.location.assign(url);
  }
  form.value = {
    mode: 'products',
    show: false,
    date: null,
  };
}

onBeforeMount(() => {
  setHeaderTitle('Reportes');
});
</script>

<template>
  <q-page padding class="q-gutter-sm">
    <q-card>
      <q-card-section>
        <div class="row q-col-gutter-sm">
          <div :class="DEFAULT_COLS">
            <q-btn
              color="primary"
              outline
              icon="mdi-currency-usd"
              label="Datos por Pedidos"
              class="full-width"
              @click="openDialog('orders')"
            />
          </div>

          <div :class="DEFAULT_COLS">
            <q-btn
              color="primary"
              outline
              icon="mdi-food-turkey"
              label="Datos por Producto"
              class="full-width"
              @click="openDialog('products')"
            />
          </div>

          <div :class="DEFAULT_COLS">
            <q-btn
              color="primary"
              outline
              icon="mdi-format-list-checkbox"
              label="Menu"
              class="full-width"
              @click="openDialog('menu')"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-dialog v-model="form.show" persistent>
      <q-card class="dialog-form">
        <q-card-section>
          <q-date v-model="form.date" range />
        </q-card-section>

        <q-card-actions>
          <q-btn
            color="primary"
            icon="mdi-check"
            label="Solicitar Reporte"
            @click="onSubmit"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
