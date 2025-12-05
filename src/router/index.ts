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
      path: "/MemberCenter",
      name: "MemberCenter",
      component: () => import("@/page/MemberCenterPage.vue"),
    },
  ],
});

export default router;
