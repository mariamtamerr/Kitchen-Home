<template>
  <div>
    <div class="max-w-sm space-y-3 mx-auto mt-5">
      <div class="relative">
        <input
          v-model='name'
          type="name"
          class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none d:bg-neutral-700 d:border-transparent d:text-neutral-400 d:placeholder-neutral-500 d:focus:ring-neutral-600"
          :placeholder="t('global.name')"
        />
        <div
          class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none"
        >
          <svg
            class="shrink-0 size-4 text-gray-500 d:text-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>

      <div class="relative">
        <input
          v-model='mobile'
          type="phone"
          class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none d:bg-neutral-700 d:border-transparent d:text-neutral-400 d:placeholder-neutral-500 d:focus:ring-neutral-600"
           :placeholder="t('global.mobile')"
        />
        <div
          class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none"
        >
          <svg
            class="shrink-0 size-4 text-gray-500 d:text-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="7" y="2" width="10" height="20" rx="2" ry="2"></rect>
            <path d="M11 18h2"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import { useI18n } from "vue-i18n";


const { t } = useI18n()
const emits = defineEmits(['updateName', 'updateMobile']);

const name = ref('');
const mobile = ref('');

watch(name, (newValue) => emits('updateName', newValue));
watch(mobile, (newValue) => emits('updateMobile', newValue));
</script>
