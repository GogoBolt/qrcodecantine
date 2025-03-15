<template>
  <div class="flex min-h-[80vh] items-center justify-center">
    <UCard class="w-full max-w-md">
      <template #header>
        <h1 class="text-2xl font-bold">Connexion</h1>
      </template>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <UFormGroup label="Email" required>
          <UInput
            v-model="email"
            type="email"
            placeholder="votre@email.com"
            required
          />
        </UFormGroup>

        <UFormGroup label="Mot de passe" required>
          <UInput
            v-model="password"
            type="password"
            placeholder="••••••••"
            required
          />
        </UFormGroup>

        <div class="flex justify-between items-center">
          <UButton
            type="submit"
            color="primary"
            :loading="loading"
          >
            Se connecter
          </UButton>

          <NuxtLink
            to="/auth/forgot-password"
            class="text-sm text-gray-600 hover:text-primary-500"
          >
            Mot de passe oublié ?
          </NuxtLink>
        </div>
      </form>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const email = ref('')
const password = ref('')
const loading = computed(() => authStore.loading)

const handleLogin = () => {
  authStore.login(email.value, password.value)
}
</script>