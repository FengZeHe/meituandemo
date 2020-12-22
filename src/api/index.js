/*
 * @Author: your name
 * @Date: 2020-12-11 15:55:20
 * @LastEditTime: 2020-12-16 12:46:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/api/index.js
 */
import axios from '@/axios.js'

var api = {
    getInputSerach() {
        return axios.get('/api/meituan/header/search.json');
    },
    getLeftNav() {
        return axios.get('/api/meituan/index/nav.json');
    },
    getCityList() {
        return axios.get("/api/meituan/city/cityList.json");
    },
    getHotCityList() {
        return axios.get("/api/meituan/city/hot.json");
    },
    getRecentCityList() {
        return axios.get("/api/meituan/city/recents.json");
    },
    getProvinceList() {
        return axios.get("/api/meituan/city/province.json")
    },
    getRecentCity() {
        return axios.get("/api/meituan/city/recents.json");
    },
    toRegistered(params) {
        return axios.get('/api/meituan/register', params);
    },
    toLogin(params) {
        return axios.get('/api/meituan/login', params);
    },
    getGoodsList() {
        return axios.get("/api/meituan/list/goodsList.json")
    }



}


export default api;