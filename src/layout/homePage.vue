<template>
  <div id="home-page">
    <head-nav />
    <router-view></router-view>
    <default-foot />
  </div>
</template>
<script>
import headNav from '../components/head-nav'
import defaultFoot from '../components/footer'
export default {
  components: {
    headNav,
    defaultFoot
  }
}
</script>
<style lang="scss">
#home-page {
  padding-top: 80px;
  width: 1170px;
  margin: 0 auto;
}
</style>
