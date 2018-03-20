import Vue from 'vue'
import Router from 'vue-router'
import FrameWork from '../components/framework.vue'
import home from '../router/home'
import user from '../router/user'
import article from '../router/ariticle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {name: 'home'},
      name: 'root',
      component: FrameWork,
      children: [ home, user, article ]
    }
  ]
})
