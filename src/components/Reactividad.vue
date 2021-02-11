<template>
<div class="reactividad">
    <p>Contador: {{contador}}
        <button @click="sumar">+</button>
    </p>
</div>
 
</template>

<script>
export default {
  name: "Reactividad",
  props: {},
    setup(){  //api 3.0
        let contador=0

        const sumar=()=>{
            contador++
            console.log(contador)
        }
        return {
            contador,
            sumar
        }
    }
}
</script>

<style>

</style>