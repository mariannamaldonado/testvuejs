// import i18next 
import i18next from 'i18next'
import Backend from 'i18next-fs-backend'
import es from './es.json'
import en from './en.json'

export default i18next.use(Backend).init({
    lng: 'es',
    fallbacklng: 'en',
    debug: true,
    resources: {
      en,
      es
    },
    Backend:{
      loadPath: '@/locales/{{en}}/{{es}}.json'
    }
   
})

