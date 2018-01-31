import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/header.vue'
import UserCenter from '../view/userCenter.vue'

Vue.use(Router)

console.log('router test')
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Header
    },
    {
      path: 'user',
      name: 'userCenter',
      component: UserCenter
    }
  ]
})
