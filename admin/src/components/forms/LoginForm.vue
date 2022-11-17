<template>
  <q-card class="login-card">
    <q-card-section class="text-center text-grey-9">
      <div class="text-body1">
        Inicia sesión para vivir una mejor experiencia
      </div>
    </q-card-section>
    <q-form @submit.prevent="login">
      <q-card-section class="q-gutter-y-md">
        <!-- <map-locality-selector in-auth /> -->
        <q-input
          name="phone"
          v-model="loginForm.phone"
          type="tel"
          label="Teléfono"
          requried
        />

        <q-input
          name="password"
          v-model="loginForm.password"
          type="password"
          label="Contraseña"
          required
        />
      </q-card-section>

      <q-card-actions>
        <q-btn
          class="full-width"
          color="primary"
          label="Iniciar"
          type="submit"
        />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IUserRequestLogin } from 'src/types';
// import MapLocalitySelector from './MapLocalitySelector.vue';
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */
const loginForm = ref<IUserRequestLogin>({
  phone: '',
  password: '',
});
/**
 * -----------------------------------------
 *	methods
 * -----------------------------------------
 */
/**
 * login
 */
async function login() {
  console.log({
    login: loginForm.value,
  });
}
</script>

<style scoped>
.login-card {
  max-width: 25rem;
  min-width: 20rem;
}
</style>
