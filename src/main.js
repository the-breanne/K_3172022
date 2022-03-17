import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'

import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCwY4qIRkW_3-8p6Q_-by5ETiYKfOTJACk",
  authDomain: "kudosproject-668dc.firebaseapp.com",
  projectId: "kudosproject-668dc",
  storageBucket: "kudosproject-668dc.appspot.com",
  messagingSenderId: "23453393552",
  appId: "1:23453393552:web:0f0624b5eafa6d4953ae15"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");