import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {auth} from  "./firebase"

// import Vuelidate from 'vuelidate'
// Vue.use(Vuelidate)

auth.onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

auth.onAuthStateChanged(seller => {
  store.dispatch("fetchSeller", seller);
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')