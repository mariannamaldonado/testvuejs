<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/test1">Test1</router-link> |
    <router-link to="/test2">Test2</router-link> |
    <router-link to="/test3">Test3</router-link> |
    <router-link to="/test4">Test4</router-link> |
    <router-link to="/test5">Test5</router-link> |
    <router-link to="/test6">Test6</router-link> |
    <router-link to="/test7">Test7</router-link> |
    <router-link to="/test8">Test8</router-link> |
    <router-link to="/pruebas">Pruebas</router-link> |
    <router-link to="/weather">Weather</router-link> |
    <router-link to="/practica">Practica</router-link> |
    <router-link to="/Jobs">Jobs</router-link>
  </div>
  <button @click="redirect">Redirect</button>
  <button @click="back">Go back </button>
  <button @click="forward">Go forward</button>

  <router-view/>
</template>

<script>
export default {
  methods: {
     redirect() {
       this.$router.push({name:'Home'})
     },
  back() {
    this.$router.go(-1)
  },
  forward() {
    this.$router.go(1)
  }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10px;
    border-radius: 4px;

    &.router-link-exact-active {
      color: white;
      background: #42b983;
    }
  }
}
button{
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
