import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import seller from './modules/seller'
import pickup from "./modules/pickup"
import shipping from "./modules/shipping"
import orderPickup from "./modules/order_pickup(seller)"
import typeProduct from "./modules/typeProduct"
import orderPickupUser from "./modules/order_pickup(user)"
import cart from "./modules/cart"
import * as actions from './actions';
import message from './modules/message';
Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    user,
    seller,
    pickup,
    shipping,
    orderPickup,
    typeProduct,
    orderPickupUser,
    cart,
    message
  }
})