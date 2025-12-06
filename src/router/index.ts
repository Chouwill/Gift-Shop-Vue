import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "IndexPage",
      component: () => import("@/page/IndexPage.vue"),
    },
    {
      path: "/ShoppingMall",
      name: "ShoppingMall",
      component: () => import("@/page/ShoppingMall.vue"),
    },
    {
      path: "/OrderCheckout",
      name: "OrderCheckout",
      component: () => import("@/page/OrderCheckout.vue"),
    },
    {
      path: "/AuthForm",
      name: "AuthForm",
      component: () => import("@/page/AuthForm.vue"),
    },
  ],
});

export default router;
