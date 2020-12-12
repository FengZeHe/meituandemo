<!--
 * @Author: your name
 * @Date: 2020-12-11 09:53:02
 * @LastEditTime: 2020-12-11 09:59:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/components/product/SortList.vue
-->

<template>
  <ul>
    <li v-for="item in nav" :key="item">{{item}}</li>
  </ul>
</template>

<script>
export default {
  props: ["nav"],
};
</script>

<style lang="less" scoped>
li {
  display: inline-block;
  margin: 10px 10px;
  color: #999;
  font-size: 16px;
  height: 20px;
  line-height: 20px;
}

.active {
  font-weight: bold;
  color: black;
}
</style>