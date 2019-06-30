import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          // 如果给path加上/  变成/user   那么访问的时候直接 使用 /user
          // 如果不加/  那么访问的时候直接  /home/user
          path: '/user',
          component: User
        }
      ]
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
