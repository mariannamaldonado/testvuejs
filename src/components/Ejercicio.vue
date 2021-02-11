<template>
    <h1>COMPONENTE DE PRUEBA</h1>
    <div>AMARILLO</div>
    <HelloWorld id="user" />
    <HelloWorld id="pass"/>
    <button @click="recogerDatos">Recoger Datos</button>
</template>

<script>
import {ref, reactive} from 'vue'
import HelloWorld from './HelloWorld.vue'

export default {
  name: 'Ejercicio',
  props:{},
  components:{
    HelloWorld
  },

  setup(){
    function recogerDatos(){
      console.log("estas aqui")
    }

    return{
    }
  }
}
</script>

<style lang="scss" scoped>
  .resultado-amarillo{
    background: palegoldenrod;
    height: 50px;
  }
  .resultado-rojo{
    background: rgb(177, 33, 23);
    height: 50px;
  }
</style>