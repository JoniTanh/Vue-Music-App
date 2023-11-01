import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import fi from '@/locales/fi.json'

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    fi
  }
})
