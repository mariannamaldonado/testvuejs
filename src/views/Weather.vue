<template>
    <div class="row">
        <Tiempo/>
    </div> 

</template>

<script>
import Tiempo from "@/components/Tiempo";

export default {
  name: "Weather",
  components: {
    Tiempo
  }
}
</script>

<style lang="scss" scoped>
  .row {
        display:flex;
        margin:50px;

    }
</style>