<!--
 * @Author: your name
 * @Date: 2020-12-09 11:41:30
 * @LastEditTime: 2020-12-10 22:55:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/components/Content/Content.vue
-->

<template>
  <div class="content-wrapper">
    <el-row>
      <el-col :span="4"
        ><div class="grid-content">
          <content-menu></content-menu></div
      ></el-col>
      <el-col :span="20"
        ><div class="grid-content">
          <content-index></content-index>

          <content-movie :nav="movieList"></content-movie>
          <content-other :nav="locationList"></content-other></div
      ></el-col>
    </el-row>
  </div>
</template>


<script>
import ContentMenu from "@/components/Content/ContentMenu";
import ContentIndex from "@/components/Content/ContentIndex";
import ContentMovie from "@/components/Content/ContentMovie";
import ContentOther from "@/components/Content/ContentOther";
// import ContentOther from '@/compoments/Content/ContentOther.vue';
export default {
  data() {
    return {
      movieList: {
        title: "猫眼电影",
        list: ["正在热映", "即将上映"],
      },
      locationList: {
        title: "推荐民宿",
        list: [
          "广州",
          "深圳",
          "南宁",
          "珠海",
          "桂林",
          "北海",
          "海口",
          "惠州",
          "东莞",
          "柳州",
        ],
      },
    };
  },
  components: {
    ContentMenu,
    ContentIndex,
    ContentMovie,
    ContentOther,
  },
};
</script>

<style scoped>
.content-wrapper {
  position: relative;
  width: 1400px;
  left: 50%;
  margin-left: -700px;
}
</style>