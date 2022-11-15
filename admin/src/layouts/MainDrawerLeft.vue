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

      <!-- Categories
      <q-expansion-item :content-inset-level="0.25" v-if="categories.length">
        <template v-slot:header>
          <q-item-section avatar top>
            <q-avatar size="md" icon="mdi-apps" text-color="primary" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Categorías</q-item-label>
          </q-item-section>
        </template>

        <q-expansion-item
          expand-icon-class="text-transparent"
          :expand-separator="false"
          v-for="(cat, cKey) in categories"
          :key="`cat-${cat.tag}-${cKey}`"
          @click="searchCategory(cat.id)"
        >
          <template v-slot:header>
            <q-item-section avatar top>
              <q-avatar size="md" :icon="cat.icons.mdi" text-color="primary" />
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">{{ cat.title }}</q-item-label>
            </q-item-section>
          </template>
        </q-expansion-item>
      </q-expansion-item>
       / Categories -->

      <!-- About -->
      <q-item exact clickable :to="{ name: ROUTE_NAME.HOME }">
        <q-item-section avatar top>
          <q-avatar size="md" icon="mdi-information" text-color="primary" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Sobre Nosotros</q-item-label>
        </q-item-section>
      </q-item>
      <!-- / About -->
    </q-list>
  </q-drawer>
</template>

<script lang="ts" setup>
import { ROUTE_NAME } from 'src/router';

defineProps<{ modelValue: boolean }>();
defineEmits<{ (e: 'update:model-value', p: boolean): void }>();
</script>
