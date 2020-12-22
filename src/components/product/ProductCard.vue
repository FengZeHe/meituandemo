<!--
 * @Author: your name
 * @Date: 2020-12-11 10:00:01
 * @LastEditTime: 2020-12-16 13:17:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/components/product/ProductCard.vue
-->
<template>
  <div class="wrapper">
    <!-- {{ productList }} -->
    <el-row
      :gutter="10"
      v-for="(card, index) in productList"
      :key="card + index"
    >
      <el-col :span="6">
        <div class="pic"><img :src="card.image" alt="" /></div>
      </el-col>
      <el-col :span="18">
        <h3 class="title">{{ card.title }}</h3>
        <div class="star-item">
          <!-- <i
            class="el-icon-star-on light"
            v-for="star in Math.floor(card.point)"
            :key="star"
          ></i>
          <i
            class="el-icon-star-on gray"
            v-for="(item, index) in 5 - Math.floor(card.point)"
            :key="item + index + Math.random()"
          ></i> -->
          <span class="point">评分：{{ card.score }} </span>
        </div>
        <span class="kind">{{ card.kind }}</span>
        <span class="location">
          <span>{{ card.address }}</span>
          <i class="el-icon-location-outline">地理位置</i>
        </span>
        <p class="avg price">人均￥{{ card.avgPrice }}</p>

        <el-divider></el-divider>
        <div
          class="setmeal"
          v-for="(item, index) in card.comment"
          :key="item + index"
        >
          <div class="setmeal-title">
            <!-- {{ item.evalaute }} -->
          </div>
          <!-- <span class="price"> ￥{{ item.avgPrice }} </span> -->
          <span class="other">
            <!-- 门市价:<del>{{ item.orgprice }}</del> 已售:{{ item.salse }} -->
          </span>
        </div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  props: ["data"],
  data() {
    return {
      productList: ["2", 1],
    };
  },
  methods: {
    getData() {
      api.getGoodsList().then((res) => {
        this.productList = res.data.data;
        console.log(this.productList);
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  //   border: 1px solid red;

  .pic {
    margin: 10px;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    font-size: 16px;
    margin: 10px 0;
  }

  .star-item {
    margin: 15px 0;
    .point {
      color: #ccc;
      font-size: 14px;
    }
    .el-icon-star-on {
      color: #ff9901;
    }

    .gray {
      color: #ccc;
    }
  }

  .kind,
  .location {
    font-size: 14px;
    color: #999;
    margin: 5px 10px 5px 0;
    display: inline-block;
  }

  .price {
    font-size: 16px;
    color: #ff9901;
  }

  .avg {
    position: relative;
    font-size: 14px;
    margin-top: 10px;
    display: block;
    color: #999;
  }

  .setmeal {
    .setmeal-title {
      font-size: 14px;
      color: #999;
    }
    // border: 1px solid black;
    margin: 20px 0;

    .other {
      font-size: 14px;
      color: #999;
      margin: 10px 20px;
    }
  }
}
</style>