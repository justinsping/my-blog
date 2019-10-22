<template>
  <div id="login">
    <div class="mask"></div>
    <div class="login-box">
      <a href="javascript:;" class="item1" @click="pageJump(1)">普通游客</a>
      <a href="javascript:;" class="item2" @click="pageJump(2)">管理人员</a>
    </div>

    <el-drawer
      title="输入登录信息"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      class="login-drawer"
    >
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>
<script>
import api from '../api/index.js'
export default {
  data () {
    var validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入用户名'))
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.username !== '') {
          this.$refs.ruleForm.validateField('username')
        }
        callback()
      }
    }
    return {
      drawer: false,
      direction: 'rtl',
      ruleForm: {
        pass: '',
        username: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        username: [{ validator: validateUsername, trigger: 'blur' }]
      }
    }
  },
  methods: {
    pageJump (n) {
      if (n === 1) {
        this.$router.push('/homepage')
      } else {
        this.drawer = true
      }
    },
    handleClose (done) {
      this.$confirm('确认放弃登录吗？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    // 提交登录表单
    submitForm () {
      var self = this
      if (!self.ruleForm.username && !self.ruleForm.pass) {
        self.$message({type: 'warning', message: '请填写用户名和密码'})
        return false
      }
      api.userLogin({
        params: {
          username: self.ruleForm.username,
          password: this.$md5(self.ruleForm.pass)
        }
      }).then(res => {
        alert('已发送')
      })
    },
    // 重置登录表单
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss">
#login {
  min-width: 1200px;
  min-height: 757px;
  background-image: url("../images/login_bg.jpg");
  background-size: 100% 100%;
  position: relative;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    a {
      font-size: 22px;
      font-weight: 400;
      color: rgb(231, 224, 224);
      display: block;
      margin: 50px 0;
      padding: 10px 20px;
      border: 2px solid rgb(231, 224, 224);
      border-radius: 2px;
    }
    a:hover {
      color: rgb(253, 253, 253);
      border-color: aqua;
    }
  }
}
</style>
