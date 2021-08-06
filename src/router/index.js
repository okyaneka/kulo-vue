import Vue from "vue";
import VueRouter from "vue-router";
import views from "../views";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/login",
    component: views("auth/layout"),
    children: [
      { path: "/login", name: "login", component: views("auth/login"), meta: {} },
      { path: "/register", name: "register", component: views("auth/register"), meta: {} },
      {
        path: "/forget-password",
        name: "forget-password",
        component: views("auth/forget-password"),
        meta: {},
      },
    ],
  },
  { path: "/not", component: views("home") },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((from, to, next) => {
  return next();
});

export default router;
