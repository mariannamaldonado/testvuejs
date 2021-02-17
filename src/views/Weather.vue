<template>
  <div>
    <table>
      <tbody>
        <tr>
          <td>Celda</td>
          <td>Celda</td>
          <td>Celda</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Table from '../components/Table.vue'
import axios from 'axios'
export default {
  name:"Weather",
  props:{},
  setup(){
    return{
      provincias:null
    }
  },
  mounted(){
    console.log('hola desde mounted')
    this.getProvincias();
  },
  methods: {
    getProvincias(){
      console.log('aca va el codigo de get Provincias.')
      axios
          .get('https://www.el-tiempo.net/api/json/v2/provincias')
            .then(response=>{
              console.log(response) //obtenemos el objeto json
              this.provincias=response.value
            })
            .catch( e=> console.log(e))
    }
  }

}
</script>

<style>

</style>