// import i18next 
import i18next from 'i18next'

fetch('http://localhost:8082/api/lang/es')
.then(res=>res.json())
.then(data=>{
  i18next.addResource('es','traslation',data)
})

export default i18next.init({
    lng: 'en',
    fallbacklng: 'en',
    debug: true,
    resources: {
      en:{
        traslation:{}
      },
      es:{
        traslation:{}
      }
    }
   
})

