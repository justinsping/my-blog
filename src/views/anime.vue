<template>
  <div id="anime">
    <div class="l-box">
      <video-player
        class="video-player-box"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
      ></video-player>
      <div class="videoinfo">
        <h2 class="videoinfo-title">我是测试的标题</h2>
        <p class="videoinfo-text">
          <span>897次播放 发布时间：2019年9月10日</span>
          <span class="thumbs-num">1</span>
          <i class="dianzan-icon">
            <img src="../images/dianzan.png">
          </i>
        </p>
        <div class="author">
          <div class="author-upload clearfix">
            <i class="avatar">
              <img src="../images/swiper/1.jpg" alt />
            </i>
          </div>
          <div class="author-info">
            <h2>世平那个张</h2>
            <p>
              <span>15粉丝</span>
              <span>335次播放</span>
              <span>21个视频</span>
            </p>
          </div>
        </div>
      </div>
      <div class="comment">
        <h2 class="comment-title">
          <i class="el-icon-chat-round"></i>
          <span>当前已有0条评论</span>
        </h2>
        <div class="comment-first">
          <div class="inp">
            <textarea class="inp-area" placeholder="说说你的看法"></textarea>
            <div class="inp-opt">
              <div class="face">
                <img src="../images/face.svg" alt="">
              </div>
              <div class="r-btn">
                <span>0/500</span>
                <button>回复</button>
              </div>
            </div>
          </div>
        </div>
        <div class="comment-list"></div>
        <p class="commentList-footer">没有更多评论了哦~</p>
      </div>
    </div>
    <div class="r-box clearfix">
      <div class="notice">
        <h2 class="title">更新通知</h2>
        <ul>
          <li>
            <a href="#">本站更新、改版、维护记录</a>
          </li>
          <li>
            <a href="#">千呼万唤始出来，正式上线</a>
          </li>
        </ul>
      </div>
      <div class="next-video">
        <h2 class="title">
          接下来播放
          <span>自动播放</span>
          <el-switch v-model="isOpen" active-color="#00c1de" inactive-color="#ff4949"></el-switch>
        </h2>
        <ul>
          <li class="item">
            <a href="#">
              <div class="cover">
                <img src="../images/swiper/2.jpg" alt />
                <span class="videotime">03:23</span>
              </div>
              <div class="text">
                <h3>我是测试的标题我是测试的标题我是测试的标题</h3>
                <p>
                  <span class="video-icon">
                    <i class="el-icon-view">19</i>
                  </span>
                  <span class="video-icon">
                    <i class="el-icon-chat-round">10</i>
                  </span>
                </p>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="#">
              <div class="cover">
                <img src="../images/swiper/2.jpg" alt />
                <span class="videotime">03:23</span>
              </div>
              <div class="text">
                <h3>我是测试的标题</h3>
                <p>
                  <span class="video-icon">
                    <i class="el-icon-view">19</i>
                  </span>
                  <span class="video-icon">
                    <i class="el-icon-chat-round">10</i>
                  </span>
                </p>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="#">
              <div class="cover">
                <img src="../images/swiper/2.jpg" alt />
                <span class="videotime">03:23</span>
              </div>
              <div class="text">
                <h3>我是测试的标题</h3>
                <p>
                  <span class="video-icon">
                    <i class="el-icon-view">19</i>
                  </span>
                  <span class="video-icon">
                    <i class="el-icon-chat-round">10</i>
                  </span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      playerOptions: {
        // videojs options
        muted: true,
        language: 'zh-CN',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'video/mp4',
            src:
              'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
          }
        ],
        poster: require('../images/swiper/1.jpg')
      },
      isOpen: true
    }
  }
}
</script>
<style lang="scss">
#anime {
  margin: 20px 0;
  padding: 20px;
  background: #fff;
  // position: relative;
  .l-box {
    max-width: 850px;
    display: inline-block;
    .video-player-box {
      width: 830px;
      box-shadow: 0 0 5px #666;
      border-radius: 4px;
      overflow: hidden;
    }
    .video-js {
      display: block;
      width: 100%;
      height: 500px;
      .vjs-big-play-button {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .videoinfo {
      // box-shadow: 0 0 5px #666;
      padding: 20px;
      h2.videoinfo-title {
        font-size: 18px;
        max-height: 60px;
        line-height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      p.videoinfo-text {
        color: #666;
        span {
          font-size: 12px;
        }
        span.thumbs-num {
          float: right;
        }
        i.dianzan-icon {
          float: right;
          width: 14px;
          height: 14px;
          margin-right: 5px;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
            transition: all 0.3s ease;
          }
        }
        i.dianzan-icon:hover img {
          transform: scale(1.5);
        }
      }
      .author {
        padding: 25px 0;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ebebeb;
        .author-upload {
          .avatar {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 50px;
            padding: 3px;
            border-radius: 100%;
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
            background-size: 16px;
            width: 20px;
            height: 20px;
            right: -2px;
            bottom: -4px;
          }
        }
        .author-info {
          margin-left: 20px;
          h2 {
            font-size: 16px;
          }
          p {
            padding: 2px 0;
            color: #666;
            span {
              font-size: 14px;
            }
          }
        }
      }
    }
    .comment {
      padding: 20px;
      .comment-title {
        font-size: 16px;
        margin-bottom: 10px;
      }
      .comment-first {
        .inp {
          .inp-area {
            width: 100%;
            height: 94px;
            border-radius: 8px;
            padding: 13px;
            border: 1px solid #b3b3b3;
            box-sizing: border-box;
            resize: none;
          }
          .inp-area:focus {
            border-color: #00c1de;
            outline: none;
          }
          .inp-area::-webkit-input-placeholder {
            color: rgba(0, 0, 0, .8);
          }
        }
        .inp-opt {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 6px;
          .r-btn {
            span {
              font-size: 13px;
              color: #666;
            }
            button {
              margin-left: 15px;
              padding: 5px 10px;
              background: #37cbe2;
              color: #fff;
              font-size: 13px;
              border-radius: 8px;
              border: 1px solid transparent;
              cursor: pointer;
            }
          }
          .face {
            width: 30px;
            height: 30px;
            cursor: pointer;
            img {
              width: 100%;
              height: 100%;
              transition: all 0.3s ease;
            }
          }
          .face:hover img {
            transform: scale(1.3);
          }
        }
      }
      .commentList-footer {
        padding: 15px 0;
        color: #999;
        font-size: 14px;
        text-align: center;
        font-weight: 500;
      }
    }
  }
  .r-box {
    float: right;
    .notice {
      background-color: #fff;
      padding: 20px;
      margin-bottom: 20px;
      overflow: hidden;
      border-radius: 4px;
      box-shadow: 0 0 5px #666;
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
        padding-top: 10px;
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
    .next-video {
      background-color: #fff;
      padding: 20px;
      margin-bottom: 20px;
      overflow: hidden;
      border-radius: 4px;
      box-shadow: 0 0 5px #666;
      .title {
        font-size: 15px;
        color: #484848;
        position: relative;
        line-height: 40px;
        border-bottom: 1px solid #eee;
        margin-bottom: 10px;
        span {
          display: inline-block;
          width: 118px;
          text-align: right;
          font-size: 12px;
          color: #666;
        }
        .el-switch__core {
          width: 35px !important;
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
          margin-bottom: 10px;
          min-height: 70px;
          a {
            .cover {
              width: 120px;
              height: 70px;
              border-radius: 4px;
              overflow: hidden;
              position: relative;
              float: left;
              margin-right: 5px;
              img {
                width: 100%;
                height: 100%;
              }
              span.videotime {
                position: absolute;
                bottom: 5px;
                right: 5px;
                display: block;
                background: rgba(0, 0, 0, 0.8);
                color: #fff;
                font-size: 12px;
                padding: 2px;
                border-radius: 3px;
              }
            }
            .text {
              max-width: 240px;
              h3 {
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                -webkit-line-clamp: 2;
              }
              p {
                padding: 8px 0;
                .video-icon {
                  margin-right: 5px;
                  font-size: 12px;
                }
              }
            }
          }
        }
      }
    }
  }
  h2 {
    color: rgba(0, 0, 0, 0.8);
  }
}
</style>
