/*
 * @Author: your name
 * @Date: 2020-12-10 22:34:40
 * @LastEditTime: 2020-12-16 12:20:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/store.js
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        location: '佛山'
    },
    mutations: {
        changeCity(state, city) {
            state.location = city;
        }
    }
})