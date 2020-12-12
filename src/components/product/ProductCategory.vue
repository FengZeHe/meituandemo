<!--
 * @Author: your name
 * @Date: 2020-12-10 23:10:27
 * @LastEditTime: 2020-12-11 09:52:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/components/product/ProductCategory.vue
-->
<template>
  <div class="wrapper">
    <div class="content">
      <h3>{{ nav.title }}</h3>
      <button>全部</button>
      <dl>
        <dt v-for="kind in nav.list" :key="kind">{{ kind }}</dt>
        <dd></dd>
      </dl>
    </div>
  </div>
</template>


<script>
export default {
  props: ["nav"],
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  position: relative;
  .content {
    // border: 1px solid red;
    // position: relative;
    margin-left: 90px;
    height: 60px;
    line-height: 60px;

    button {
      border: none;
      background-color: #FFC303;
      border-radius: 10px;
      width: 50px;
      height: 30px;
      text-align: center;
    }
  }

  dl,
  dt,
  dd,
  h3 {
    display: inline-block;
    margin: 0 20px;
  }

  dt{
    color: #999;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>