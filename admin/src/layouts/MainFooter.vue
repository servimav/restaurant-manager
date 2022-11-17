<template>
  <q-footer elevated class="bg-primary">
    <q-tabs
      align="justify"
      indicator-color="transparent"
      active-color="secondary"
      no-caps
    >
      <q-route-tab exact :to="{ name: ROUTE_NAME.HOME }">
        <q-icon name="mdi-home" size="1.6rem" />
      </q-route-tab>
      <q-route-tab exact :to="{ name: ROUTE_NAME.HOME }">
        <q-icon name="mdi-store" size="1.6rem" />
      </q-route-tab>
      <q-route-tab exact :to="{ name: ROUTE_NAME.HOME }">
        <q-icon name="mdi-cart-outline" size="1.6rem" />
        <q-badge color="dark" floating> 5 </q-badge>
      </q-route-tab>
      <q-tab>
        <q-icon
          size="1.6rem"
          name="mdi-apps"
          @click="$emit('update:model-value', !modelValue)"
        />
      </q-tab>
    </q-tabs>
  </q-footer>
</template>
<script lang="ts" setup>
import { ROUTE_NAME } from 'src/router';

defineProps<{ modelValue: boolean }>();
defineEmits<{
  (e: 'update:model-value', p: boolean): void;
}>();
</script>

<style>
.footer-tabs .q-tab__icon {
  font-size: 5rem;
}
</style>
