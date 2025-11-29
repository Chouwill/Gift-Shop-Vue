import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // ⚠️ 請修改為你的 API server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    host: "0.0.0.0", // 允許外部連線
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173, // 使用 Render 的 PORT
    strictPort: true, // 如果 port 被占用，直接失敗（避免使用其他 port）
    allowedHosts: [
      "gift-shop-vue-new.onrender.com",
      ".onrender.com", // 允許所有 onrender.com 的子域名
    ],
  },
});
