import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("../page/Index.vue") },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../page/ShoppingMall.vue"),
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("../page/OrderInformation.vue"),
  },
  {
    path: "/authForm",
    name: "AuthForm",
    component: () => import("../page/AuthForm.vue"),
  },
  {
    path: "/memberCenter",
    name: "memberCenter",
    component: () => import("../page/MemberCenter.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
