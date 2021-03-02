<template>
<div class="item">
    <!-- v-model enlaza un elemento de html con una raviable de js -->
  <select v-model="eSeleccionado" @change="verSeleccionado">
      <!-- //atributo value es de la etiqueta option -->
    <option v-for="(job,indice) in jobs" :key="indice" :value="persona.imagen">{{job.title}} - {{job.id}}</option> 
  </select>
  <!-- <button @click="cambiarSelect">Cambiar</button> -->
  <img class="imagen" :src="eSeleccionado">
</div>
</template>

<script>

import {ref} from 'vue'

export default {
  name: 'Directiva',
  props:{},
  setup(){
    //creo una variable y la hago reactiva 
    let eSeleccionado=ref("")

     let jobs=[
     {title:"UX Designer",id:1,details:"lorem",imagen:'ux.jpg'},
     {title:"Web Developer",id:2,details:"lorem",imagen:'web.jpg'},
     {title:"Vue Developer",id:3,details:"lorem",imagen:'vue.svg'}
    ]

    function verSeleccionado(){
       // alert("has seleccionado el select" + eSeleccionado.value)
    }
    // const cambiarSelect=()=>{
    //     eSeleccionado.value="LUIS"
    // }


    return {
          verSeleccionado,
          eSeleccionado,
        //   cambiarSelect
        jobs
    }
  }
}
</script>

<style>
.item {
    /* font-family: sans-serif;
  border: 1px solid rgb(56, 45, 53);
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto; */
}

.imagen{
    max-width: 150px;
}
</style>