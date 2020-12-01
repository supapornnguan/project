import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import SuiVue from 'semantic-ui-vue';
import PortalVue from 'portal-vue';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Home from '../views/Home.vue'
import detailOrder from "../views/detailOrder(during).vue"
import detailTrackDuring from "../views/detailTrack(during).vue"
import orderAtStore from "../views/orderAtStore.vue"

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(SuiVue)
Vue.use(PortalVue)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detailOrder',
    name: 'detailOrder',
    component: detailOrder    
  }
  ,
  {
    path: '/detailTrackDuring',
    name: 'detailTrackDuring',
    component: detailTrackDuring
  }
  ,
  {
    path: '/orderAtStore',
    name: 'orderAtStore',
    component: orderAtStore
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
