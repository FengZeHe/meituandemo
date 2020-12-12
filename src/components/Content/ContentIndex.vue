<!--
 * @Author: your name
 * @Date: 2020-12-09 16:28:43
 * @LastEditTime: 2020-12-09 22:07:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/components/Content/ContentIndex.vue
-->
<template>
  <div class="wrapper">
    <el-row class="content-nav">
      <ul>
        <li>
          <router-link to="/" tag="span">美团外卖</router-link>
        </li>
        <li>
          <router-link to="/" tag="span">猫眼电影</router-link>
        </li>
        <li>
          <router-link to="/" tag="span">美团酒店</router-link>
        </li>
        <li>
          <router-link to="/" tag="span">民宿/公寓</router-link>
        </li>
        <li>
          <router-link to="/" tag="span">商家入驻</router-link>
        </li>
        <li>
          <router-link to="/" tag="span">美团公益</router-link>
        </li>
      </ul>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="14">
        <el-carousel indicator-position="outside" height="300px" width="600px">
          <el-carousel-item v-for="item in picList" :key="item">
            <img class="slideshow" :src="item" alt="" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="4">
        <div class="firstPic picItem"></div>
      </el-col>
      <el-col :span="6">
        <div class="register">
          <div>
            <img src="@/assets/pic/avatar.jpg" alt="" />
          </div>
          <button>我要登录</button>
          <button>注册</button>
        </div>
      </el-col>
    </el-row>

    <el-row class="rowSecond">
      <el-col :span="7">
        <div class="rowSecondPic1 picItem"></div>
      </el-col>
      <el-col :span="7">
        <div class="rowSecondPic2 picItem"></div>
      </el-col>
      <el-col :span="4">
        <div class="rowSecondPic3 picItem"></div>
      </el-col>
      <el-col :span="5">
        <div class="rowSecondPic4 picItem">
          <img src="@/assets/pic/app.png" alt="" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      picList: [
        "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
        "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
      ],
      Movies: {
        class: "movies",
      },
    };
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  position: relative;
  width: 1050px;
  left:50%;
  margin-left: -525px;
  margin-top: -15px;
}

.content-nav {
  li {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    margin: 5px 20px;
    cursor: pointer;
  }

  li:hover {
    color: #ffc303;
  }
}

.rowSecond /deep/ .el-col {
  //   border: 1px solid black;
  margin: 1px;
}

.rowFirstPic {
  width: 200px;
}

.picItem {
  width: 300px;
  height: 200px;
  background-size: 100% 100%;
}

.slideshow {
  width: 100%;
  height: 100%;
}

.firstPic {
  background-image: url("http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg");
  background-size: 100% 100%;
  //   border: 1px solid red;
  width: 200px;
  height: 300px;
}

.rowSecondPic1 {
  background-image: url("http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png");
  //   border: 1px solid red;
}

.rowSecondPic2 {
  background-image: url("http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg");
}

.rowSecondPic3 {
  width: 200px;
  height: 200px;
  background-image: url("http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg");
}

.rowSecondPic4 {
  width: 200px;
  height: 200px;
  margin-left: 30px;
  img {
    width: 100%;
    height: 100%;
  }
}

.register {
  width: 200px;
  height: 300px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  div {
    margin-top: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 30px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  button {
    width: 80px;
    height: 50px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
    background-color: white;
    border: 1px solid #ccc;
  }

  button:hover {
    background-color: #ccc;
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>