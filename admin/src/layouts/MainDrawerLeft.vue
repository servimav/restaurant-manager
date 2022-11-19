<template>
  <q-drawer
    :model-value="modelValue"
    @update:model-value="(v:boolean) => $emit('update:model-value', v)"
    show-if-above
    bordered
  >
    <div class="q-pa-md text-grey-9 text-center" v-if="client">Mesa 5</div>
    <div class="q-pa-md text-grey-9 text-center" v-else>
      Hola {{ userName }}
    </div>
    <q-list class="rounded-borders text-grey-9" v-if="client">
      <!-- Categories -->
      <q-expansion-item :content-inset-level="0.25" v-if="categories.length">
        <template v-slot:header>
          <q-item-section avatar top>
            <q-avatar
              size="md"
              icon="mdi-silverware-fork-knife"
              text-color="primary"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">Categorías</q-item-label>
          </q-item-section>
        </template>
        <q-expansion-item
          expand-icon-class="text-transparent"
          :expand-separator="false"
          exact
          :to="{ name: ROUTE_NAME.CLIENT_MENU }"
        >
          <template v-slot:header>
            <q-item-section avatar top> </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Todas</q-item-label>
            </q-item-section>
          </template>
        </q-expansion-item>
        <q-expansion-item
          expand-icon-class="text-transparent"
          :expand-separator="false"
          v-for="(cat, cKey) in categories"
          :key="`cat-${cat.id}-${cKey}`"
          exact
          :to="{ name: ROUTE_NAME.CLIENT_MENU, query: { category: cat.id } }"
        >
          <template v-slot:header>
            <q-item-section avatar top> </q-item-section>

            <q-item-section>
              <q-item-label lines="1">{{ cat.title }}</q-item-label>
            </q-item-section>
          </template>
        </q-expansion-item>
      </q-expansion-item>
      <!-- / Categories -->

      <!-- Cart -->
      <q-item exact clickable>
        <q-item-section avatar top>
          <q-avatar size="md" icon="mdi-cart" text-color="primary" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Carrito</q-item-label>
        </q-item-section>
      </q-item>
      <!-- / Cart -->

      <!-- Settings -->
      <q-item exact clickable>
        <q-item-section avatar top>
          <q-avatar size="md" icon="mdi-wrench" text-color="primary" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Ajustes</q-item-label>
        </q-item-section>
      </q-item>
      <!-- / Settings -->
    </q-list>

    <!--
      Admin Drawer
    -->

    <q-list class="rounded-borders text-grey-9" v-else>
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
      <q-item exact clickable :to="{ name: ROUTE_NAME.ORDERS }">
        <q-item-section avatar top>
          <q-avatar size="md" icon="mdi-cart-outline" text-color="primary" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Pedidos</q-item-label>
        </q-item-section>
      </q-item>
      <!-- / Ordenes -->

      <!-- Menu -->
      <q-item exact clickable :to="{ name: ROUTE_NAME.MENU }">
        <q-item-section avatar top>
          <q-avatar size="md" icon="mdi-food-turkey" text-color="primary" />
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
      <q-item exact clickable :to="{ name: ROUTE_NAME.SETTINGS }">
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
import { injectStrict, UserKey, MenuKey } from 'src/providers';
import { ROUTE_NAME } from 'src/router';
import { computed, onBeforeMount } from 'vue';

const Menu = injectStrict(MenuKey);

defineProps<{ modelValue: boolean; client?: boolean }>();
defineEmits<{ (e: 'update:model-value', p: boolean): void }>();
const User = injectStrict(UserKey);

const userName = computed(() => User.profile.name);

const categories = computed(() => Menu.categories);

onBeforeMount(async () => {
  await Menu.listCategories();
});
</script>
