import Vue from 'vue'
import Vuex from 'vuex'

import storePickup from "./modules/storePickup"
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    storePickup
  }

})
