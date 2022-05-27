import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

import en from './en';

const messages = { en };

const i18n = new VueI18n({
  messages,
});

export default i18n;
