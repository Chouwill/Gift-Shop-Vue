import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true
      }
    }
  },
  preview: {
    host: "0.0.0.0",
    port: 10000,
    allowedHosts: [
      "gift-shop-vue.onrender.com",
      "localhost",
      "127.0.0.1"
    ]
  }
});
