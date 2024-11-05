<script setup>
import { useRoute } from 'vue-router';
import { useProducts } from '@/composables/useProducts';
import { useI18n } from 'vue-i18n';

const route = useRoute();
const products = useProducts(); // Access the global products state
const productId = parseInt(route.params.id); // Get the ID from the route parameters
const { t } = useI18n(); // Initialize translation function

// Find the product by ID
const product = products.value.find(p => p.id === productId) || null;

// Check if product exists and translate its details
const translatedProduct = product ? {
  ...product,
  title: t(product.title), // Translate title
  snippet: t(product.snippet), // Translate snippet
  snippet2: Array.isArray(product.snippet2) ? product.snippet2.map(item => t(item)) : [], // Translate each item in snippet2
} : null;

// Debugging
console.log('Product:', product);
console.log('Translated Product:', translatedProduct);
console.log('Translation key for title:', product?.title);
console.log('Translation key for snippet:', product?.snippet);
console.log('Translation keys for snippet2:', product?.snippet2);
console.log('Translated title:', t('kitchens.classic.cards[2].title'));
console.log('Translated snippet:', t('kitchens.classic.cards[2].snippet'));
console.log('Translated snippet2:', product?.snippet2.map(item => t(item))); // Log all translated snippet2 items

const snippet2 = product?.snippet2.map(item => t(item))
</script>


<template>
  <div v-if="translatedProduct" class="max-w-[85rem] lg:max-w-auto mx-auto">
    <div class="sm:flex px-10 sm:px-4 gap-10 bg-white shadow-md pb-10 rounded-lg overflow-hidden mx-auto mt-10 mb-16">
      <div class="left sm:w-1/2 mx-auto">
        <img :src="`/assets/images/${product.image}`" :alt="t(product.title)" class="w-full h-full object-cover" />
      </div>
      <div class="right mx-auto sm:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h1 class="text-3xl font-bold mb-4 text-gray-800">{{ t(product.title) }}</h1>
          <p class="text-gray-600 mb-6">{{ t(product.snippet) }}</p>
        </div>
        <h2 class="border-2 mt-5 mb-10"></h2>
        <h2 class="text-lg font-medium mb-2">{{t('global.keyFeatures')}}
        </h2>
        <ul class="list-disc list-inside text-gray-600">
          <li v-for="(feature, index) in product.snippet2" :key="index">{{ t(feature) }}</li>
        </ul>
        <div>
          <Modal />
        </div>
      </div>
    </div>

    <!-- start reviews -->
    <div class="mx-auto px-4 py-6">
      <h2 class="font-bold mb-10 text-2xl text-slate-800">{{ t('global.customerReviews')}}</h2>
      <Reviews />
    </div>
    <!-- end reviews -->
  </div>

  <div v-else>
    <p class="text-red-500 text-lg text-center mt-10">Product not found!</p>
  </div>
</template>
