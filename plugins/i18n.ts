import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import ar from '../locales/ar.json'

// Define the i18n plugin
export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en,
      ar,
    },
  });

  // Use the i18n instance in the nuxt app
  nuxtApp.vueApp.use(i18n);
});
