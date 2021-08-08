import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "cartlist" */ '../views/Login')
  }, {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "cartlist" */ '../views/Register')
  }, {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "cartlist" */ '../views/Home')
  }, {
    path: '/userAdmin',
    name: 'UserAdmin',
    component: () => import(/* webpackChunkName: "cartlist" */ '../views/admin/UserAdmin')
  }, {
    path: '/articleAdmin',
    name: 'ArticleAdmin',
    component: () => import(/* webpackChunkName: "cartlist" */ '../views/admin/ArticleAdmin')
  }, {
    path: '/userEdit',
    name: 'UserEdit',
    component: () => import(/* webpackChunkName: "cartlist" */ '../views/admin/UserEdit')
  }, {
    path: '/admin/ArticleEdit',
    name: 'ArticleEdit',
    component: () => import(/* webpackChunkName: "cartlist" */ '../views/admin/ArticleEdit')
  }, {
    path: '/Editor',
    name: 'Editor',
    component: () => import(/* webpackChunkName: "cartlist" */ '../views//Editor')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "cartlist" */ '../views/detail/Detail')
  }, {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "cartlist" */ '../views/search/Search')
  }, {
    path: '/label',
    name: 'Label',
    component: () => import(/* webpackChunkName: "cartlist" */ '../views/label/Label')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
