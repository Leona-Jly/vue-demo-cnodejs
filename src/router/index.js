import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import Editor from '@/page/editor'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: '/',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/content/:id',
      name: 'content',
      component: Content
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    }
  ]
})
