<template>
    <label class="validacion">{{label}}</label>
    <input v-model="texto" @keydown="comprobar"/>
</template>

<script>
import {ref} from 'vue'
export default {
    name:'Dni', 
    props: {
        label: String
    },
    setup(){
        let texto=ref("")  //variable reactiva
        let reqExDni= /^\d{8}[a-zA-Z]$/
        let color = ref();

        const comprobar=(e)=>{
            console.log("e.target")
            texto += e.key
            if(reqExDni.texto(texto)){
                color.value="background-color: green;"
            }else{
                color.value = "background-color: red;"
            }  
        }

        return{
            texto,
            comprobar

        }
    }
}
</script>

<style lang="scss" scoped>
    .validacion{
        padding: 5px;
        color: #fff;
        background: red;
    }
</style>