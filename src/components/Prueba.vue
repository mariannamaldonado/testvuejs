
<template>
  <div class="prueba">
      <h1>Prueba</h1>
      <h6>{{consulta.saludo}}</h6>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
    name:'Prueba',
    props:{
       
    },
    setup(){
        let consulta=reactive({})

        fetch('http://localhost:8081/api/welcome')
            .then(resp=>resp.json())
            .then(datos=>consulta.saludo=datos)

        return{
            consulta
        }
    }

}
</script>

<style>

</style>