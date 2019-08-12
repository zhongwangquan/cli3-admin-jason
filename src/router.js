/* eslint-disable */ 
import Vue from 'vue'
import Router from 'vue-router'

const login = () => import('views/login/index')
const layout = () => import('@/layout/index')
const dashboard = () => import('views/dashboard/index')

Vue.use(Router)



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: layout,
    //   redirect: '/dashboard',  
    },
    {
      path: '/dashboard',
      component: dashboard
    },
    {
      path: '/login',
      component: login
    }
  ]
})
