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

      <q-toolbar>
        <div class="text-h6">{{ Application.headerTitle.value }}</div>
      </q-toolbar>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts" setup>
import { ApplicationKey, injectStrict } from 'src/providers';

defineProps<{
  modelValue: boolean;
}>();
const $emit = defineEmits<{ (e: 'update:model-value', p: boolean): void }>();

const Application = injectStrict(ApplicationKey);
</script>
