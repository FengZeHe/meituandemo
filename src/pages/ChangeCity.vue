<!--
 * @Author: your name
 * @Date: 2020-12-10 14:11:10
 * @LastEditTime: 2020-12-11 17:09:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/pages/ChangeCity.vue
-->

<template>
  <div class="wrapper">
    <select-city
      :province="provinceList"
      @changeProvince="SelectProvince"
      :city="citiesList"
    ></select-city>

    <content-city :hitcity="hitCity"></content-city>
    <content-city :hitcity="recentCity"></content-city>
    <pinyin-search></pinyin-search>
  </div>
</template>


<script>
import api from "@/api/index.js";
import SelectCity from "@/components/changeCity/SelectCity";
import ContentCity from "@/components/changeCity/ContentCity";
import PinyinSearch from "@/components/changeCity/PinyinSearch";
export default {
  components: {
    SelectCity,
    ContentCity,
    PinyinSearch,
  },
  data() {
    return {
      provinceList: [],
      selectedProvince: [],
      citiesList: [],
      hitCity: [],
      recentCity: [],
    };
  },
  methods: {
    SelectProvince(province) {
      var provinces = this.provinceList;
      var curprovince;
      for (var item of provinces) {
        if (item.value == province) {
          curprovince = item;
        }
      }
      this.selectedProvince = curprovince;
      this.getCityList();
    },
    getCityList() {
      var cityList = this.selectedProvince.children;
      for (var item of cityList) {
        let label = item.label;
        this.citiesList.push(label);
      }
    },
  },
  computed: {},
  created() {
    api.getCityList().then((res) => {
      this.citiesList = res.data.data;
    });

    api.getHotCityList().then((res) => {
      this.hitCity = res.data.data;
    });

    api.getRecentCity().then((res) => {
      this.recentCity = res.data.data;
    });

    api.getProvinceList().then((res) => {
      // console.log("省份" + res.data.data);
      this.provinceList = res.data.data;
    });
  },
};
</script>

<style scoped>
</style>