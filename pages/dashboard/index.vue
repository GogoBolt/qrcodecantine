<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">Tableau de bord</h1>
      <UButton
        icon="i-heroicons-qr-code"
        label="Scanner QR Code"
        @click="openScanner"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Transport Card -->
      <UCard>
        <template #header>
          <div class="flex items-center space-x-2">
            <Icon name="i-heroicons-truck" class="w-5 h-5" />
            <h2 class="text-lg font-semibold">Transport</h2>
          </div>
        </template>
        
        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <span>Trajets aujourd'hui</span>
            <span class="font-semibold">12</span>
          </div>
          <div class="flex justify-between items-center">
            <span>Élèves transportés</span>
            <span class="font-semibold">45</span>
          </div>
        </div>

        <template #footer>
          <UButton
            to="/transport"
            color="gray"
            variant="ghost"
            block
          >
            Voir les détails
          </UButton>
        </template>
      </UCard>

      <!-- Cantine Card -->
      <UCard>
        <template #header>
          <div class="flex items-center space-x-2">
            <Icon name="i-heroicons-cake" class="w-5 h-5" />
            <h2 class="text-lg font-semibold">Cantine</h2>
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

        <template #footer>
          <UButton
            to="/cantine"
            color="gray"
            variant="ghost"
            block
          >
            Voir les détails
          </UButton>
        </template>
      </UCard>

      <!-- QR Code Card -->
      <UCard>
        <template #header>
          <div class="flex items-center space-x-2">
            <Icon name="i-heroicons-qr-code" class="w-5 h-5" />
            <h2 class="text-lg font-semibold">Mon QR Code</h2>
          </div>
        </template>
        
        <div class="flex justify-center py-4">
          <qrcode-vue
            :value="qrValue"
            :size="200"
            level="H"
          />
        </div>

        <template #footer>
          <UButton
            color="primary"
            variant="outline"
            block
            @click="downloadQR"
          >
            Télécharger
          </UButton>
        </template>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const qrValue = computed(() => {
  return JSON.stringify({
    userId: authStore.user?.id,
    timestamp: Date.now()
  })
})

const openScanner = () => {
  // Implement QR scanner logic
}

const downloadQR = () => {
  // Implement QR download logic
}
</script>