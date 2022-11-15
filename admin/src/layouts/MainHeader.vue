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

      <q-toolbar>Some Title </q-toolbar>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts" setup>
defineProps<{
  modelValue: boolean;
}>();
const $emit = defineEmits<{ (e: 'update:model-value', p: boolean): void }>();
</script>
