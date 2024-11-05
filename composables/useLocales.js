// composables/useLocales.js

const translations = {
    en: {
        title: 'Our Kitchens',
        reservations: 'Reservations',
        lang: 'Lang',
        direction: 'ltr', // Set the direction for English
    },
    ar: {
        title: 'مطبخنا',
        reservations: 'الحجوزات',
        lang: 'لغة',
        direction: 'rtl', // Set the direction for Arabic
    },
};
  
export const useLocales = () => {
    const currentLocale = useState('currentLocale', () => 'en'); // default to English
  
    const toggleLocale = () => {
        currentLocale.value = currentLocale.value === 'en' ? 'ar' : 'en';
      };

    const setEnglish = () => {
        currentLocale.value = 'en';
    };
  
    const setArabic = () => {
        currentLocale.value = 'ar';
    };
  
    const t = (key) => {
        return translations[currentLocale.value][key] || key;
    };

    const getDirection = () => {
        return translations[currentLocale.value].direction; // Get the text direction
    };
  
    return {
        currentLocale,
        setEnglish,
        setArabic,
        t,
        getDirection, // Export the direction function
        toggleLocale,
    };
};
