<template>
  <div>
    <div>Nick: {{ nickname }}</div>
    <div>Life: {{ life }}</div>
    <button @click="decLife">Decrement Life</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: "Manz",
      exp: 10,
      life: 0
    }
  },
  computed: {
    role() {
      return this.exp > 12 ? "Expert"
        : this.exp > 8 ? "Senior"
        : this.exp > 4 ? "Middle"
        : "Junior"
    }
  },
  methods: {
    decLife() {
      this.life++;
    },
  },

}
</script>