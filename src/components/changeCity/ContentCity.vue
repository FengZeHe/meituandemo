<!--
 * @Author: your name
 * @Date: 2020-12-10 20:04:14
 * @LastEditTime: 2020-12-16 12:26:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/components/changeCity/ContentCity.vue
-->
<template>
  <div class="wrapper">
    <dl>
      <dt>热门城市</dt>
      <dd v-for="(city,index) in hitcity" :key="city+index" @click="handleClick($event)">{{ city.name }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["hitcity"],
  methods:{
    handleClick(event){
      // console.log(event.target.innerText)
      let city = event.target.innerText;
      this.$router.push('/');
      this.$store.commit("changeCity",city)
    }
  }
};
</script>


<style scoped>
</style>

<style lang="less" scoped>
.wrapper {
  margin-top: 40px;
  width: 900px;
  position: relative;
  left: 50%;
  margin-left: -450px;
  padding-bottom: 40px;
  border-bottom: 1px solid #ccc;
  dl,
  dt,
  dd {
    display: inline-block;
  }

  dt {
    font-size: 18px;
  }

  dd {
    color: #999;
    font-size: 14px;
    margin: 0 20px;
    cursor: pointer;
  }
  dd:hover {
    color: black;
    font-weight: bold;
  }
}
</style>