import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(SuiVue)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/verifySlip',
    name: 'verifySlip',
    component: () => import('../views/verifySlip.vue')
  },
  {
    path: '/verifyStore',
    name: 'verifyStore',
    component: () => import('../views/verifyStore.vue')
  },
  {
    path: '/sellerManageHome',
    name: 'sellerManageHome',
    component: () => import('../views/sellerManageHome.vue')
  },
  {
    path: '/userManageHome',
    name: 'userManageHome',
    component: () => import('../views/userManageHome.vue')
  },
  {
    path: '/storeManageHome',
    name: 'storeManageHome',
    component: () => import('../views/storeManageHome.vue')
  },
  {
    path: '/detailVerifySlip',
    name: 'detailVerifySlip',
    component: () => import('../views/detailVerifySlip.vue')
  },
  {
    path: '/detailStorePickup',
    name: 'detailStorePickup',
    component: () => import('../views/detailStorePickup.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router