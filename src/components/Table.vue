<template>
<div class="container">
      <hr>
 <table class="table table-dark table-hover">
         <thead>
            <tr>
                <th>Descripcion</th>
                <th>precio</th>
                <th>cantidad</th>
                <th>subtotal</th>
                <th>total</th>                  
            </tr>
        </thead>
      <tbody>
            <tr v-for="(valor,i) in datos" :key="i">
                <td>{{ valor.descripcion }}</td> 
                <td>{{ valor.precio }}</td>
                <td>{{ valor.cantidad }}</td>
                <td>{{ subTotal(valor.precio,valor.cantidad)}}</td>
                <td class="table-dark">{{total}}</td>
            </tr>
        </tbody> 
    </table>

    <div>Total:{{total}} </div> 
      <hr>
</div>

</template>

<script>
import {ref, reactive, onMounted } from 'vue'

export default {
    name:'Table',
    props:{},
    setup(){
        let descripcion = ref("")
        let cantidad = ref(0)
        let precio = ref(0.00)
     let datos=reactive([
        {descripcion:'Pantalones vaqueros chico',cantidad:2,precio:30.99},
        {descripcion:'Camiseta básica chico',cantidad:4,precio:6.99},
        {descripcion:'Pijama unisex',cantidad:1,precio:12.50},
        {descripcion:'Deportivas Nike',cantidad:1,precio:80.00}
     ])
    let total=ref("")
    const subTotal= (cantidad,precio)=>cantidad*precio
    const cTotal= ()=>{
        datos.forEach(valor=>
        total.value+valor.cantidad*valor.precio)
    }
    onMounted(()=>cTotal())
     return{
         datos,
         subTotal,
         total,
         cantidad,
         precio,
         descripcion
         
     }
}
}
</script>

<style lang="scss" scoped>

   .container {
    width:400px;
    background: rgb(243, 242, 239);

   
}

</style>