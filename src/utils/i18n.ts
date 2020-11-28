import i18n from 'i18next'
import * as Localization from 'expo-localization'

import { initReactI18next } from 'react-i18next'

import translationEN from '../../translations/locales/en.json'
import translationJA from '../../translations/locales/ja.json'
import translationNL from '../../translations/locales/nl.json'

const resources = {
    en: translationEN,
    ja: translationJA,
    nl: translationNL,
}

export const appLocales = ['en', 'ja', 'nl']

i18n.use(initReactI18next).init({
    resources,
    debug: true,
    lng: Localization.locale,
    fallbackLng: 'en',
    whitelist: appLocales,
    interpolation: {
        escapeValue: false,
    },
    react: {
        useSuspense: false,
        wait: true,
    },
})

export default i18n
