import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../components/Login.vue'
// import Home from '../components/Home.vue'
// import Welcome from '../components/Welcome.vue'
// import Users from '../components/user/Users.vue'
// import Rights from '../components/power/Rights.vue'
// import Roles from '../components/power/Roles.vue'
// import Cate from '../components/goods/Cate.vue'
// import Params from '../components/goods/Params.vue'

const Login = () => import(/* webpackChunkName: "login_home_welcome" */ '../components/Login.vue')
const Home = () => import(/* webpackChunkName: "login_home_welcome" */ '../components/Home.vue')
const Welcome = () => import(/* webpackChunkName: "login_home_welcome" */ '../components/Welcome.vue')

const Users = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/user/Users.vue')
const Rights = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/power/Rights.vue')
const Roles = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../components/power/Roles.vue')

const Cate = () => import(/* webpackChunkName: "Cate_Params" */ '../components/goods/Cate')
const Params = () => import(/* webpackChunkName: "Cate_Params" */ '../components/goods/Params')

const GoodsList = () => import(/* webpackChunkName: "GoodsList_Add" */ '../components/goods/List')
const Add = () => import(/* webpackChunkName: "GoodsList_Add" */ '../components/goods/Add')

const Order = () => import(/* webpackChunkName: "Order_Report" */ '../components/order/Order')
const Report = () => import(/* webpackChunkName: "Order_Report" */ '../components/report/Report')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    }, {
      path: '/home',
      redirect: '/welcome',
      component: Home,
      children: [
        {
          path: '/welcome',
          component: Welcome
        },
        {
          path: '/users',
          // component: () => import('@/components/user/Users.vue')
          component: Users
        },
        {
          path: '/rights',
          // component: () => import('@/components/power/Rights.vue')
          component: Rights
        },
        {
          path: '/roles',
          // component: () => import('@/components/power/Roles.vue')
          component: Roles
        },
        {
          path: '/categories',
          // component: () => import('@/components/goods/Cate.vue')
          component: Cate
        },
        {
          path: '/params',
          // component: () => import('@/components/goods/Params.vue')
          component: Params
        },
        {
          path: '/goods',
          // component: () => import('@/components/goods/List.vue')
          component: GoodsList
        },
        {
          path: '/goods/add',
          // component: () => import('@/components/goods/Add.vue')
          component: Add
        },
        {
          path: '/orders',
          // component: () => import('@/components/order/Order.vue')
          component: Order
        },
        {
          path: '/reports',
          // component: () => import('@/components/report/Report.vue')
          component: Report
        }
      ]
    }]
})

// ????????????????????????
router.beforeEach((to, from, next) => {
  // to   ?????????????????????
  // from ?????????????????????????????????
  // next ???????????????, ????????????
  //      next() ??????  next('/login') ????????????
  if (to.path === '/login') {
    return next()
  }
  // ??????token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) {
    return next('/login')
  }
  next()
})

export default router
