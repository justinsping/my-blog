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
        <a href="#my">关于我</a>
      </div>
    </div>
    <div class="menu">
      <ul class="clearfix">
        <li>
          <a href="#about-me">首页</a>
        </li>
        <li>
          <a href="#my">关于我</a>
        </li>
        <li>
          <a href="#technical">技能</a>
        </li>
        <li>
          <a href="#exprience">经历</a>
        </li>
        <li>
          <a href="javascript:;">项目</a>
        </li>
        <li>
          <a href="#contact">联系我</a>
        </li>
      </ul>
    </div>
    <section class="my" id="my">
      <div class="container">
        <div class="heading" id="heading">
          <h2>关于我</h2>
        </div>
        <div class="description">
          <p>我是来自深圳的前端开发工程师，2017届江西农业大学南昌商学院本科毕业生，大四有过半年的实习经历，2018年4月份开始第一份后端开发工作，至今已经有两年前端开发经验。</p>
          <p>有着坚实的前端开发基础，并且一直保持对新技术的学习热情。主要开发语言为VUE，熟悉mysql使用，目前正在更加深入的学习编程底层原理、数据库技术、数据分析和可视化技术。</p>
          <p>爱唱歌，喜欢看动漫，代码不是生活的全部。</p>
        </div>
        <div class="aboutmeLinks">
          <a href="javascript:;">个人博客</a>
          <a href="javascript:;">github</a>
        </div>
      </div>
    </section>
    <section class="technical" id="technical">
      <div class="container">
        <div class="heading" id="heading">
          <h2>技能</h2>
        </div>
        <div class="description">
          <p>作为一名开发人员，面对日新月异的技术，保持一种学习的习惯。目前我的技能以web开发这个技术栈为中心，以下是我的技能及掌握情况。</p>
        </div>
        <div class="tech-chart">
          <ul>
            <li>
              <span class="chart-box">
                <span>85</span>
                <canvas id="canvas1" height="118" width="118"></canvas>
              </span>
              <h2>Django</h2>
            </li>
            <li>
              <span class="chart-box">
                <span>85</span>
                <canvas id="canvas2" height="118" width="118"></canvas>
              </span>
              <h2>Django</h2>
            </li>
            <li>
              <span class="chart-box">
                <span>85</span>
                <canvas id="canvas3" height="118" width="118"></canvas>
              </span>
              <h2>Django</h2>
            </li>
            <li>
              <span class="chart-box">
                <span>85</span>
                <canvas id="canvas4" height="118" width="118"></canvas>
              </span>
              <h2>Django</h2>
            </li>
            <li>
              <span class="chart-box">
                <span>85</span>
                <canvas id="canvas4" height="118" width="118"></canvas>
              </span>
              <h2>Django</h2>
            </li>
            <li>
              <span class="chart-box">
                <span>85</span>
                <canvas id="canvas4" height="118" width="118"></canvas>
              </span>
              <h2>Django</h2>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="exprience" id="exprience">
      <div class="container">
        <div class="heading" id="heading">
          <h2>经历</h2>
        </div>
        <div class="description">
          <p>我是来自深圳的前端开发工程师，2017届江西农业大学南昌商学院本科毕业生，大四有过半年的实习经历，2018年4月份开始第一份后端开发工作，至今已经有两年前端开发经验。</p>
        </div>
        <div class="workDetails">
          <div class="workTime clearfix">
            <span class="prevY">2019-09</span>
            <span class="afterY">至今</span>
          </div>
          <div class="workDes">
            <h2>智搜科技有限公司</h2>
            <h3>前端开发工程师</h3>
            <p>沃趣科技技术领域涉及Oracle、MySQL、PostgreSQL等数据库云平台架构和超融合云平台架构，主要产品包括：QData Cloud数据库私有云平台、QFusion企业超融合云平台、QPlus数据库秒级备份恢复云平台。</p>
          </div>
        </div>
        <div class="workDetails">
          <div class="workTime clearfix">
            <span class="prevY">2019-07</span>
            <span class="afterY">2018-04</span>
          </div>
          <div class="workDes">
            <h2>梦豹科技有限公司</h2>
            <h3>前端开发工程师</h3>
            <p>沃趣科技技术领域涉及Oracle、MySQL、PostgreSQL等数据库云平台架构和超融合云平台架构，主要产品包括：QData Cloud数据库私有云平台、QFusion企业超融合云平台、QPlus数据库秒级备份恢复云平台。</p>
          </div>
        </div>
        <div class="workDetails">
          <div class="workTime clearfix">
            <span class="prevY">2017-06</span>
            <span class="afterY">2013-09</span>
          </div>
          <div class="workDes">
            <h2>江西农业大学南昌商学院</h2>
            <h3>工商管理</h3>
            <p>沃趣科技技术领域涉及Oracle、MySQL、PostgreSQL等数据库云平台架构和超融合云平台架构，主要产品包括：QData Cloud数据库私有云平台、QFusion企业超融合云平台、QPlus数据库秒级备份恢复云平台。</p>
          </div>
        </div>
      </div>
    </section>
    <section class="contact" id="contact">
      <div class="container">
        <div class="heading" id="heading">
          <h2>联系我</h2>
        </div>
        <div class="contactLinks">
          <i>
            <img src="../images/email.svg" />
          </i>
          <span>justinsp@163.com</span>
        </div>
      </div>
    </section>
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
  methods: {
    initCanvas () {
      let canvas = document.getElementsByTagName('canvas')
      for (var i = 0; i < canvas.length; i++) {
        let ctx = canvas[i].getContext('2d')
        ctx.fillStyle = '#e1e1e3'
        ctx.beginPath()
        ctx.arc(59, 59, 50, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fill()
        // 外圆
        ctx.fillStyle = '#ec5b59'
        ctx.beginPath()
        ctx.arc(59, 59, 50, 0, 2 * Math.PI * 0.85)
        ctx.closePath()
        ctx.fill()
        // 内圆
        ctx.fillStyle = '#fff'
        ctx.beginPath()
        ctx.arc(59, 59, 45, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fill()
      }
    }
  },
  mounted () {
    this.initCanvas()
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
      text-align: center;
      li {
        // float: left;
        display: inline-table;
        padding: 0 18px;
        a {
          color: #4c404d;
          font-size: 20px;
          font-weight: 800;
          line-height: 140px;
          text-align: center;
        }
        a:hover {
          color: #ef7674;
        }
      }
    }
  }
  .my {
    background: #f3f2f3;
    color: #897f8a;
    .container {
      width: 1170px;
      margin: 0 auto;
      // text-align: center;
      padding-top: 140px;
      padding-bottom: 90px;
      .heading {
        text-align: center;
        padding: 30px 0;
        margin-bottom: 20px;
        h2 {
          font-size: 36px;
          color: #5b4c5c;
          font-weight: 400;
          display: inline-block;
          border-bottom: 6px solid #ef7674;
          padding-bottom: 10px;
        }
      }
      .description {
        margin-bottom: 60px;
        text-align: justify;
        padding: 0 90px;
        p {
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 27px;
          font-weight: 400;
        }
      }
      .aboutmeLinks {
        text-align: center;
        a {
          padding: 10px 10px;
          border: 3px solid #5b4c5c;
          border-radius: 4px;
          color: #5b4c5c;
          font-size: 18px;
          font-weight: 700;
          margin-right: 10px;
        }
      }
    }
  }
  .technical {
    background: #fff;
    color: #897f8a;
    .container {
      width: 1170px;
      margin: 0 auto;
      // text-align: center;
      padding-top: 140px;
      padding-bottom: 90px;
      .heading {
        text-align: center;
        padding: 30px 0;
        margin-bottom: 20px;
        h2 {
          font-size: 36px;
          color: #5b4c5c;
          font-weight: 400;
          display: inline-block;
          border-bottom: 6px solid #ef7674;
          padding-bottom: 10px;
        }
      }
      .description {
        margin-bottom: 60px;
        text-align: justify;
        padding: 0 90px;
        p {
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 27px;
          font-weight: 400;
        }
      }
      .tech-chart {
        ul {
          li {
            display: inline-block;
            text-align: center;
            width: 33%;
            margin-bottom: 30px;
            .chart-box {
              display: inline-block;
              width: 118px;
              height: 118px;
              margin-bottom: 19px;
              text-align: center;
              position: relative;
              canvas {
                position: absolute;
                top: 0;
                left: 0;
              }
              span {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                z-index: 999;
                font-size: 21px;
                font-weight: bold;
                color: #5b4c5c;
              }
              span:after {
                content: "%";
                margin-left: 0.1em;
                font-size: 0.8em;
              }
            }
            h2 {
              color: #5b4c5c;
            }
          }
        }
      }
    }
  }
  .exprience {
    background: #f3f2f3;
    color: #897f8a;
    .container {
      width: 1170px;
      margin: 0 auto;
      // text-align: center;
      padding-top: 140px;
      padding-bottom: 90px;
      .heading {
        text-align: center;
        padding: 30px 0;
        margin-bottom: 20px;
        h2 {
          font-size: 36px;
          color: #5b4c5c;
          font-weight: 400;
          display: inline-block;
          border-bottom: 6px solid #ef7674;
          padding-bottom: 10px;
        }
      }
      .description {
        margin-bottom: 60px;
        text-align: justify;
        padding: 0 90px;
        p {
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 27px;
          font-weight: 400;
        }
      }
      .workDetails {
        padding-left: 88px;
        .workTime {
          float: left;
          color: #fff;
          line-height: 40px;
          span {
            display: block;
            padding: 0px 21px;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 2px;
            margin-right: 28px;
          }
          span.prevY {
            background-color: #ef7674;
          }
          span.afterY {
            float: right;
            background-color: #483c49;
          }
        }
        .workDes {
          width: 60%;
          margin-left: 180px;
          padding-left: 60px;
          padding-bottom: 40px;
          border-left: 1px dashed #897f8a;
          position: relative;
          h2 {
            color: #5b4c5c;
            padding-bottom: 1px;
          }
          h3 {
            color: #5b4c5c;
            padding-bottom: 11px;
            font-weight: 400;
          }
          p {
            color: #897f8a;
            line-height: 27px;
          }
        }
        .workDes:before {
          content: "";
          position: absolute;
          top: 33px;
          left: -11px;
          background-color: #fff;
          border-radius: 50%;
          background-image: url("../images/arrow-left.png");
          background-size: 100% 100%;
          width: 22px;
          height: 22px;
        }
      }
    }
  }
  .contact {
    background: #fff;
    color: #897f8a;
    .container {
      width: 1170px;
      margin: 0 auto;
      // text-align: center;
      padding-top: 140px;
      padding-bottom: 90px;
      .heading {
        text-align: center;
        padding: 30px 0;
        margin-bottom: 20px;
        h2 {
          font-size: 36px;
          color: #5b4c5c;
          font-weight: 400;
          display: inline-block;
          border-bottom: 6px solid #ef7674;
          padding-bottom: 10px;
        }
      }
      .contactLinks {
        vertical-align: middle;
        i {
          display: inline-block;
          width: 20px;
          height: 20px;
        }
        span {
          vertical-align: top;
        }
      }
    }
  }
}
</style>
