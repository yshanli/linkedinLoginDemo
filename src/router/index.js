import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
   		{
            path: '/',
            redirect: '/Login'
       },

        {
            path: '/Login', // 用户管理
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
  ]
})
