<script setup>
import { useI18n } from "vue-i18n";
import { largeCardSections } from "~/public/assets/database/db.js";

const largeCardInfo =ref(largeCardSections.slice(0, 2));

const { t } = useI18n()
</script>

<template>
  <div>
    <!-- <Navbar/> -->
    <Hero />
    <Gallery/>
    <p class="mt-10 text-5xl mb-5 font-semibold text-slate-800 text-center">
        {{ t('navbar.ourKitchens') }}
      </p>
    <Cards v-for="card in largeCardInfo" :key="card.id" :card="card" />

    <div class="seeMore bg-[#FAFAFA] pb-16">
      <NuxtLink
      to="/kitchens"
      class="flex leading-loose  text-center justify-center text-xl  items-center text-indigo-600 hover:text-indigo-950 font-medium"
    >
      View more products
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ml-2 h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </NuxtLink>
    </div>
   

    <Branch/>
  </div>
</template>
