<template>
 <div class="card">
  <div class="card-header">
   Ejercicio 1
  </div>
  <div class="card-body">
    <h5 class="card-title">Página de prueba</h5>
    <p class="card-text">Reactividad
        </p>
  </div>
</div>
  <div class="test">
   <Personaje/>
  </div>
</template>

<script>

import Personaje from '@/components/Personaje.vue'

export default {
  name: 'Test1',
  components: {
    Personaje
  }
}
</script>

<style lang="scss" scoped>
 .card {
        display:flex;
        margin:50px;

    }
</style>