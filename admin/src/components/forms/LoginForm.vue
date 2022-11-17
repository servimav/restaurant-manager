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
import { injectStrict, UserKey } from 'src/providers';
import { useNotification } from 'src/helpers';
import { useRouter } from 'vue-router';
import { ROUTE_NAME } from 'src/router';
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */
const $router = useRouter();
const User = injectStrict(UserKey);
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
  try {
    await User.login(loginForm.value);
    void $router.push({ name: ROUTE_NAME.HOME });
  } catch (error) {
    useNotification.axiosError(error);
  }
}
</script>

<style scoped>
.login-card {
  max-width: 25rem;
  min-width: 20rem;
}
</style>
