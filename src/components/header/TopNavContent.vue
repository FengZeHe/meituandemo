<!--
 * @Author: your name
 * @Date: 2020-12-08 16:15:44
 * @LastEditTime: 2020-12-08 20:10:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/components/header/TopNavContent.vue
-->
<template>
  <div class="wrapper">
    <div class="nav-hotels">
      <h2>酒店旅游</h2>
      <ul>
        <li v-for="hotels in hotel" :key="hotels">{{ hotels }}</li>
      </ul>
    </div>
    <div class="nav-food">
      <h2>吃美食</h2>
      <ul>
        <li v-for="foods in food" :key="foods">{{ foods }}</li>
      </ul>
    </div>
    <div class="nav-movie">
      <h2>看电影</h2>
      <ul>
        <li v-for="movies in moive" :key="movies">{{ movies }}</li>
      </ul>
    </div>
    <div class="nav-app">
      <h2>手机应用</h2>
      <div class="pic">
        <img src="@/assets/pic/meituan.png" alt="" />
        <img src="@/assets/pic/waimai.png" alt="" />
        <img src="@/assets/pic/hotel.png" alt="" />
        <img src="@/assets/pic/dianping.png" alt="" />
        <img src="@/assets/pic/maoyan.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotel: [
        "国际机票",
        "火车票",
        "民宿",
        "经济型酒店",
        "主题酒店",
        "商务酒店",
        "公寓",
        "豪华酒店",
        "客栈",
        "青年旅社",
        "度假酒店",
        "别墅",
        "农家院",
      ],
      food: ["烤鱼", "特色小吃", "烧烤", "自助餐", "火锅", "代金券"],
      moive: [
        "热映电影",
        "热门影院",
        "热映电影口碑榜",
        "最受期待电影",
        "国内票房榜",
        "北美票房榜",
        "电影排行榜",
      ],
    };
  },
};
</script>

<style lang="less" scoped >
.wrapper {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 5px;

  display: flex;
  h2 {
    font-size: 15px;
    color: black;
  }
  .nav-hotels {
    width: 400px;
    margin: 0 30px;
    li {
      float: left;
      display: inline-block;
      width: 32%;
      text-align: center;
    }
  }
  .nav-food {
    flex-grow: 1;
    li {
      float: left;
      display: inline-block;
      width: 50%;
    }
  }

  .nav-movie {
    flex-grow: 1;
    li {
      margin: 0;
      height: 40px;
    }
  }
  .nav-app {
    flex-grow: 4;
    .pic {
      img {
        width: 100px;
        height: 100px;
        margin: 0 20px;
      }
    }
  }
}
</style>