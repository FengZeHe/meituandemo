<!--
 * @Author: your name
 * @Date: 2020-12-11 17:43:03
 * @LastEditTime: 2020-12-15 16:08:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/pages/Login.vue
-->
<template>
  <div class="wrapper">
    <el-row :gutter="10">
      <el-col :span="12">
        <img
          src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          alt=""
        />
      </el-col>
      <el-col :span="12">
        <div class="login-item">
          <span class="count">账号登录</span>
          <span class="phone">
            手机动态码登录
            <i class="el-icon-mobile-phone e"></i>
          </span>

          <el-input placeholder="请输入手机号" v-model="userName">
            <template slot="prepend">+86> </template>
          </el-input>

          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="password"
          >
          </el-input>

          <div class="forget">忘记密码？</div>
          <el-button type="primary" @click="handleClick">登录</el-button>
          <span class="toregister">
            还没有账号？
            <a>
              <router-link tag="span" to="/register">免费注册</router-link>
            </a>
          </span>

          <el-divider>用合作网站账号登录</el-divider>
          <div class="otherCount">
            <i class="el-icon-user-solid"></i>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    handleClick() {
      if (this.userName.length != "" || this.password.length != "") {
        const { userName, password } = this;
        const login = {
          userName,
          password,
        };
        // console.log(login);
        api
          .toLogin({
            params: login,
          })
          .then((res) => {
            let status = res.data.status;
            console.log(status);
            if (status == "success") {
              this.$router.push("/");
            } else {
              this.$message.error(res.data.msg);
            }
          });
      }
    },
  },
};
</script>


<style lang="less" scoped>
.wrapper {
  position: absolute;
  width: 1200px;
  left: 50%;
  margin-left: -600px;
  top: 100px;

  .login-item {
    width: 350px;

    position: relative;
    // border: 1px solid red;

    .count {
      font-size: 14px;
      color: #999;
    }

    .phone {
      position: absolute;
      font-size: 14px;
      color: #999;
      right: 0;
    }

    .toregister {
      position: relative;
      font-size: 14px;

      a {
        color: orange;
      }
    }

    .el-input {
      margin: 10px 0;
    }

    .forget {
      position: absolute;
      right: 0;
      font-size: 12px;
      color: orange;
    }

    .el-button {
      width: 100%;
      display: block;
      position: relative;
      margin-top: 20px;
      background-color: #ffc401;
      border: none;
      margin-bottom: 10px;
    }
  }
  .otherCount {
    // border: 1px solid red;
    text-align: center;
  }
}
</style>