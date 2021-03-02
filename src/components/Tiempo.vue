<template>
  <div class="row">
      <select v-model="provincia">
          <option v-for="(prov,indice) in provincias" :key="indice">
              {{prov.cod}}
          </option>
      </select>
  </div>
</template>

<script>
import {ref, reactive} from 'vue'
export default {
    name:'Tiempo',
    props:{},
    setup(){
        let provincias=reactive([])
        let provincia=ref("")

    fetch("https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((element) => {
          provincias.push(element)
        })
      })

    const verSeleccionado=()=>{
        alert(provincia.value)
    }  

    return {
        provincias, provincia, verSeleccionado
    }
}
}
</script>

<style>

</style>