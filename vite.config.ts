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
  preview: {
    host: "0.0.0.0", // 允許外部連線
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173, // 使用 Render 的 PORT
    strictPort: true, // 如果 port 被占用，直接失敗（避免使用其他 port）
  },
});
