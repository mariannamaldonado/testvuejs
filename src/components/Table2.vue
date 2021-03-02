<template>
<div class="container">
<hr>
  
   <div class="row">
       <div class="border col-12">
           <div class="col-xs-3"><input class="form-control" v-model="descripcion" type="text" placeholder="Descripción" /></div>
           <div class="col-xs-3"><input class="form-control" v-model="cantidad" type="number" placeholder="Cantidad" /></div>
           <div class="col-xs-3"><input class="form-control" v-model="precio" type="number" placeholder="Precio" /></div>
            <div><button @click="agregar" type="button" class="btn btn-outline-dark">Agregar</button></div>
        </div>
    </div>
  <hr>
  
 <table class="table table-dark table-hover">
    <thead>
        <tr>
            <th>Descripcion</th>
            <th>precio</th>
            <th>cantidad</th>
            <th>subtotal</th>
            <th>Eliminar</th>                  
            </tr>
        </thead>
      <tbody>
            <tr v-for="(valor,i) in datos" :key="i">
                <td>{{ valor.descripcion }}</td> 
                <td>{{ valor.precio }}</td>
                <td>{{ valor.cantidad }}</td>
                <td>{{ subTotal(valor.precio,valor.cantidad)}}</td>
                <td><button class="btn btn-danger" @click="eliminar(i)">Eliminar</button></td>
            </tr>
        </tbody>    
    </table>
    <div>Total:{{total}} </div>
  
</div>

</template>

<script>
import {ref, reactive, onMounted, watch } from 'vue'

export default {
    name:'Table2',
    props:{},
    setup(){
        let descripcion = ref("")
        let cantidad = ref("0")
        let precio = ref("0.00")
     let datos=reactive([
        {descripcion:'Pantalones vaqueros chico',cantidad:2,precio:30.99},
        {descripcion:'Camiseta básica chico',cantidad:4,precio:6.99},
        {descripcion:'Pijama unisex',cantidad:1,precio:12.50},
        {descripcion:'Deportivas Nike',cantidad:1,precio:80.00}
     ])
    
    const total= computed(()=>{
        let total=0
        datos.forEach(valor=>{
            total+=valor.cantidad*valor.precio
        })
        return total
    })

    const agregar=()=>{
     let nuevo={
        descripcion: descripcion.value,
        cantidad: cantidad.value,
        precio: precio.value
            }
            datos.push(nuevo)
        }
        //función para eliminar un concepto de la lista:
        const eliminar=(id)=>{
            if(confirm("¿Seguro que desea eliminar?"))
                datos.splice(id,1)
        }
        return {
            datos,
            agregar, eliminar,
            total,
            descripcion,
            cantidad,
            precio
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