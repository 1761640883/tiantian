import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import author from './Author'
import join from './Join'
import introduced from './introduced'

Vue.use(VueRouter)

const routes = [
  author,
  home,
  join,
  introduced,
  {
    path: '',
    redirect: 'home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
