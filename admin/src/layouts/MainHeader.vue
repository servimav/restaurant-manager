<template>
  <q-header elevated>
    <q-toolbar class="bg-primary">
      <q-btn
        flat
        dense
        round
        icon="mdi-menu"
        aria-label="Menu"
        @click="$emit('update:model-value', !modelValue)"
      />
      <q-toolbar-title>
        <div class="text-h6">{{ Application.headerTitle.value }}</div>
      </q-toolbar-title>
      <q-btn dense flat round icon="mdi-cart" v-if="client">
        <q-badge
          color="warning"
          v-if="cart"
          text-color="dark"
          :label="cart"
          floating
        />
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts" setup>
import { ApplicationKey, injectStrict, OrderKey } from 'src/providers';
import { computed } from 'vue';

defineProps<{
  modelValue: boolean;
  client?: boolean;
}>();
const $emit = defineEmits<{ (e: 'update:model-value', p: boolean): void }>();

const Application = injectStrict(ApplicationKey);
const Order = injectStrict(OrderKey);

const cart = computed(() => Order.cart.length);
</script>
