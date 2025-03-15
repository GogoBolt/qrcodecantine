<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">Gestion de la Cantine</h1>
      <UButton
        icon="i-heroicons-qr-code"
        label="Scanner QR Code"
        @click="openScanner"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Menu du jour -->
      <UCard>
        <template #header>
          <div class="flex items-center space-x-2">
            <Icon name="i-heroicons-cake" class="w-5 h-5" />
            <h2 class="text-lg font-semibold">Menu du jour</h2>
          </div>
        </template>
        
        <div class="space-y-4">
          <div>
            <h3 class="font-medium">Entrée</h3>
            <p>Salade composée</p>
          </div>
          <div>
            <h3 class="font-medium">Plat principal</h3>
            <p>Poulet rôti et riz</p>
          </div>
          <div>
            <h3 class="font-medium">Dessert</h3>
            <p>Fruit de saison</p>
          </div>
        </div>
      </UCard>

      <!-- Statistiques -->
      <UCard>
        <template #header>
          <div class="flex items-center space-x-2">
            <Icon name="i-heroicons-chart-bar" class="w-5 h-5" />
            <h2 class="text-lg font-semibold">Statistiques</h2>
          </div>
        </template>
        
        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <span>Repas servis aujourd'hui</span>
            <span class="font-semibold">78</span>
          </div>
          <div class="flex justify-between items-center">
            <span>Tickets restants</span>
            <span class="font-semibold">156</span>
          </div>
        </div>
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
            <p class="text-yellow-700">5 élèves avec allergies aujourd'hui</p>
          </div>
          <div class="p-2 bg-red-50 rounded-lg">
            <p class="text-red-700">Stock de tickets bas (10 restants)</p>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Liste des repas -->
    <UCard>
      <template #header>
        <h2 class="text-lg font-semibold">Repas servis aujourd'hui</h2>
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
    key: 'time',
    label: 'Heure'
  },
  {
    key: 'student',
    label: 'Élève'
  },
  {
    key: 'class',
    label: 'Classe'
  },
  {
    key: 'menu',
    label: 'Menu'
  },
  {
    key: 'allergies',
    label: 'Allergies'
  }
]

const rows = [
  {
    time: '11:30',
    student: 'Marie Dupont',
    class: 'CE2',
    menu: 'Standard',
    allergies: 'Aucune'
  },
  {
    time: '11:35',
    student: 'Lucas Martin',
    class: 'CM1',
    menu: 'Sans gluten',
    allergies: 'Gluten'
  },
  {
    time: '11:40',
    student: 'Sophie Bernard',
    class: 'CE1',
    menu: 'Standard',
    allergies: 'Aucune'
  }
]

const openScanner = (): void => {
  // Implémenter la logique du scanner QR
  console.log('Opening QR Scanner...')
}

interface ExposeType {
  openScanner: () => void
}

defineExpose<ExposeType>({ openScanner })
</script>