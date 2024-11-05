<script setup>
import { useI18n } from "vue-i18n";

// i18n setup
const { t } = useI18n();

</script>


<template>
    <div class="max-w-[85rem]  px-4 py-10 sm:px-6 lg:px-20 lg:py-14 mx-auto">

        <p class="mt-5 text-4xl mb-14 font-medium text-slate-800 text-center">
      {{ t("global.branch") }}
        </p>

        <div class="branchItself sm:flex gap-10  justify-center items-center">
            <div class="left ">
                <img class="max-w-64 mx-auto lg:max-w-80 rounded-s-lg" src="/assets/images/find.png" alt="Blog Image">
            </div>
            <div class="right max-w-96 mt-5 sm:mt-0 flex flex-col">
                <h3 class=" font-normal font- mx-auto text-center text-3xl text-gray-800 ">
                    {{ t("global.open") }}
                </h3>
                <p class="mt-5 ms-5 mx-auto  text-center text-sm  text-gray-500">
                    {{ t("global.open2") }}
                </p>
            </div>

        </div>
    </div>
</template>

