import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import seller from './modules/seller'
import pickup from "./modules/pickup"
import shipping from "./modules/shipping"
import typeProduct from "./modules/typeProduct"
import cart from "./modules/cart"
import * as actions from './actions';
import message from './modules/message';
import checkPage from "./modules/checkPage"
import storePickup from "./modules/storePickup"

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    user,
    seller,
    pickup,
    shipping,
    typeProduct,
    cart,
    message,
    checkPage,
    storePickup
  }
})