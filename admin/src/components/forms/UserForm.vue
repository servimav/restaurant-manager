<script setup lang="ts">
import { data } from 'browserslist';
import { Notify } from 'quasar';
import { useNotification } from 'src/helpers';
import { injectStrict, UserKey } from 'src/providers';
import { IRoleName, IUser, IUserRequestStore } from 'src/types';
import { computed, onBeforeMount, ref } from 'vue';

const ROLES: IRoleName[] = ['admin', 'manager', 'supervisor'];

const $emit = defineEmits<{
  (e: 'completed', p: IUser): void;
  (e: 'destroy', p: IUser): void;
}>();
const $props = defineProps<{ update?: IUser }>();
const User = injectStrict(UserKey);

const form = ref<IUserRequestStore>({
  name: '',
  password: '',
  password_confirmation: '',
  phone: '',
  role: 'supervisor',
});

const isUpdate = computed(() => Boolean($props.update));

/**
 * onSubmit
 */
async function onSubmit() {
  if (form.value.password !== form.value.password_confirmation) {
    Notify.create({
      message: 'Las contraseñas no coinciden',
      color: 'negative',
    });
  } else {
    try {
      let data: IUser;
      if (isUpdate.value && $props.update)
        data = (await User.update($props.update.id, form.value)).data;
      else data = (await User.store(form.value)).data;
      $emit('completed', data);
    } catch (error) {
      useNotification.axiosError(error);
    }
  }
}

onBeforeMount(() => {
  if ($props.update) {
    form.value = {
      name: $props.update.name,
      password: '',
      password_confirmation: '',
      phone: $props.update.phone,
      role: 'supervisor',
    };
  }
});
</script>

<template>
  <q-card>
    <q-form @submit.prevent="onSubmit">
      <q-card-section>
        <div class="text-h6 text-center">
          {{ isUpdate ? 'Actualizar' : 'Crear' }} Usuario
        </div>
      </q-card-section>
      <q-card-section class="q-gutter-y-sm">
        <q-input v-model="form.name" type="text" label="Nombre" required />
        <q-input
          v-model="form.phone"
          type="tel"
          label="Telefono"
          :readonly="isUpdate"
          required
        />
        <q-select v-model="form.role" :options="ROLES" label="Rol" />
        <q-input
          v-model="form.password"
          type="password"
          label="Contraseña"
          required
        />
        <q-input
          v-model="form.password_confirmation"
          type="password"
          label="Repita Contraseña"
          required
        />
      </q-card-section>

      <q-card-actions>
        <q-btn
          color="primary"
          icon="mdi-check"
          label="Guardar"
          type="submit"
        /><q-btn
          color="negative"
          icon="mdi-delete"
          label="Eliminar"
          @click="$emit('destroy', update)"
        />
      </q-card-actions>
    </q-form>
  </q-card>
</template>
