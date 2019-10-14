<template>
  <div id="about-me">
    <div class="banner">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="../images/header-bg/header-bg1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../images/header-bg/header-bg2.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../images/header-bg/header-bg3.jpg" />
        </swiper-slide>
      </swiper>
      <div class="bannerText">
        <h1>世平那个张</h1>
        <p>前端开发工程师</p>
        <a href="#">关于我</a>
      </div>
    </div>
    <div class="menu">
      <ul class="clearfix">
        <li>
          <a href="#">首页</a>
        </li>
        <li>
          <a href="#">关于我</a>
        </li>
        <li>
          <a href="#">技能</a>
        </li>
        <li>
          <a href="#">经历</a>
        </li>
        <li>
          <a href="#">项目</a>
        </li>
        <li>
          <a href="#">联系我</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      bannerImgArr: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          delay: 5000,
          disableOninteraction: false
        }
      }
    }
  },
  created () {
    console.log(document.documentElement.clientHeight)
  }
}
</script>
<style lang="scss">
#about-me {
  .banner {
    width: 100%;
    height: 757px;
    overflow: hidden;
    position: relative;
    .swiper-box {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .bannerText {
      padding: 30px 0;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      z-index: 999;
      transform: translateY(-50%);
      color: #fff;
      h1 {
        font-size: 55px;
      }
      p {
        font-size: 25px;
        margin-top: 10px;
        margin-bottom: 40px;
      }
      a {
        display: inline-block;
        background: #ef7674;
        padding: 0 29px;
        line-height: 40px;
        border-radius: 5px;
        color: #fff;
      }
    }
  }
  .menu {
    background: #fff;
    text-align: center;
    ul {
      width: 1170px;
      margin: 0 auto;
      li {
        float: left;
        padding: 0 18px;
        a {
          color: #4c404d;
          font-size: 20px;
          font-weight: 800;
          line-height: 140px;
          text-align: center;
        }
      }
    }
  }
}
</style>
