<template>
  <q-drawer
    :model-value="modelValue"
    @update:model-value="(v:boolean) => $emit('update:model-value', v)"
    show-if-above
    bordered
  >
    <div class="q-pa-md text-grey-9 text-center">Hola, Usuario</div>
    <q-list class="rounded-borders text-grey-9">
      <!-- HOME -->
      <q-item exact clickable :to="{ name: ROUTE_NAME.HOME }">
        <q-item-section avatar top>
          <q-avatar size="md" icon="mdi-home" text-color="primary" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Inicio</q-item-label>
        </q-item-section>
      </q-item>
      <!-- / HOME -->

      <!-- Ordenes -->
      <q-item exact clickable :to="{ name: ROUTE_NAME.HOME }">
        <q-item-section avatar top>
          <q-avatar size="md" icon="mdi-cart-outline" text-color="primary" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Ordenes</q-item-label>
        </q-item-section>
      </q-item>
      <!-- / Ordenes -->

      <!-- Menu -->
      <q-item exact clickable :to="{ name: ROUTE_NAME.HOME }">
        <q-item-section avatar top>
          <q-avatar
            size="md"
            icon="mdi-card-text-outline"
            text-color="primary"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Menu</q-item-label>
        </q-item-section>
      </q-item>
      <!-- / Menu -->

      <!-- Reportes -->
      <q-item exact clickable :to="{ name: ROUTE_NAME.HOME }">
        <q-item-section avatar top>
          <q-avatar size="md" icon="mdi-chart-bar" text-color="primary" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Reportes</q-item-label>
        </q-item-section>
      </q-item>
      <!-- / Reportes -->

      <!-- Settings -->
      <q-item exact clickable :to="{ name: ROUTE_NAME.HOME }">
        <q-item-section avatar top>
          <q-avatar size="md" icon="mdi-wrench" text-color="primary" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Ajustes</q-item-label>
        </q-item-section>
      </q-item>
      <!-- / Settings -->
    </q-list>
  </q-drawer>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from 'src/router';

defineProps<{ modelValue: boolean }>();
defineEmits<{ (e: 'update:model-value', p: boolean): void }>();
</script>
