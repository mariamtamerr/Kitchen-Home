<script setup>
import { Disclosure, DisclosureButton } from "@headlessui/vue";
// import { GlobeIcon } from '@heroicons/vue/solid'
import { ChevronDownIcon } from "@heroicons/vue/solid";
// import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

import { computed } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { useReservations } from "~/composables/useProducts";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n(); // Use the useI18n hook to access translations and locale
const reservations = useReservations();

// Compute the count
const reservationCount = computed(() => reservations.value.length);

const isOpen = ref(false); 

// Language switch functions
const setEnglish = () => {
  locale.value = "en"; // Change to English
  isOpen.value = false; 
};
const toggleMenu = () => {

  isOpen.value = !isOpen.value; 

  // Toggle the isOpen state
};
const setArabic = () => {
  locale.value = "ar"; // Change to Arabic
  isOpen.value = false; 
};

// const navigation = [
//   { name: t("navbar.ourKitchens"), href: "/kitchens" },
//   { name: t("navbar.reservations"), href: "/reservations" },
// ];
// Reactive navigation array
const navigation = computed(() => [
  { name: t("navbar.ourKitchens"), href: "/kitchens" },
  { name: t("navbar.reservations"), href: "/reservations" },
]);
</script>

<template>
  <Disclosure as="nav" class="bg- border-b-2 border-gray-400" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <!-- <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" /> -->
            <svg v-if="!open"  xmlns="http://www.w3.org/2000/svg" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>


          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <NuxtLink to="/">
              <h1 class="text-xl font-bold text-slate-800">
                {{ t("global.kitchenHome") }}
              </h1>
            </NuxtLink>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <NuxtLink
                to="/kitchens"
                class="rounded-md px-3 py-2 text-sm font-medium text-slate-800 cursor-pointer hover:bg-gray-700 hover:text-white"
                exact-active-class="bg-slate-900 text-white"
              >
                {{ t("navbar.ourKitchens") }}
              </NuxtLink>

              <NuxtLink
                to="/reservations"
                class="hover:cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-gray-700 hover:text-white"
                exact-active-class="bg-slate-900 text-white"
              >
                {{ t("navbar.reservations") }} ({{ reservationCount }})
              </NuxtLink>
            </div>
          </div>
          <!-- Language dropdown -->
          <Menu as="div" class="relative inline-block text-left">
            <MenuButton
            @click="isOpen=true"
              class="inline-flex justify-center rounded-md bg-white px-1.5 py-1.5 text-sm font-semibold shadow-sm ring-2 ring-inset ring-gray-600 hover:bg-gray-50 hover:text-slate-800"
            >
              <!-- {{ t('navbar.lang') }} -->
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2C16.55 2 20 6.45 20 12s-3.45 10-8 10-8-4.45-8-10 3.45-10 8-10z"/>
                <path d="M2 12h20"/>
                <path d="M12 2v20"/>
                <path d="M7 7c2.5 2 5 2 7 0"/>
              </svg>
              <!-- <GlobeIcon class="mr-1 ml-1 h-5 w-5 text-gray-800" aria-hidden="true" /> -->
              <ChevronDownIcon
                class="mr-1 ml-1 h-5 w-5 text-gray-800"
                aria-hidden="true"
              />
            </MenuButton>
            <MenuItems
            v-show="isOpen"
      class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
    >
              <MenuItem>
                <a
                  @click.prevent="setEnglish()"
                  href="#"
                  class="block px-4 py-2 text-sm hover:bg-slate-900 hover:text-white"
                  :class="{
                    'bg-slate-900 text-white': locale === 'en',
                    'text-gray-700': locale.value !== 'en',
                  }"
                >
                  En
                </a>
              </MenuItem>
              <MenuItem>
                <a
                   @click.prevent="setArabic()"
                  href="#"
                  class="block px-4 py-2 text-sm hover:bg-slate-900 hover:text-white"
                  :class="{
                    'bg-slate-900 text-white': locale === 'ar',
                    'text-gray-700': locale.value !== 'ar',
                  }"
                >
                  Ar
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
          <!-- End Language dropdown -->
        </div>
      </div>
    </div>
    <!-- mobile hamburger menu all of it  -->
    <DisclosurePanel class="sm:hidden">
      <div v-if="open" class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton 
        
          v-for="item in navigation"
          :key="item.name"
          as="template"
        >
          <NuxtLink
            :to="item.href"
            :class="[
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-slate-800 hover:bg-gray-700 hover:cursor-pointer hover:text-white',
              'block text-center rounded-md px-3 py-2 text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
            exact-active-class="bg-slate-900 text-white"
          >
            {{ item.name }}
          </NuxtLink>
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<style>
#headlessui-menu-items-v-0-3 {
  width: fit-content;
}
</style>
