<template>
  <div id="nav">
    <router-link to="/">Projects</router-link> |
    <router-link to="/about">About Me</router-link>
  </div>
  <router-view />
</template>

<style lang="stylus">
#app {
  font-family: 'Playfair Display', Helvetica, Avenir;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
