import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("../page/Index.vue") },
  { path: "/shop", name: "Home", component: () => import("../page/ShoppingMall.vue") },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
