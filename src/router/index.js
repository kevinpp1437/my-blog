import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import ShowBlog from '@/components/ShowBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path:'/list',
      name:'ShowBlog',
      component:ShowBlog
    }
  ]
})
