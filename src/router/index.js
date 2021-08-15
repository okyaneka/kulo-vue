import Vue from "vue";
import VueRouter from "vue-router";
import views from "../views";
import store from "@/store";
import storage, { REDIRECT } from "../helper/storage";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: views("home"), name: "dashboard", meta: { auth: true } },
  {
    path: "/",
    name: "home",
    component: views("auth/layout"),
    children: [
      {
        path: "login",
        name: "login",
        component: views("auth/login"),
        meta: { guest: true },
      },
      {
        path: "register",
        name: "register",
        component: views("auth/register"),
        meta: { guest: true },
      },
      {
        path: "forget-password",
        name: "forget-password",
        component: views("auth/forget-password"),
        meta: { guest: true },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters["auth/isLoggedIn"];
  const guest = to.meta && to.meta.guest;
  const auth = to.meta && to.meta.auth;

  if (isLoggedIn && guest) {
    return next({ name: "dashboard" });
  }
  if (!isLoggedIn && auth) {
    storage.set(REDIRECT, to);
    return next({ name: "login" });
  }
  return next();
});

export default router;
