import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import ShowBlog from '@/components/ShowBlog'
import SingleBlog from '@/components/SingleBlog'
import EditBlog from '@/components/EditBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'router1',
      component: AddBlog
    },
    {
      path:'/',
      name:'router2',
      component:ShowBlog
    },
    {
      path:'/blog/:id',
      component:SingleBlog
    },
    {
      path:'/edit/:id',
      component:EditBlog
    }
  ],
  //设置路由模式 history 默认是hash模式（区别是有没有#）
  mode:'history'
})
