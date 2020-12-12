/*
 * @Author: your name
 * @Date: 2020-12-11 15:42:00
 * @LastEditTime: 2020-12-11 16:15:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/api.js
 */
import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com'



axios.interceptors.request.use(function (config) {
    // console.log(config)
    config.params = {
        ...config.params,
        appkey: "dafeng2021__1597219598914"
    }
    return config;
})


export default axios;