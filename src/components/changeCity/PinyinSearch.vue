<!--
 * @Author: your name
 * @Date: 2020-12-10 20:16:45
 * @LastEditTime: 2020-12-22 23:09:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/components/changeCity/PinyinSearch.vue
-->

<template>
  <div class="wrapper">
    <dl>
      <dt>按拼音首字母选择:</dt>
      <dd v-for="letter in MyList" :key="letter">
        <a :href="'#city-' + letter">{{ letter }}</a>
      </dd>
    </dl>
    <div class="content">
      <div
        class="content-item"
        v-for="(letter, index) in cityGroup"
        :key="letter + index"
      >
        <span class="pinyin-search">
          <div>{{ index }}</div>
        </span>
        <ul>
          <li @click="changeCity($event)" class="city-item" v-for="(city,index) in letter" :key="city+index" >{{ city.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  methods:{
    changeCity(e){
      console.log(e.target.innerText);
      const city = e.target.innerText;
      this.$store.commit('changeCity',city)
      this.$router.push('/')
    }
  },
  data() {
    return {
      letterList: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      cityGroup: {},
      citypinyinList: [],
    };
  },
  computed: {
    MyList() {
      return this.letterList.split("");
    },
  },
  created() {
    api.getCityList().then((res) => {
      var obj = {};
      res.data.data.forEach((item) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
      });
      this.cityGroup = obj;
      for (let item in obj) {
        this.citypinyinList.push(item);
      }
      // console.log(this.cityGroup);
    });
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  margin-top: 40px;
  width: 900px;
  position: relative;
  left: 50%;
  margin-left: -450px;
  padding-bottom: 40px;
  border-bottom: 1px solid #ccc;
  dl,
  dt,
  dd {
    display: inline-block;
  }

  dt {
    font-size: 18px;
  }
  dd {
    margin: 0 8px;
    cursor: pointer;

    a {
      text-decoration: none;
      color: black;
    }
  }

  .content {
    // display: flex;
    // flex-direction: row;
    width: 1000px;

    .content-item:hover {
      // transition: all .3s;
      background-color: #FCFCFC;
      cursor: pointer;

      .city-item{
        font-weight: bold;
        color: black;
      }

    }
    .content-item {
      display: flex;
      width: 1000px;
      height: 80px;
      margin: 20px 0;
      background-color: #fff;
    }

    .pinyin-search {
      width: 50px;
      height: 50px;
      border: none;
      border-radius: 50%;
      background-color: #ffd000;
      text-align: center;
      position: relative;
      div {
        position: absolute;
        top: 50%;
        width: 50px;
        height: 50px;
        margin-top: -10px;
      }
    }

    .city-item{
      margin: 0 20px;
      font-size: 14px;
      color: #676767;
    }
    ul {

      li {
        display: inline-block;
      }
    }
  }
}
</style>