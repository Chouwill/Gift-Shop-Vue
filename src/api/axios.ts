import axios from "axios";

// 開發和生產環境都使用環境變數（因為後端在 Render）
const baseURL = import.meta.env.VITE_API_BASE_URL || "";

if (!baseURL) {
  console.warn("⚠️ VITE_API_BASE_URL 未設定！");
  console.warn("   開發環境：請建立 .env 檔案並設定 VITE_API_BASE_URL");
  console.warn("   生產環境：請在 Render Dashboard 設定環境變數");
}

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;
