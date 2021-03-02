<template>
  <div class="card">
  <div class="card-header">
   <b>EJERCICIO 8:</b> 
  </div>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"> Multi Lang <br/> {{saludo}}
        </p>
  </div>
</div>
  <div class="row">
       <select v-model="currentLang">
         <option v-for="(l,i) in langs" :key="i">
           {{l}}
         </option>
       </select>
       <h1>{{lang.hello}}</h1>
       <h1>{{lang.bye}}</h1>
       <!-- <button @click="" ></button> -->
      
    </div> 
</template>

<script>
import {reactive, ref, computed, onMounted} from 'vue'
import i18next from 'i18next'


export default {
  name: 'Lang',
  props: {},
  setup(){

    let saludo = computed(()=> i18next.t('hello') ) 
    console.log(i18next)

    let langs= reactive(i18next.languages)
    let currentLang=ref(i18next.language)
    let lang=computed(()=>{
      return i18next.getDataByLanguage(currentLang.value)
    })
       
       return{
         lang, langs, currentLang, saludo
       }                                  
  }
}
</script>

<style lang="scss" scoped>
 .card {
        display:flex;
        margin:50px;

    }


</style>
