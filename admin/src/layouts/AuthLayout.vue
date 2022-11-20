<template>
  <q-layout view="lHh Lpr lff">
    <q-page-container class="bg-grey-8">
      <q-page padding class="q-pa-sm">
        <q-card-section class="vh mx-auto">
          <login-form class="absolute-center" />
        </q-card-section>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import LoginForm from 'src/components/forms/LoginForm.vue';
</script>

<style scoped>
.vh {
  height: 100vh;
}
</style>
