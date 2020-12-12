<template>
  <div>
    <product-card :data="productList"></product-card>
  </div>
</template>

<script>
const axios = require("axios");
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
      axios.get("/data/fishlist.json").then((res) => {
        this.productList = res.data;
        console.log(this.productList);
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>


<style scoped>
</style>