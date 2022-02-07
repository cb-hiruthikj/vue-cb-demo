import Vue from 'vue';
import App from './App.vue';

import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
  data: {
    email: "",
    selectedRoles: [
      {
        id: 1,
        isChecked: false
      },
      {
        id: 2,
        isChecked: false
      },
      {
        id: 3,
        isChecked: false
      },
    ],
  },
}).$mount('#app');

import titleMixin from './mixins/titleMixin.js';
Vue.mixin(titleMixin)
