<script setup>
import { useI18n } from "vue-i18n";
import { largeCardSections } from "~/public/assets/database/db.js";

const largeCardInfo = ref(largeCardSections);

const { t } = useI18n()
</script>

<template>
  <div>
    <!-- <Navbar/> -->
    <Hero />
    <p class="mt-10 text-5xl mb- font-semibold text-slate-800 text-center">
        {{ t('navbar.ourKitchens') }}
      </p>
    <Cards v-for="card in largeCardInfo" :key="card.id" :card="card" />
  </div>
</template>
