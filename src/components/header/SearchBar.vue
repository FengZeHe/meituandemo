<!--
 * @Author: your name
 * @Date: 2020-12-08 18:41:32
 * @LastEditTime: 2020-12-16 12:32:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/components/header/SourceBar.vue
-->

<template>
  <div class="wrapper">
    <div class="logo">
      <img src="@/assets/pic/logo.png" alt="" />
    </div>
    <div class="search-bar">
      <div class="input-search">
        <el-input
          v-model="search"
          placeholder="搜索商家或地点"
          @focus="handleShow"
          @blur="handleShow"
        ></el-input>
        <el-button
          class="search-btn"
          type="primary"
          icon="el-icon-search"
        ></el-button>
      </div>

      <div class="lenovo" v-if="showlenovo">
        <ul>
          <li v-for="(item, index) in lenovo" :key="item + index">
            <router-link
              :to="{ name: 'goods', params: { name: item } }"
              tag="li"
              >{{ item }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  created() {
    api.getInputSerach().then((res) => {
      this.lenovo = res.data.data.list;
      // console.log(this.lenovo);
    });
  },
  methods: {
    handleShow() {
      var that = this;
      setTimeout(function () {
        if (that.showlenovo == false) {
          that.showlenovo = true;
        } else {
          that.showlenovo = false;
        }
        console.log(that.showlenovo);
      }, 200);
    },
  },
  data() {
    return {
      search: "",
      lenovo: [],
      showlenovo: false,
    };
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  // border: 1px solid black;
  display: flex;
  width: 100%;
  height: 150px;
}

.search-bar {
  position: relative;
  // border: 1px solid black;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.lenovo {
  position: absolute;
  top: 95px;
  left: 16%;
  font-size: 13px;
  background-color: #ccc;
  opacity: 0.6;

  li {
    margin: 6px 5px;
    cursor: pointer;
    z-index: 99999;
  }
}

.logo {
  position: relative;
  left: 10%;
  img {
    position: relative;
    top: 50%;
    margin-top: -23px;
    width: 126px;
    height: 46px;
  }
}

.input-search {
  width: 600px;
  position: relative;
  display: flex;
  // border: 1px solid black;
  left: 15%;
  align-items: center;

  el-input {
    border-right: none;
  }

  .search-btn {
    width: 90px;
    background-color: #ffc303;
    border: 1px solid #ffc303;
  }
}
</style>