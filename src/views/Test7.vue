<template>
    <div class="card">
  <div class="card-header">
   <b>EJERCICIO 8:</b> 
  </div>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"> Crear la simulación del carrito de articulos de un e-commerce, donde se disponga de un resumen de los artículos
            comprados y un montante total en €. Para ello crearemos un componente Item.
        </p>
  </div>
</div>
 <div class="row">
        <Carrito/>  <Carrito/>  <Carrito/>  <Carrito/>  <Carrito/>
    </div> 
 
    
</template>

<script>
// @ is an alias to /src
import Carrito from '@/components/Carrito.vue'
export default {
  name: 'Test7',
  components: {
    Carrito
  },
  setup(){
       const articulos=[
      {nombre:'reloj',descripcion:'Accesorios',imagen:'reloj.jpg',precio:'2.20'},
      {nombre:'balon',descripcion:'Equipamiento deportivo',imagen:'balon.jpg',precio:'2.20'},
      {nombre:'Guitarra',descripcion:'Instrumento musical',imagen:'guitarra.jpg',precio:'2.20'},
      {nombre:'cartera',descripcion:'Accesorios',imagen:'cartera.jpg',precio:'2.20'}
    ]
    return{
        articulos
    }
  }
}
</script>

<style lang="scss" scoped>
 .card {
        display:flex;
        margin:50px;

    }

 .row {
        display:flex;
        margin:50px;

    }
</style>