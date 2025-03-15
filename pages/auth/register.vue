<template>
  <div class="flex min-h-[80vh] items-center justify-center">
    <UCard class="w-full max-w-md">
      <template #header>
        <h1 class="text-2xl font-bold">Créer un compte</h1>
      </template>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <UFormGroup label="Nom complet" required>
          <UInput
            v-model="fullName"
            placeholder="Jean Dupont"
            required
          />
        </UFormGroup>

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

        <UFormGroup label="Type de compte" required>
          <USelect
            v-model="userType"
            :options="userTypes"
            required
          />
        </UFormGroup>

        <div class="flex justify-between items-center">
          <UButton
            type="submit"
            color="primary"
            :loading="loading"
          >
            Créer mon compte
          </UButton>

          <NuxtLink
            to="/auth/login"
            class="text-sm text-gray-600 hover:text-primary-500"
          >
            Déjà inscrit ?
          </NuxtLink>
        </div>
      </form>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const loading = ref(false)
const fullName = ref('')
const email = ref('')
const password = ref('')
const userType = ref('')

const userTypes = [
  { label: 'Parent', value: 'parent' },
  { label: 'Administration', value: 'admin' },
  { label: 'Éducateur', value: 'educator' },
  { label: 'Chauffeur', value: 'driver' },
  { label: 'Cuisinière', value: 'cook' }
]

const handleRegister = async () => {
  loading.value = true
  try {
    await authStore.register({
      email: email.value,
      password: password.value,
      metadata: {
        fullName: fullName.value,
        userType: userType.value
      }
    })
  } finally {
    loading.value = false
  }
}
</script>