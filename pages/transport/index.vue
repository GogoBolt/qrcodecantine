<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">Gestion du Transport</h1>
      <UButton
        icon="i-heroicons-qr-code"
        label="Scanner QR Code"
        @click="openScanner"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Statistiques -->
      <UCard>
        <template #header>
          <div class="flex items-center space-x-2">
            <Icon name="i-heroicons-chart-bar" class="w-5 h-5" />
            <h2 class="text-lg font-semibold">Statistiques du jour</h2>
          </div>
        </template>
        
        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <span>Élèves transportés</span>
            <span class="font-semibold">45</span>
          </div>
          <div class="flex justify-between items-center">
            <span>Trajets effectués</span>
            <span class="font-semibold">12</span>
          </div>
          <div class="flex justify-between items-center">
            <span>Points d'arrêt</span>
            <span class="font-semibold">8</span>
          </div>
        </div>
      </UCard>

      <!-- Prochain départ -->
      <UCard>
        <template #header>
          <div class="flex items-center space-x-2">
            <Icon name="i-heroicons-clock" class="w-5 h-5" />
            <h2 class="text-lg font-semibold">Prochain départ</h2>
          </div>
        </template>
        
        <div class="space-y-4">
          <p class="text-lg font-semibold">Bus 302</p>
          <p>Départ dans : <span class="text-primary-600">15 minutes</span></p>
          <p>Élèves attendus : 25</p>
        </div>

        <template #footer>
          <UButton
            color="primary"
            variant="ghost"
            block
          >
            Voir les détails
          </UButton>
        </template>
      </UCard>

      <!-- Alertes -->
      <UCard>
        <template #header>
          <div class="flex items-center space-x-2">
            <Icon name="i-heroicons-bell-alert" class="w-5 h-5" />
            <h2 class="text-lg font-semibold">Alertes</h2>
          </div>
        </template>
        
        <div class="space-y-4">
          <div class="p-2 bg-yellow-50 rounded-lg">
            <p class="text-yellow-700">Retard de 5 minutes - Bus 301</p>
          </div>
          <div class="p-2 bg-green-50 rounded-lg">
            <p class="text-green-700">Tous les élèves sont bien arrivés</p>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Liste des trajets -->
    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">Trajets du jour</h2>
      </template>

      <UTable
        :columns="columns"
        :rows="rows"
        :loading="false"
      />
    </UCard>
  </div>
</template>

<script setup lang="ts">
const columns = [
  {
    key: 'bus',
    label: 'Bus'
  },
  {
    key: 'departure',
    label: 'Départ'
  },
  {
    key: 'arrival',
    label: 'Arrivée'
  },
  {
    key: 'students',
    label: 'Élèves'
  },
  {
    key: 'status',
    label: 'Statut'
  }
]

const rows = [
  {
    bus: 'Bus 301',
    departure: '07:30',
    arrival: '08:15',
    students: '23',
    status: 'Terminé'
  },
  {
    bus: 'Bus 302',
    departure: '08:00',
    arrival: '08:45',
    students: '25',
    status: 'En cours'
  },
  {
    bus: 'Bus 303',
    departure: '08:30',
    arrival: '09:15',
    students: '20',
    status: 'Planifié'
  }
]

const openScanner = () => {
  // Implémenter la logique du scanner QR
  console.log('Opening QR Scanner...')
}
</script>