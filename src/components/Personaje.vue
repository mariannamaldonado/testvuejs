<template>
  <div class="test">
       <img alt="jack" src="../assets/jackjack.png">
        <div>Nick: {{ nickname }}</div>
          <div>Powers: {{ powers }}</div>
          <div>Life: {{ life }}</div>
       <button @click="pluslife">Incrementando poderes</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      nickname: "JACK JACK",
      powers: 17,
      life: 0
    }
  },

  computed: {
    role() {
      return this.powers > 12 ? "Multiplica"
        : this.powers > 8 ? "Transformación en demonio"
        : this.powers > 4 ? "Ojos laser"
        : "Super fuerza"
    }
  },
  methods: {
    pluslife() {
      this.life++;
    },
  },
}
</script>

<style lang="scss">
.test{
  img{
    max-height: 250px;
  }
}
</style>