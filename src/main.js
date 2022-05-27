import Vue from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './locales';
import store from './store';
import vuetify from './plugins/vuetify-plugin';

import './styles/styles.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
