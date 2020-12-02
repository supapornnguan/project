import Vue from 'vue'
import VueRouter from 'vue-router'
import SuiVue from 'semantic-ui-vue';
import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(SuiVue)
Vue.use(Vuelidate)

const routes =[
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
    path: '/sellerLogin',
    name: 'sellerLogin',
    component: () => import('../views/sellerLogin.vue')
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
    path: '/pickupSum',
    name: 'pickupSum',
    component: () => import('../views/pickupSum.vue')
  }, 
  {
    path: '/shippingType',
    name: 'shippingType',
    component: () => import('../views/shippingType.vue')
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
  {
    path: '/userlogin',
    name: 'userlogin',
    component: () => import('../views/userlogin.vue')
  },
  {
    path: '/sellerHome',
    name: 'sellerHome',
    component: () => import('../views/sellerHome.vue')
  },
  {
    path: '/myCart',
    name: 'myCart',
    component: () => import('../views/myCart.vue')
  },
  {
    path: '/sellerCenter',
    name: 'sellerCenter',
    component: () => import('../views/sellerCenter.vue')
  },
  {
    path: '/confirmShipping',
    name: 'confirmShipping',
    component: () => import('../views/confirmShipping.vue')
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('../views/error.vue')
  },
  {
    path: '/myAccountCustomer',
    name: 'myAccountCustomer',
    component: () => import('../views/myAccountCustomer.vue'),
    meta : {requireAuth : true}
  },
  {
    path: '/review',
    name: 'review',
    component: () => import('../views/review.vue')
  }
]
// import {auth} from "../firebase"

// router.beforeEach((to, from, next) => {
//   let currentUser = auth.currentUser
//   let requireAuth = to.matched.some(record => record.meta.requireAuth)
//   if(requireAuth && ! currentUser){
//     next('userlogin')
//   }else if (!requireAuth && currentUser){
//     next('regisUser')
//   }else{
//     next()
//   }
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
