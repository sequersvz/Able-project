import i18n from "i18next"
import lngDetector from "i18next-browser-languagedetector"
import backend from "i18next-xhr-backend"
import { initReactI18next } from "react-i18next"

i18n
  .use(backend)
  .use(lngDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  })

export default i18n
