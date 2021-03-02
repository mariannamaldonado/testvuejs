<template>
    <div class="card">
  <div class="card-header">
   <b>EJERCICIO 4:</b> 
  </div>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"> Crear un componente que, partiendo de un
            array como este (en el futuro saldrá de MongoDB o un API):
        </p>
  </div>
</div>
 <div class="row">
        <Table/>
    </div> 
</template>

<script>
import Table from "@/components/Table";

export default {
  name: "Test4",
  components: {
    Table
  }
}
</script>

<style lang="scss" scoped>
 .card {
        display:flex;
        margin:50px;

    }
</style>