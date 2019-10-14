<template>
  <div id="head-nav">
    <div class="container">
      <h1 class="logo">
        <a href="javascript:;"></a>
      </h1>
      <ul class="menu">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/anime">国漫</router-link>
        </li>
        <li>
          <router-link to="/store">花见巫女</router-link>
        </li>
        <li>
          <router-link to="/aboutMe">关于我</router-link>
        </li>
        <li>
          <!-- <router-link to="/guestbook">留言板</router-link> -->
          <a href="javascript:;" @click="guestbook">留言板</a>
        </li>
      </ul>
      <div class="search_bar">
        <i class="el-icon-search"></i>
        <!-- <input type="text" placeholder="输入关键词查找" />
        <button>搜索</button> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    guestbook () {
      this.$message({
        type: 'warning',
        message: '暂未开通'
      })
    }
  }
}
</script>
<style lang="scss">
#head-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: #fff;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.08);
  .container {
    position: relative;
    width: 1170px;
    height: 80px;
    margin: 0 auto;
    overflow: hidden;
    .logo {
      float: left;
      a {
        position: absolute;
        top: -38px;
        display: block;
        width: 320px;
        height: 150px;
        background: url("../images/logo-1.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .menu {
      float: left;
      margin-left: 340px;
      li {
        float: left;
        height: 80px;
        line-height: 80px;
        font-size: 15px;
        margin: 0 20px;
      }
      li:hover a {
        color: rgb(22, 192, 192);
      }
    }
    .search_bar {
      float: right;
      height: 80px;
      margin-right: 10px;
      .el-icon-search {
        font-size: 18px;
        line-height: 80px;
        cursor: pointer;
      }
      .el-icon-search:hover {
        color: rgb(22, 192, 192);
      }
    }
  }
}
</style>
