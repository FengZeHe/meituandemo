<!--
 * @Author: your name
 * @Date: 2020-12-08 22:38:22
 * @LastEditTime: 2020-12-11 10:03:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/components/header/goodsList.vue
-->
<template>
  <div class="wrapper">
    <bread-crumb></bread-crumb>
    <el-row :gutter="10">
      <el-col :span="20">
        <div class="nav-content">
          <product-category :nav="allKind"></product-category>
          <product-category :nav="area"></product-category>
        </div>

        <div class="main">
          <sort-list :nav="sortList"></sort-list>
          <product-content></product-content>
        </div>
      </el-col>
      <el-col :span="4">4skdhfk</el-col>
    </el-row>
  </div>
</template>

<script>
import BreadCrumb from "@/components/product/BreadCrumb";
import ProductCategory from "@/components/product/ProductCategory";
import SortList from "@/components/product/SortList";
import ProductContent from "@/components/product/ProductContent";
export default {
  components: {
    BreadCrumb,
    ProductCategory,
    SortList,
    ProductContent,
  },
  data() {
    return {
      allKind: {
        title: "分类",
        list: ["美食", "休闲娱乐", "生活服务", "时尚购"],
      },
      area: {
        title: "区域",
        list: [
          "推荐商圈",
          "禅城区",
          "南海区",
          "顺德区",
          "高明区",
          "三水区",
          "盐步",
          "南庄",
          "黄岐",
          "大沥",
        ],
      },
      sortList: ["智能排序", "价格排序", "人气最高", "评价最高"],
    };
  },
};
</script>

<style lang='less' scoped>
.wrapper {
  width: 1200px;
  left: 50%;
  margin-left: -600px;
  position: relative;
  // border: 1px solid greenyellow;

  .nav-content {
    background-color: white;
  }

  .main {
    margin-top: 10px;
    background-color: white;
  }
}
</style>