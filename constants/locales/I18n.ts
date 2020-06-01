import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  ja: {
    translation: {
      感染者リスト: '感染者リスト',
      都道府県: '都道府県',
      感染者数: '感染者数',
      感染による死者数: '感染による死者数',
      都道府県人口: '都道府県人口',
    },
  },
  en: {
    translation: {
      感染者リスト: 'Infection List',
      都道府県: 'Prefecture',
      感染者数: 'Positive Number',
      感染による死者数: 'Death Number',
      都道府県人口: 'Population',
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
