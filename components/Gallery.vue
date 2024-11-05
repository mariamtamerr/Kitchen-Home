<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

// i18n setup
const { t } = useI18n();

// Reactive variable to store the clicked image src
const selectedImage = ref(null);

// Method to open the image in zoomed modal
const openImage = (src) => {
  selectedImage.value = src;
};

// Method to close the zoomed modal
const closeModal = () => {
  selectedImage.value = null;
};
</script>

<template>
  <div>
    <p class="mt-16 text-5xl mb-5 font-medium text-slate-800 text-center">
      {{ t("global.gallery") }}
    </p>

    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <!-- First column -->
        <div class="space-y-2">
          <img
            class="w-full h-auto object-cover hover:scale-105 duration-300 ease-in-out cursor-pointer"
            src="/assets/images/g1.jpg"
            alt="Gallery Image 1"
            loading="lazy"
            @click="openImage('/assets/images/g1.jpg')"
          />
          <img
            class="w-full h-auto object-cover hover:scale-105 duration-300 ease-in-out cursor-pointer"
            src="/assets/images/g2.jpg"
            alt="Gallery Image 2"
            loading="lazy"
            @click="openImage('/assets/images/g2.jpg')"
          />
          <img
            class="w-full h-auto object-cover hover:scale-105 duration-300 ease-in-out cursor-pointer"
            src="/assets/images/g3.jpg"
            alt="Gallery Image 3"
            loading="lazy"
            @click="openImage('/assets/images/g3.jpg')"
          />
        </div>

        <!-- Second column -->
        <div class="space-y-2">
          <img
            class="w-full h-auto object-cover hover:scale-105 duration-300 ease-in-out cursor-pointer"
            src="/assets/images/g4.jpg"
            alt="Gallery Image 4"
            loading="lazy"
            @click="openImage('/assets/images/g4.jpg')"
          />
          <img
            class="w-full h-auto object-cover hover:scale-105 duration-300 ease-in-out cursor-pointer"
            src="/assets/images/bg5.jpg"
            alt="Gallery Image 5"
            loading="lazy"
            @click="openImage('/assets/images/bg5.jpg')"
          />
        </div>

        <!-- Third column -->
        <div class="space-y-2">
          <img
            class="w-full h-auto object-cover hover:scale-105 duration-300 ease-in-out cursor-pointer"
            src="/assets/images/g6.jpg"
            alt="Gallery Image 6"
            loading="lazy"
            @click="openImage('/assets/images/g6.jpg')"
          />
          <img
            class="w-full h-auto object-cover hover:scale-105 duration-300 ease-in-out cursor-pointer"
            src="/assets/images/g7.jpg"
            alt="Gallery Image 7"
            loading="lazy"
            @click="openImage('/assets/images/g7.jpg')"
          />
          <img
            class="w-full h-auto object-cover hover:scale-105 duration-300 ease-in-out cursor-pointer"
            src="/assets/images/classic_kitchen_2.jpg"
            alt="Gallery Image 8"
            loading="lazy"
            @click="openImage('/assets/images/classic_kitchen_2.jpg')"
          />
        </div>

        <!-- Fourth column -->
        <div class="space-y-2">
          <img
            class="w-full h-auto object-cover hover:scale-105 duration-300 ease-in-out cursor-pointer"
            src="/assets/images/g9.jpg"
            alt="Gallery Image 9"
            loading="lazy"
            @click="openImage('/assets/images/g9.jpg')"
          />
          <img
            class="w-full h-auto object-cover hover:scale-105 duration-300 ease-in-out cursor-pointer"
            src="/assets/images/g10.jpeg"
            alt="Gallery Image 10"
            loading="lazy"
            @click="openImage('/assets/images/g10.jpeg')"
          />
        </div>
      </div>
    </div>

    <!-- Modal for zoomed image display -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
      @click="closeModal"
    >
      <img
        :src="selectedImage"
        class="max-w-auto lg:max-w-lg xl:max-w-3xl mx-auto px-10 sm:px-0 max-h-[80vh] object-contain"
        @click.stop
        loading="lazy"
      />
      <button
        class="absolute hover:text-slate-800 top-4 right-4 text-white text-2xl"
        @click="closeModal"
      >
        ×
      </button>
    </div>
  </div>
</template>

<style>
/* Optional styling for the modal close button */
button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>
