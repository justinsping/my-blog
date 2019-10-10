<template>
  <div id="app">
    <head-nav />
    <router-view></router-view>
    <default-foot />
  </div>
</template>

<script>
import headNav from './components/head-nav'
import defaultFoot from './components/footer'
export default {
  name: 'App',
  components: {
    headNav,
    defaultFoot
  }
}
</script>

<style lang="scss">
body {
  background-color: #f1f1f1;
  #app {
    padding-top: 80px;
    width: 1170px;
    margin: 0 auto;
  }
}
</style>
