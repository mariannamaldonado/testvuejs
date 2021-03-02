<template>
    <div class="card">
  <div class="card-header">
   <b>La directiva v-on: los eventos del DOM </b> 
    <b>Autocomplete </b>
  </div>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"> 
        </p>
  </div>
</div>
 <div class="row">
        <Eventos/>
        <Autocomplete/>

    </div> 
</template>

<script>
import Eventos from "@/components/Eventos";
import Autocomplete from "@/components/Autocomplete";

export default {
  name: "Test6",
  components: {
    Eventos,
    Autocomplete
  }
}
</script>

<style lang="scss" scoped>
 .card {
        display:flex;
        margin:50px;

    }
</style>