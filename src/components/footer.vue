<template>
  <div id="footer">
    <div class="container">
      <div class="wxpic">
        <img src="../images/wx.jpg" alt="">
      </div>
      <p class="declare">站点声明:</p>
      <p>1、本站接受转载投稿，但是投稿必须注明原地址，投稿请扫描底部二维码或详见投稿说明。</p>
      <p>2、本站原创文章支持转载、摘编、复制或建立镜像，但必须注明转载来源，如有违反，追究法律责任。</p>
      <p>3、本站尊重作者版权，转载文章一律注明来源，若有侵权请联系站长删除。</p>
    </div>
    <a href="#">
      <i class="el-icon-caret-top"></i>
    </a>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
#footer {
  width: 100%;
  background: #373D41;
  border-top: 10px solid #00c1de;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  .container {
    width: 1170px;
    margin: 0 auto;
    padding: 20px;
    .wxpic {
      float: left;
      width: 100px;
      height: 100px;
      margin: 0 20px 20px 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .declare {
      font-size: 16px;
      font-weight: bold;
      color: #00c1de;
      margin-bottom: 10px;
    }
    p {
      font-size: 14px;
      color: #73777a;
    }
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    position: fixed;
    border-radius: 50%;
    color: #409eff;
    bottom: 10%;
    right: 20px;
    font-size: 20px;
    box-shadow: 0 0 6px rgba(0, 0, 0 , .12);
  }
  a:hover {
    background-color: #f2f6fc;
  }
}
</style>
