import { createI18n } from 'vue-i18n';
import type { I18n } from 'vue-i18n'; // Type-only import for I18n
import en from '../locales/en.json';
import ar from '../locales/ar.json';

// Define the i18n plugin
export default defineNuxtPlugin((nuxtApp) => {
  const i18n: I18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en,
      ar,
    },
  });

  // Function to update the document direction
  const updateDirection = (locale: string): void => {
    if (process.client) { // Check if we are in the client context
      document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
    }
  };

  // Set initial direction based on default locale
  updateDirection(i18n.global.locale as string); // Ensure type is string

  // Use the i18n instance in the nuxt app
  nuxtApp.vueApp.use(i18n);

  // Watch for locale changes
  nuxtApp.vueApp.mixin({
    watch: {
      '$i18n.locale': {
        handler(newLocale: string) {
          updateDirection(newLocale as string); // Ensure type is string
        },
        immediate: true, // Run immediately to set initial direction
      },
    },
  });
});
