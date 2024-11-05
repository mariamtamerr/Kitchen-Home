<template>
  <div class="mt-10 min-h-screen ">
    <h2 class="text-2xl text-center font-bold mb-4">{{ t('reservations.reservations') }}</h2>
    <div v-if="reservations.length > 0">
      <div v-for="(reservation, index) in reservations" :key="index"
           class="mb-4 sm:flex gap-16 mx-auto justify-evenly px-16 py-10 justify-items-center align-middle bg-gray-100 rounded-lg">
        
        <div class="left">
          <h3 class="text-lg mb-5 font-semibold">{{ t(reservation.product.title) }}</h3>
          <img :src="`/assets/images/${reservation.product.image}`" :alt="reservation.product.title" class="w-80" />
        </div>
        
        <div class="right mt-10">
          <p class="mb-7"><strong>{{t('global.date')}}:</strong> {{ reservation.date }}</p>
          <p class="mb-7"><strong>{{t('global.name2')}}:</strong> {{ reservation.name }}</p>
          <p><strong>{{t('global.mobile2')}}:</strong> {{ reservation.mobile }}</p>
        </div>
        
      </div>
    </div>
    <div v-else>
      <p class="text-center">{{ t('reservations.noReservationsYet') }}</p>
    </div>
  </div>
</template>

<script setup>
import { useReservations } from '@/composables/useProducts';
import { useI18n } from 'vue-i18n';

const reservations = useReservations(); // Access global reservation state
const { t } = useI18n();
</script>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>
