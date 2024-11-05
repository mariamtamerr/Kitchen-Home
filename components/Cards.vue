<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const props = defineProps(["card"]);
import { largeCardSections } from '~/public/assets/database/db.js';


const largeCardInfo = ref(largeCardSections.map(section => ({
  ...section,
  title: t(section.title), // Translate section title
  snippet: t(section.snippet), // Translate section snippet
  cards: section.cards.map(card => ({
    ...card,
    title: t(card.title), // Translate card title
    snippet: t(card.snippet), // Translate card snippet
  }))
})));
</script>

<template>
  <div class="bg-[#FAFAFA]">
    <!-- Card Blog -->
    <div class="max-w-[85rem] bg-[#FAFAFA] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- <p class="mt-1 text-5xl mb-20 font-semibold text-slate-800 text-center">
        {{ t('cards.kitchen.title') }}
      </p> -->

      <!-- Title -->
    <div class="max-w-2xl mx-auto text-center mb-6">
      <p class="mt-1 text-3xl font-semibold text-indigo-600">
        {{ t(card.title) }} <!-- Use the translation key for the title -->
      </p>
    </div>
      
      <!-- End Title -->

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="TheCardItself" v-for="singleCard in card.cards" :key="singleCard.id">
          <NuxtLink
            class="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition d:hover:bg-white/10 d:focus:bg-white/10"
            :to="`/kitchens/${singleCard.id}`"
          >
            <div class="aspect-w-16 aspect-h-9 h-80">
              <img
                class="w-full h-full mx-auto object-cover rounded-xl hover:scale-105 transform transition duration-500 ease-in-out"
                :src="`/assets/images/${singleCard.image}`"
                alt="Layer Image"
              />
            </div>
            <h3
              class="mt-5 text-lg text-center font-bold text-gray-800 d:text-neutral-300 d:hover:text-white"
            >
            {{ t(singleCard.title) }} <!-- Use localization for single card title -->
            </h3>
            <p
              class="mt-3 inline-flex items-center gap-x-1 text-base font-medium text-[#6B6B6B]"
            >
            {{ t(singleCard.snippet) }}  <!-- Use localization for single card snippet -->
            </p>
          </NuxtLink>
          <!-- End Card -->
        </div>
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Card Blog -->
  </div>
</template>
