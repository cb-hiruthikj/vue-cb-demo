import Vue from 'vue';
import App from './App.vue';

import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
  data: {
    email: "",
    roles: []
  },
}).$mount('#app');

import titleMixin from './mixins/titleMixin.js';
Vue.mixin(titleMixin)
