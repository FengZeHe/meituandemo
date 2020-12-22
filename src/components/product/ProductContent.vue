<!--
 * @Author: your name
 * @Date: 2020-12-11 10:00:25
 * @LastEditTime: 2020-12-16 13:01:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/components/product/ProductContent.vue
-->
<template>
  <div>
    <product-card ></product-card>
  </div>
</template>

<script>
import api from "@/api/index.js";
// const axios = require("axios");
import ProductCard from "@/components/product/ProductCard";
export default {
  data() {
    return {
      productList: [],
    };
  },
  components: {
    ProductCard,
  },
  methods: {
    getData() {
      api.getGoodsList().then((res) => {
        this.productList = res.data.data;
        console.log(this.productList)
      });
    },
  },
  created() {
    // this.getData();
  },
};
</script>


<style scoped>
</style>