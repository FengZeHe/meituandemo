<!--
 * @Author: your name
 * @Date: 2020-12-11 17:44:23
 * @LastEditTime: 2020-12-11 19:47:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/pages/Registered.vue
-->
<template>
  <el-container>
    <el-header>
      <el-row :gutter="10">
        <el-col :span="6">
          <div class="pic"></div>
        </el-col>
        <el-col :span="12"></el-col>
        <el-col :span="6" class="header-right">
          已有美团账号？
          <el-button>登录</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-divider></el-divider>
    <el-main>
      手机号
      <el-input v-model="phoneNum" placeholder=""></el-input>
      <span class="tip"> 注册成功后，全美团通用</span>
      <br />
      <button>免费获取短信动态码</button>
      <br />

      短信动态码 <el-input v-model="code" placeholder=""></el-input>
      <br />
      创建密码
      <el-input v-model="firstPassword" placeholder=""></el-input>
      <br />
      确认密码
      <el-input v-model="secondPassword" placeholder=""></el-input>
      <br />
      <el-button type="primary">同意以下协议并注册</el-button>
      <br />
      <a href="">《美团用户服务协议》</a> <a href="">《美团隐私政策》</a>
    </el-main>
    <el-divider></el-divider>
  </el-container>
</template>


<script>
export default {
  data() {
    return {
      phoneNum: "",
      code: "",
      firstPassword: "",
      secondPassword: "",
    };
  },
};
</script>


<style lang="less" scoped>
.el-header {
  margin-top: 20px;
  position: relative;

  .pic {
    position: relative;
    left: 50%;
    width: 128px;
    height: 50px;
    background-image: url("https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png");
    background-size: 100% 100%;
  }

  .header-right {
    font-size: 14px;
    color: #999;
    float: right;
    height: 50px;
    line-height: 50px;

    .el-button {
      background-color: #ffc100;
      border: none;
    }
  }
}

.el-main {
  font-size: 14px;
  position: relative;
  width: 800px;
  left: 50%;
  margin-left: -400px;

  .el-input {
    width: 200px;
    margin: 10px 0;
  }

  .tip {
    font-size: 12px;
    color: #999;
  }

  .el-button {
    background-color: #ffbf00;
    border: none;
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: #ff9f41;
  }
}
</style>