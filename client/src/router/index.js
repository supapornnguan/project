import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/homepage.vue')
  }
  ,
  {
    path: '/sellerRegis',
    name: 'sellerRegis',
    component: () => import('../views/sellerRegis.vue')
  },
  {
    path: '/userRegis',
    name: 'userRegis',
    component: () => import('../views/userRegis.vue')
  },
  {
    path: '/myAccountSeller',
    name: 'myAccountSeller',
    component: () => import('../views/myAccountSeller.vue')
  },
  {
    path: '/productAll',
    name: 'productAll',
    component: () => import('../views/productAll.vue')
  },
  {
    path: '/infoProduct',
    name: 'infoProduct',
    component: () => import('../views/infoProduct.vue')
  },
  {
    path: '/userlogin',
    name: 'userlogin',
    component: () => import('../views/userlogin.vue')
  },
  {
    path: '/summary',
    name: 'summary',
    component: () => import('../views/summary.vue')
  },
  {
    path: '/pickupType',
    name: 'pickupType',
    component: () => import('../views/pickupType.vue')
  },
  {
    path: '/shippingType',
    name: 'shippingType',
    component: () => import('../views/shippingType.vue')
  },
  {
    path: '/pickupSum',
    name: 'pickupSum',
    component: () => import('../views/pickupSum.vue')
  },
  {
    path: '/shipSum',
    name: 'shipSum',
    component: () => import('../views/shipSum.vue')
  },
  {
    path: '/uploadSlip',
    name: 'uploadSlip',
    component: () => import('../views/uploadSlip.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
