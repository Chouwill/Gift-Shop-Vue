import axios from "axios";

// 開發環境可以使用相對路徑（會走 vite proxy），生產環境需要完整 URL
const baseURL = import.meta.env.VITE_API_BASE_URL || '';

if (!import.meta.env.DEV && !import.meta.env.VITE_API_BASE_URL) {
  console.warn('⚠️ VITE_API_BASE_URL 未設定，API 請求可能會失敗');
}

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;
