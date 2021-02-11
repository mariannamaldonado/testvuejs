<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/test1">Test1</router-link> |
    <router-link to="/test2">Test2</router-link> |
    <router-link to="/test3">Test3</router-link> |
    <router-link to="/Jobs">Jobs</router-link>
  </div>
  <router-view/>
</template>

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
</style>
