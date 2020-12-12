<!--
 * @Author: your name
 * @Date: 2020-12-08 10:05:40
 * @LastEditTime: 2020-12-09 11:41:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/App.vue
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="less">

@base: #f938ab;
.box {
  width: 400px;
  height: 400px;
  background-color: @base;
}
</style>
