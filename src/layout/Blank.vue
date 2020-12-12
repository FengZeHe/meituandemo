<!--
 * @Author: your name
 * @Date: 2020-12-11 17:42:40
 * @LastEditTime: 2020-12-11 18:33:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/layout/Blank.vue
-->
<template>
  <div class="wrapper">
    <router-view></router-view>
    <div class="button">
      ©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
.button {
  position: absolute;
  width: 800px;
  left: 50%;
  margin-left: -400px;
  bottom: 100px;
  color: #999;
}
</style>