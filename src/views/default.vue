<template>
  <div id="default">
    <div class="left">
      <div class="pic-show">
        <div class="swiper-box">
          <swiper :options="swiperOption">
            <swiper-slide>
              <img src="../images/swiper/1.jpg" />
            </swiper-slide>
            <swiper-slide>
              <img src="../images/swiper/2.jpg" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
        <div class="card">
          <div class="item item-1">
            <img src="../images/swiper/1.jpg" alt />
          </div>
          <div class="item">
            <img src="../images/swiper/1.jpg" alt />
          </div>
        </div>
      </div>
      <div class="article-box">
        <h2 class="title">
          最新散文
          <span class="clearfix">诗酒趁年华</span>
        </h2>
        <ul>
          <li v-for="item in articleData" :key="item.id" class="clearfix">
            <a href="#" class="pic">
              <img src="../images/swiper/1.jpg" />
            </a>
            <h3>{{item.title}}</h3>
            <p>{{item.content}}</p>
            <a href="#" class="readmore">{{item.readmore}}</a>
          </li>
        </ul>
      </div>
      <div class="advert">
        <a href="#">
          <img src="../images/longad.jpg" alt="走丢了" />
        </a>
      </div>
      <div class="tech-article-box">
        <h2 class="title">
          最新技术干货
          <span class="clearfix">学无止境</span>
        </h2>
        <ul>
          <li v-for="item in articleData" :key="item.id">
            <h2>{{item.title}}</h2>
            <a href="#" class="pic clearfix">
              <img src="../images/swiper/1.jpg" />
            </a>
            <p class="blogtext">{{item.content}}</p>
            <div class="bloginfo">
              <i class="avatar">
                <img src="../images/swiper/1.jpg" alt />
              </i>
              <span class="time">2019年10月9日 19:51</span>
              <span class="viewnum">8次阅读</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="notice">
        <h2 class="title">
          <i class="el-icon-s-order"></i>
          网站公告
        </h2>
        <ul>
          <li>
            <a href="#">本站更新、改版、维护记录</a>
          </li>
          <li>
            <a href="#">千呼万唤始出来，正式上线</a>
          </li>
        </ul>
      </div>
      <div class="recommend">
        <h2 class="title">站长推荐</h2>
        <ul>
          <li>
            <a href="#">
              <img src="../images/swiper/2.jpg" alt />
            </a>
            <p>千呼万唤始出来，正式上线</p>
          </li>
          <li>
            <a href="#">
              <img src="../images/swiper/2.jpg" alt />
            </a>
            <p>千呼万唤始出来，正式上线</p>
          </li>
          <li>
            <a href="#">
              <img src="../images/swiper/2.jpg" alt />
            </a>
            <p>千呼万唤始出来，正式上线</p>
          </li>
          <li>
            <a href="#">
              <img src="../images/swiper/2.jpg" alt />
            </a>
            <p>千呼万唤始出来，正式上线</p>
          </li>
        </ul>
      </div>
      <div class="friend-link">
        <h2 class="title">友情链接</h2>
        <ul>
          <li>
            <a href="https://www.lujianxin.com/">陆鉴鑫博客</a>
          </li>
          <li>
            <a href="https://www.lujianxin.com/">博的客</a>
          </li>
          <li>
            <a href="https://www.lujianxin.com/">陆鉴鑫的博客</a>
          </li>
        </ul>
      </div>
      <div class="ad-seat">
        <p>广告位招租</p>
        <img src="../images/sale.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        loop: true,
        autoplay: {
          delay: 5000,
          disableOninteraction: false
        }
      },
      articleData: [
        {
          imgUrl: '../images/swiper/1.jpg',
          title: '偏爱那碗酸菜',
          content:
            '在我的家乡鄂西北，家家户户的妇女都会腌制酸菜，每到寒冬腊月还有青黄不接的时候，这些酸菜就成了农家',
          readmore: '文章阅读-【原创】',
          id: 1
        },
        {
          imgUrl: '../images/swiper/1.jpg',
          title: '偏爱那碗酸菜',
          content:
            '在我的家乡鄂西北，家家户户的妇女都会腌制酸菜，每到寒冬腊月还有青黄不接的时候，这些酸菜就成了农家',
          readmore: '文章阅读-【原创】',
          id: 2
        },
        {
          imgUrl: '../images/swiper/1.jpg',
          title: '偏爱那碗酸菜',
          content:
            '在我的家乡鄂西北，家家户户的妇女都会腌制酸菜，每到寒冬腊月还有青黄不接的时候，这些酸菜就成了农家',
          readmore: '文章阅读-【原创】',
          id: 3
        },
        {
          imgUrl: '../images/swiper/1.jpg',
          title: '偏爱那碗酸菜',
          content:
            '在我的家乡鄂西北，家家户户的妇女都会腌制酸菜，每到寒冬腊月还有青黄不接的时候，这些酸菜就成了农家',
          readmore: '文章阅读-【原创】',
          id: 4
        },
        {
          imgUrl: '../images/swiper/1.jpg',
          title: '偏爱那碗酸菜',
          content:
            '在我的家乡鄂西北，家家户户的妇女都会腌制酸菜，每到寒冬腊月还有青黄不接的时候，这些酸菜就成了农家',
          readmore: '文章阅读-【原创】',
          id: 5
        },
        {
          imgUrl: '../images/swiper/1.jpg',
          title: '偏爱那碗酸菜',
          content:
            '在我的家乡鄂西北，家家户户的妇女都会腌制酸菜，每到寒冬腊月还有青黄不接的时候，这些酸菜就成了农家',
          readmore: '文章阅读-【原创】',
          id: 6
        }
      ]
    }
  },
  created () {
    // let scrollH = document.documentElement.scrollTop
    // console.log(scrollH)
  }
}
</script>
<style lang="scss">
#default {
  margin-top: 10px;
  .left {
    display: inline-block;
    width: 80%;
    .pic-show {
      padding: 10px;
      .swiper-box {
        display: inline-block;
        vertical-align: top;
        width: 70%;
        cursor: url('../images/cursor/cursor_8.png'), pointer;
        .swiper-container {
          width: 100%;
          height: 400px;
          border-radius: 4px;
          img {
            width: 100%;
            height: 100%;
          }
          .swiper-pagination-progressbar {
            height: 2px;
          }
          .swiper-button-prev, .swiper-button-next {
            background-size: 16px 30px;
            display: none;
            // transition: all .5s ease;
          }
        }
        .swiper-container:hover {
          .swiper-button-prev, .swiper-button-next {
            display: block;
          }
        }
      }
      .card {
        display: inline-block;
        width: 28%;
        margin-left: 10px;
        .item {
          width: 100%;
          height: 190px;
          border-radius: 4px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .item-1 {
          margin-bottom: 20px;
        }
      }
    }
    .article-box {
      background-color: #fff;
      margin: 10px;
      border-radius: 3px;
      overflow: hidden;
      padding: 20px;
      font-weight: normal;
      .title {
        font-size: 16px;
        color: #484848;
        position: relative;
        line-height: 40px;
        border-bottom: 1px solid #eee;
        margin-bottom: 10px;
        span {
          float: right;
        }
      }
      .title:after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: "";
        width: 60px;
        height: 2px;
        background-color: #000;
        transition: all 0.5s ease;
      }
      .title:hover.title:after {
        width: 80px;
      }
      ul {
        padding: 10px 0 20px 10px;
        overflow: hidden;
        position: relative;
        li {
          float: left;
          width: 33%;
          box-sizing: border-box;
          padding: 20px;
          border-left: 1px solid #eee;
          border-bottom: 1px solid #eee;
          transition: all 0.3s ease;
          a.pic {
            display: block;
            height: 120px;
            border-radius: 3px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              transition: all 0.5s ease-out 0.1s;
            }
          }
          h3 {
            margin: 10px 0;
          }
          p {
            color: #999;
          }
          a.readmore {
            margin-top: 10px;
            color: #096;
            display: block;
          }
          a.readmore::before {
            content: "+";
            color: #096;
          }
        }
        li:hover {
          box-shadow: 1px 1px 10px rgb(194, 186, 186);
          img {
            transform: scale(1.1);
          }
        }
      }
      ul:before {
        content: "";
        position: absolute;
        width: 1px;
        height: 100%;
        background-color: #fff;
      }
      ul:after {
        content: "";
        position: absolute;
        bottom: 20px;
        width: 100%;
        height: 1px;
        left: 10px;
        background-color: #fff;
      }
    }
    .advert {
      background-color: #fff;
      margin: 10px;
      border-radius: 3px;
      overflow: hidden;
      padding: 20px;
      a {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .tech-article-box {
      background-color: #fff;
      margin: 10px;
      border-radius: 3px;
      overflow: hidden;
      padding: 20px;
      font-weight: normal;
      height: 800px;
      .title {
        font-size: 16px;
        color: #484848;
        position: relative;
        line-height: 40px;
        border-bottom: 1px solid #eee;
        margin-bottom: 10px;
        span {
          float: right;
        }
      }
      .title:after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: "";
        width: 60px;
        height: 2px;
        background-color: #000;
        transition: all 0.5s ease;
      }
      .title:hover.title:after {
        width: 80px;
      }
      ul {
        li {
          overflow: hidden;
          min-height: 120px;
          border-bottom: 1px dashed #eee;
          margin-bottom: 20px;
          padding-bottom: 20px;
          h2 {
            margin-bottom: 10px;
            font-size: 18px;
            overflow: hidden;
          }
          a {
            float: left;
            width: 23.2%;
            margin-right: 20px;
            border-radius: 3px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
          }
          p {
            font-size: 14px;
            max-height: 100px;
          }
          .bloginfo {
            margin-top: 20px;
            overflow: hidden;
            color: #999;
            line-height: 34px;
            .avatar {
              position: relative;
              float: left;
              width: 30px;
              height: 30px;
              border-radius: 100%;
              padding: 2px;
              background: linear-gradient(
                to top right,
                rgba(0, 153, 255, 0.9),
                rgba(42, 228, 197, 0.7)
              );
              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
            .avatar:after {
              content: "";
              position: absolute;
              background: url("../images/v.png") no-repeat;
              background-size: 12px;
              width: 12px;
              height: 12px;
              right: 0;
              bottom: 0;
            }
            .time {
              margin: 0 10px;
            }
          }
        }
      }
    }
  }
  .right {
    float: right;
    width: 20%;
    padding: 10px 0;
    .notice {
      background-color: #fff;
      padding: 20px;
      margin-bottom: 20px;
      overflow: hidden;
      border-radius: 4px;
      .title {
        font-size: 15px;
        color: #484848;
        position: relative;
        line-height: 40px;
        border-bottom: 1px solid #eee;
        margin-bottom: 10px;
        .el-icon-s-order {
          font-size: 16px;
        }
      }
      .title:after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: "";
        width: 60px;
        height: 2px;
        background-color: #000;
        transition: all 0.5s ease;
      }
      .title:hover.title:after {
        width: 80px;
      }
      ul {
        padding-top: 18px;
        li {
          font-size: 15px;
          line-height: 30px;
          background-color: #f6f6f6;
          margin-bottom: 10px;
          position: relative;
          border-radius: 4px;
          padding: 4px 12px 4px 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        li:before {
          position: absolute;
          content: "";
          width: 3px;
          height: 3px;
          background: #000;
          border-radius: 10px;
          top: 20px;
          left: 15px;
        }
        li:hover {
          background: #f2f2f2;
          box-shadow: 0 0 10px #ccc;
          transition: all 0.2s ease;
        }
      }
    }
    .recommend {
      background-color: #fff;
      padding: 20px;
      margin-bottom: 20px;
      overflow: hidden;
      border-radius: 4px;
      .title {
        font-size: 15px;
        color: #484848;
        position: relative;
        line-height: 40px;
        border-bottom: 1px solid #eee;
        margin-bottom: 10px;
        .el-icon-s-order {
          font-size: 16px;
        }
      }
      .title:after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: "";
        width: 60px;
        height: 2px;
        background-color: #000;
        transition: all 0.5s ease;
      }
      .title:hover.title:after {
        width: 80px;
      }
      ul {
        li {
          overflow: hidden;
          height: 60px;
          margin-bottom: 10px;
          a {
            float: left;
            width: 70px;
            height: 70px;
            margin-right: 10px;
            img {
              width: 100%;
              height: 100%;
              transition: all 0.5s ease-out;
            }
          }
          p {
            max-height: 40px;
            line-height: 20px;
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            font-size: 14px;
          }
        }
        li:hover {
          background: #f2f2f2;
          img {
            transform: scale(1.1);
          }
        }
      }
    }
    .friend-link {
      background-color: #fff;
      padding: 20px;
      margin-bottom: 20px;
      overflow: hidden;
      border-radius: 4px;
      .title {
        font-size: 15px;
        color: #484848;
        position: relative;
        line-height: 40px;
        border-bottom: 1px solid #eee;
        margin-bottom: 10px;
        .el-icon-s-order {
          font-size: 16px;
        }
      }
      .title:after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: "";
        width: 60px;
        height: 2px;
        background-color: #000;
        transition: all 0.5s ease;
      }
      .title:hover.title:after {
        width: 80px;
      }
      ul {
        li {
          float: left;
          margin: 5px;
          a {
            float: left;
            display: block;
            height: 24px;
            line-height: 24px;
            background: rgb(17, 212, 209);
            padding: 3px 10px;
            color: rgb(248, 248, 248);
            border-radius: 4px;
            font-size: 16px;
            font-weight: bold;
          }
          a:hover {
            text-shadow: 1px 1px 1px #000;
            border-radius: 0;
          }
        }
      }
    }
    .ad-seat {
      background-color: #fff;
      padding: 20px;
      margin-bottom: 20px;
      overflow: hidden;
      border-radius: 4px;
    }
  }
}
</style>
