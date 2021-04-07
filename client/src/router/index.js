import Vue from 'vue'
import VueRouter from 'vue-router'
import SuiVue from 'semantic-ui-vue';
import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
// import {auth} from '../firebase'
// import store from "../store/index.js"
//import user from '../store/modules/user'
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import orderDetailSeller from "../components/orderDetailSeller.vue"

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(SuiVue)
Vue.use(Vuelidate)

const routes =[
  {
    path: '/',
    name: 'home',
    component: () => import('../views/homepage.vue'),

    // meta : {requireAuth : true}
  },
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
    path: '/productAll/:category',   
    name: 'productAll',
    component: () => import('../views/productAll.vue')
  },
  {
    path: '/infoProduct/:productId',
    name: 'infoProduct',
    component: () => import('../views/infoProduct.vue'),
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
    path: '/uploadSlip/:orderId',
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
    component: () => import('../views/myCart.vue'),
    // meta : {requireAuth : true}
  },
  {
    path: '/sellerCenter/:sellerid',
    name: 'sellerCenter',
    component: () => import('../views/sellerCenter.vue'),
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
    path: '/myAccountCustomer/:userid',
    name: 'myAccountCustomer',
    component: () => import('../views/myAccountCustomer.vue'),
 
    meta : {requireAuth : true}
  },
  {
    path: '/review',
    name: 'review',
    component: () => import('../views/review.vue')
  },
  {
    path: '/homeStore/:idStore',
    name : 'homeStore',
    component: () => import('../views/homeStore.vue'),
  },
  {
    path: '/homeStore/',
    name : 'homeStore1',
    component: () => import('../components/homeStore1.vue'),
  },
  {
    name : 'detaildeliStore',
    path: '/detaildeliStore/:idStoreDeli',
    component: () => import('../views/detaildeliStore.vue'),
  },
  {
    name : 'detailTrackStore',
    path: '/detailTrackStore/:idTrack',
    component: () => import('../views/detailTrackStore.vue'),
  },
  {
    path: '/atstore/:idStore',
    name : 'atstore',
    component: () => import('../views/atstoreStore.vue'),
  },
  {
    path: '/DetailOrderatstore/:idTrackAtstore',
    name : 'DetailOrderatstore',
    component: () => import('../views/DetailOrderatstore.vue'),
  },
  {
    path: '/DetailEachOrderatstore/:idOrderAtstore',
    name : 'DetailEachOrderatstore',
    component: () => import('../views/DetailEachOrderatstore.vue'),
  },
  {
    path: '/returnStore/:idStore',
    name : 'returnStore',
    component: () => import('../views/returnStore.vue'),
  },
  {
    path: '/detailOrderStore/:idOrder',
    name : 'detailOrderStore',
    component : () => import('../views/detailOrderStore.vue'),
  },
  {
    path: '/waitingVerify',
    name : 'waitingVerify',
    component : () => import('../views/waitingVerify.vue'),
  },
  {
    path : '/productAlltest',
    name : 'productAlltest',
    component : () => import('../views/productAlltest.vue'),
  },
  //admin
  {
    path : '/HomeAdmin',
    name : 'HomeAdmin',
    component : () => import('../views/HomeAdmin.vue'),
  },
  {
  path: '/verifySlip',
  name: 'verifySlip',
  component: () => import('../views/verifySlipAdmin.vue')
  },
  {
    path: '/detailVerifySlip/:idSlip',
    name: 'detailVerifySlip',
    component: () => import('../views/detailVerifySlip.vue')
  },
  {
  path: '/verifyStore',
  name: 'verifyStore',
  component: () => import('../views/verifyStoreAdmin.vue')
  },
  {
    path: '/sellerManageHome',
    name: 'sellerManageHome',
    component: () => import('../views/sellerManageHomeAdmin.vue')
  },
  {
    path: '/sellerManageInfo/:sellerId',
    name: 'sellerManageInfo',
    component: () => import('../views/sellerManageInfoAdmin.vue')
  },
  {
    path: '/userManageHome',
    name: 'userManageHome',
    component: () => import('../views/userManageHomeAdmin.vue')
  },
  {
    path: '/userManageInfo/:userId',
    name: 'userManageInfo',
    component: () => import('../views/userManageInfoAdmin.vue')
  },
  {
    path: '/storeManageHome',
    name: 'storeManageHome',
    component: () => import('../views/storeManageHomeAdmin.vue')
  },
  {
    path: '/storeManageInfo/:storeId',
    name: 'storeManageInfo',
    component: () => import('../views/storeManageInfoAdmin.vue')
  },
  // {
  //   path: '/homeStore',
  //   name : 'homeStore',
  //   component: () => import('../views/homeStore.vue'),
  // },
]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   // let currentUser = auth.currentUser
//   console.log(store.getters.users.loggedIn) 
//   let requireAuth = to.matched.some(record => record.meta.requireAuth)
//   if(requireAuth){
//     console.log('before ech requireAuth if....')
//     store.dispatch('checkUserStatus', store.getters.users.loggedIn)
//     .then((uid) => {
//       console.log(uid)
//       next('userlogin')

//     })
//     .catch((err) => {
//       console.log(err);
//     })

//     next('userlogin')
//   }else if (!requireAuth){
//     next('regisUser')
//   }else{
//     next()
//   }
// })

export default router
