<template>
  <div class="row">
    <Lang />
  </div> 
</template>

<script>

import Lang from '@/components/Lang.vue';
export default {
  name: 'Test8',
  components: {
    Lang 
  }

}
</script>

<style lang="scss" scoped>
  .row {
        display:flex;
        margin:50px;

    }
</style>
