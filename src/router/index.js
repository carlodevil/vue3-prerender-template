import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Hello.vue";

const routes = [
  {
    path: "/",
    name: "Hello",
    component: Hello,
  },
  // {
  //   path: "/courses",
  //   name: "Courses",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Courses.vue"),
  // },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "NotFound",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/404.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
