<!--
 * @Author: your name
 * @Date: 2020-12-10 23:01:54
 * @LastEditTime: 2020-12-10 23:03:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/components/product/BreadCrumb.vue
-->
<template>
  <div class="wrapper">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">{{
        $store.state.location
      }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $store.state.location }}酸菜鱼</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>