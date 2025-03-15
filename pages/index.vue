<template>
  <div class="min-h-[80vh] flex flex-col items-center justify-center space-y-8 py-12">
    <div class="text-center space-y-4 max-w-2xl mx-auto px-4">
      <h1 class="text-4xl font-bold text-gray-900">
        Gestion de Transport Scolaire et Cantine
      </h1>
      <p class="text-xl text-gray-600">
        Une solution complète et sécurisée pour la gestion du transport scolaire et de la cantine, basée sur des QR-Codes.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      <UCard>
        <template #header>
          <div class="flex items-center space-x-2">
            <UIcon name="i-heroicons-truck" class="w-6 h-6 text-primary-500" />
            <h2 class="text-lg font-semibold">Transport Scolaire</h2>
          </div>
        </template>
        <p class="text-gray-600">
          Suivi en temps réel des trajets, points de ramassage et de descente avec notifications instantanées.
        </p>
      </UCard>

      <UCard>
        <template #header>
          <div class="flex items-center space-x-2">
            <UIcon name="i-heroicons-cake" class="w-6 h-6 text-primary-500" />
            <h2 class="text-lg font-semibold">Cantine</h2>
          </div>
        </template>
        <p class="text-gray-600">
          Gestion des repas et des tickets de cantine avec système de QR-Code pour un accès simplifié.
        </p>
      </UCard>

      <UCard>
        <template #header>
          <div class="flex items-center space-x-2">
            <UIcon name="i-heroicons-bell-alert" class="w-6 h-6 text-primary-500" />
            <h2 class="text-lg font-semibold">Notifications</h2>
          </div>
        </template>
        <p class="text-gray-600">
          Alertes en temps réel pour les parents et le personnel éducatif sur mobile et desktop.
        </p>
      </UCard>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 mt-8">
      <UButton
        to="/auth/login"
        color="primary"
        size="lg"
        icon="i-heroicons-arrow-right-circle"
      >
        Se connecter
      </UButton>
      
      <UButton
        to="/auth/register"
        color="gray"
        variant="soft"
        size="lg"
        icon="i-heroicons-user-plus"
      >
        Créer un compte
      </UButton>
    </div>

    <div class="mt-12 text-center text-sm text-gray-500">
      <p>© 2024 Gestion Scolaire. Tous droits réservés.</p>
    </div>
  </div>
</template>

<script setup lang="ts"> 
definePageMeta({
  layout: 'default'
})
</script>