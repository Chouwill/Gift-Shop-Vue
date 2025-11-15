import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    proxy: {
      "/api": {
        target: "https://gift-shop-backend-api.onrender.com",
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
