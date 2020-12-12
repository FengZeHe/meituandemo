<!--
 * @Author: your name
 * @Date: 2020-12-08 14:20:47
 * @LastEditTime: 2020-12-10 16:04:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/layout/Default.vue
-->
<template>
  <div>
    <el-container>
      <el-header height="">
        <top-nav></top-nav>
        <search-bar></search-bar>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
      <el-footer height="">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>


<script>
import TopNav from "@/components/header/TopNav";
import SearchBar from "@/components/header/SearchBar";
import Footer from "@/components/footer/Footer";
// import Content from '@/components/Content/Content'
export default {
  components: {
    TopNav,
    SearchBar,
    Footer,
    // Content
  },
};
</script>

<style scoped>
.main {
  background-color: #f8f8f8;
}
</style>