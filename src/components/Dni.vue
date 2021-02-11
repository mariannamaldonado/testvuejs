<template>
    <label :class="validacion">{{label}}</label>
    <input  @keyup="comprobar"/>
</template>

<script>
import {ref} from 'vue'
export default {
    name:'Dni', 
    props: {
        label: String
    },
    setup(){
        let validacion=ref("label-bad")  //variable reactiva
        const comprobar=(e)=>{
            console.log(e.target.value)
            let texto=e.target.value
            let reqExDni= /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i

              // validacion.value="label-ok"
            if(reqExDni.test(texto))
              validacion.value="label-ok"
            else 
                validacion.value="label-bad"

        }
        return{
            comprobar,
            validacion
        }
    }
}
</script>

<style lang="scss" scoped>
    .label-bad{
        padding: 5px;
        color: #fff;
        background: red;
    }
    .label-ok{
          padding: 5px;
        color: #fff;
        background: green;   
    }
</style>