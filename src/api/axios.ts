import axios from "axios";

// 開發環境使用相對路徑（會走 vite proxy），生產環境需要完整 URL
const baseURL = import.meta.env.DEV 
  ? ''  // 開發環境：空字串，使用相對路徑走 proxy
  : (import.meta.env.VITE_API_BASE_URL || '');  // 生產環境：使用環境變數

if (!import.meta.env.DEV && !import.meta.env.VITE_API_BASE_URL) {
  console.error('❌ VITE_API_BASE_URL 未設定！請在 Render Dashboard 設定環境變數。');
  console.error('   前往：Render Dashboard → Environment → 新增 VITE_API_BASE_URL');
}

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;
