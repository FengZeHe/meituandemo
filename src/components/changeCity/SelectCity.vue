<!--
 * @Author: your name
 * @Date: 2020-12-10 16:05:32
 * @LastEditTime: 2020-12-11 17:33:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/components/changeCity/SelectCity.vue
-->
<template>
  <div class="wrapper">
    <div class="selecter">
      <h3>请按照省份选择</h3>

      <el-select
        class="select-item"
        v-model="provinceValue"
        placeholder="请选择"
        @change="changeProvince"
      >
        <el-option
          v-for="item in province"
          :key="item.provinveCode"
          :label="item.provinveCode"
          :value="item.provinceName"
        >
        </el-option>
      </el-select>

      <el-select class="select-item" v-model="cityValue" placeholder="请选择">
        <!-- <el-option
          v-for="(item, index) in city"
          :key="item + index"
          :label="item"
          :value="item"
        >
        </el-option> -->
      </el-select>
    </div>

    <div class="search-input">
      <h3>直接搜索</h3>
      <input class="m-input" type="text" placeholder="请输入直接搜索" />
    </div>
  </div>
</template>


<script>
export default {
  props: ["province", "city"],
  data() {
    return {
      provincelist: this.province,
      provinceValue: "",
      cityValue: "",
    };
  },
  methods: {
    changeProvince(item) {
      console.log(item);
      this.cityValue = "";
      var provinceList = this.provincelist;
      for (var city in provinceList) {
        if (provinceList[city].provinceName == item) {
          console.log(provinceList[city]);
        }
        // console.log(city)
      }
    },
    changeCity(item) {
      console.log(item);
      this.$router.push({ name: "index" });
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  position: relative;
  padding-bottom: 40px;
  border-bottom: 1px solid #ccc;
  left: 50%;
  width: 900px;
  margin-left: -450px;
  display: flex;
  flex-direction: row;
  //   border: 1px solid black;

  .selecter {
    display: inline-block;
    margin: 0 20px;

    .el-select {
      margin: 0 10px;
    }
  }

  h3 {
    display: inline-block;
  }

  .search-input {
    margin: 0 20px;
    display: inline-block;
    height: 40px;

    .m-input {
      line-height: 35px;
      margin-left: 20px;
    }
  }
}
</style>