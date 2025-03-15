<template>
  <div class="min-h-screen bg-gray-50">
    <UHeader
      :links="headerLinks"
      :user="user"
      @logout="handleLogout"
    >
      <template #right>
        <UButton
          v-if="user"
          color="red"
          variant="ghost"
          icon="i-heroicons-power"
          @click="handleLogout"
        >
          Déconnexion
        </UButton>
      </template>
    </UHeader>
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const user = computed(() => authStore.user)

const headerLinks = [
  { label: 'Tableau de bord', to: '/dashboard' },
  { label: 'Transport', to: '/transport' },
  { label: 'Cantine', to: '/cantine' }
]

const handleLogout = () => {
  authStore.logout()
}
</script>