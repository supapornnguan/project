import Vue from 'vue'
import Vuex from 'vuex'
import verifySeller from "./modules/verifySeller"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    verifySeller
  }
})
