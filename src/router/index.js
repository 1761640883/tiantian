import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home'
import author from './Author'
import introduced from './introduced'

Vue.use(VueRouter)

const routes = [
  author,
  home,
  introduced,
  {
    path: '/detail/:id',
    component: ()=>import('@/views/detail'),
    props: true
  },
  {
    path: '',
    redirect: 'home'
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
