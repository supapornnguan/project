import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import firebase from "firebase/app";


// Vue.config.productionTip = false
// var firebaseConfig = {
//   apiKey: "AIzaSyAbCAcighGGp5vconFgpXYBzHwhf6HRwMM",
//   authDomain: "shopaholic-2385d.firebaseapp.com",
//   databaseURL: "https://shopaholic-2385d.firebaseio.com",
//   projectId: "shopaholic-2385d",
//   storageBucket: "shopaholic-2385d.appspot.com",
//   messagingSenderId: "977902468780",
//   appId: "1:977902468780:web:4a349e5ed7a21481dfe909",
//   measurementId: "G-EKWW1CJT1N"
// };
// firebase.initializeApp(firebaseConfig);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
