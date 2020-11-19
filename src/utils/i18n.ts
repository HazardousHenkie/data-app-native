import i18n from 'i18next'
import * as Localization from 'expo-localization'
// import Backend from 'i18next-http-backend'
// import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import translationEN from '../../translations/locales/en/app.json'
import translationJA from '../../translations/locales/ja/app.json'
import translationNL from '../../translations/locales/nl/app.json'

export const appLocales = ['en', 'ja', 'nl']

// https://phrase.com/blog/posts/react-native-i18n-with-expo-and-i18next-part-1/
// the translations
const resources = {
    en: {
        app: translationEN,
    },
    ja: {
        app: translationJA,
    },
    nl: {
        app: translationNL,
    },
}

// console.log(resources)

i18n.use(initReactI18next).init({
    // resources: {
    //     en: {
    //         app: {
    //             descriptionTitle: 'wtf',
    //             translation: {
    //                 descriptionTitle: 'wtf',
    //             },
    //         },
    //     },
    //     nl: {
    //         app: {
    //             descriptionTitle: 'hello world',
    //             translation: {
    //                 descriptionTitle: 'hello world',
    //             },
    //         },
    //     },
    //     ja: {
    //         app: {
    //             // descriptionTitle: 'hello world',
    //             descriptionTitle: { descriptionTitle: 'hello world' },
    //             translation: {
    //                 descriptionTitle: 'おはよう、ワールド',
    //             },
    //         },
    //     },
    // },

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
    // backend: {
    //     loadPath: 'translations/locales/{{lng}}/{{ns}}.json',
    // },
})

export default i18n
