<template>

    <div class="card">
  <div class="card-header">
   Ejercicio 2
  </div>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text">Crear un componente por una etiqyeta personalizable y una entrada de texto. la etiqueta permanecerá de color rojo mientras no se valide correctamente el DNI. 
        <br> Para recoger la entrada de texto, podéis llamar a la funcion desde el vevento @keypress.
        </p>
    <label :class="validacion">{{label}}</label>
    <input  @keyup="comprobar"/>
  </div>
</div>
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

    .card {
        display:flex;
        margin:50px;

    }
</style>