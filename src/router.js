/*
 * @Author: your name
 * @Date: 2020-12-08 14:21:51
 * @LastEditTime: 2020-12-11 18:00:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /meituandemo/src/router.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
import Router from 'vue-router';
import Default from '@/layout/Default'
import Content from '@/components/Content/Content'
import Blank from '@/layout/Blank'

Vue.use(Router);

var routes = [
    {
        path: "/",
        component: Default,
        name: 'index',
        redirect: '/index',
        children: [
            {
                path: '/s/:name',
                name: 'goods',
                component: () => import('@/pages/GoodsList')
            }, {
                path: '/changecity',
                name: "changecity",
                component: () => import('@/pages/ChangeCity.vue')
            }, {
                path: 'index',
                name: "content",
                component: Content
            }
        ]
    }, {
        path: "/blank",
        component: Blank,
        name: 'blank',
        children: [
            {
                path: '/login',
                component: () => import('@/pages/Login.vue'),
                name: "login",
            },
            {
                path: '/registered',
                component: () => import('@/pages/Registered.vue'),
                name: "registered"
            }
        ]
    }

]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router;