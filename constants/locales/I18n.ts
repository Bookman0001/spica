import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  ja: {
    translation: {
      感染者リスト: '感染者リスト',
    },
  },
  en: {
    translation: {
      感染者リスト: 'Infection List',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'ja',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
