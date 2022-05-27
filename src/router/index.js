import Vue from 'vue';
import VueRouter from 'vue-router';
import PublicRoute from './public-route';

Vue.use(VueRouter);

const routes = [
  ...PublicRoute,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
