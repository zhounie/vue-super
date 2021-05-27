<template>
    <div class="login-page">
        <div class="content-box">
            <el-form ref="form" :rules="rules" :validate-on-rule-change="false" class="form_box" :model="loginForm">
                <el-form-item>
                    <el-input placeholder="请输入账户" class="user" v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                      type="password" placeholder="请输入密码" class="psd"
                      show-password
                      @keyup.enter="login" v-model="loginForm.password"></el-input>
                </el-form-item>
                <el-form-item style="padding-top: 30px">
                    <el-button :disabled="isDisabled" :loading="loginLoading" class="login_btn" type="primary" @click="loginSubmit">登录</el-button>
                </el-form-item>
            </el-form>
            <p class="copy">copyright &copy; {{new Date().getFullYear()}} 浙江也麦数据科技有限公司出品</p>
        </div>
    </div>
</template>

<script>
import { login, getCurrentUserInfo } from '@/api/system'

export default {
  data() {
    return {
      loginForm: {
        username: '', //账号;
        password: '' //密码;
      },
      loginLoading: false,
      rules: {
        password: []
      }
    }
  },
  computed: {
    isDisabled() {
      return !(this.loginForm.username && this.loginForm.password)
    }
  },
  mounted() {
    console.log(this.$route.params.pathMatch);
  },
  methods: {
    loginSubmit(){
      const checkPassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入密码'));
        }
        login(this.loginForm).then(res => {
          if(res.code === '0'){
            localStorage.setItem('token', res.data.access_token);
            callback();
          } else {
            this.loginLoading = false
            callback(new Error(res.msg));
          }
        }).catch(err => {
          this.loginLoading = false
          callback(new Error(err.msg));
        })
      };
      this.rules.password = [{ validator: checkPassword }]
      this.$refs.form.validateField('password', (errorMessage) => {
        if(errorMessage) return
        getCurrentUserInfo({}).then(res => {
          if (res.code === '0') {
            localStorage.setItem('userInfo', JSON.stringify({
              id: res.data.id,
              username: res.data.username
            }));
            this.$router.push('/layout');
            this.loginLoading = false
          } else {
            this.$message.error(res.msg)
          }
        })
      })
      this.loginLoading = true
    }
  }
}
</script>

<style lang="less" scoped>
.login-page {
    width: 100%;
    height: 100%;
    background: url("../../assets/images/login/login_bg1.png") no-repeat center;
    background-size: cover;
    .content-box {
        width: 1448px;
        height: 918px;
        background: url("../../assets/images/login/login_bg2.png") no-repeat center;
        background-size: contain;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        .copy {
          position: absolute;
          left: 102px;
          bottom: 138px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 20px;
          user-select: none;
        }
    }

    .form_box {
        position: absolute;
        left: 130px;
        top: 320px;
    }
    
    .user,.psd {
        /deep/ input {
            width: 312px;
            height: 50px;
            border-radius: 25px;
            background:rgba(247,247,247,1);
            border: none;
            &::-webkit-input-placeholder {
                color:rgba(192,192,192,1);
            }
        }
    }
    .login_btn {
        width: 134px;
        height: 50px;
        border-radius: 25px;
        border: none;
        font-size: 18px;
        font-weight:400;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        &:not(.is-disabled) {
            background:linear-gradient(90deg,rgba(79,183,255,1) 0%,rgba(39,129,255,1) 100%);
        }
        &.is-disabled {
            background: #D0D0D0;
        }
        &:hover,&:focus {
            opacity: .8;
        }
    }
}
</style>