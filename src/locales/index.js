import VueI18n from "vue-i18n";
import Vue from "vue";
import en from "./en";
import id from "./id";

const messages = { en, id };
Vue.use(VueI18n);

export default new VueI18n({ messages, silentTranslationWarn: true });
