import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import {
  routes
} from './routes';
import store from './store/store';
var numeral = require('numeral');

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://etf-portfolio.firebaseio.com/';

Vue.filter('currency', (value) => {
  return numeral(value).format("$ 0,0[.]00")
})

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})