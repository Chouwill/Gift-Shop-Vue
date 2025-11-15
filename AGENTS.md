# Gift Shop Vue - AI Agent 協作指南

> **專案類型**: E-Commerce 電商平台 (前端)
> **技術棧**: Vue 3 + TypeScript + Vite + Pinia + TailwindCSS
> **後端 API**: https://gift-shop-backend-api.onrender.com
> **部署平台**: Render (https://gift-shop-vue.onrender.com)

---

## 📋 專案概述

這是一個現代化的禮品電商平台前端專案,採用 Vue 3 Composition API + TypeScript 開發,提供完整的購物流程:商品瀏覽、購物車管理、會員系統、訂單管理等功能。

### 核心功能模組
- ✅ **首頁展示**: Hero Banner、分類導航、精選商品輪播
- ✅ **商品商城**: 商品列表、篩選器、商品詳情
- ✅ **購物車系統**: 加入購物車、數量調整、庫存檢查
- ✅ **會員系統**: 註冊/登入、會員中心、點數查詢
- ✅ **訂單管理**: 訂單總覽、訂單狀態追蹤
- 🚧 **優惠券系統**: (開發中)

---

## 🏗️ 專案架構

```
Gift-Shop-vue/
├── src/
│   ├── api/                    # API 層
│   │   ├── axios.ts           # Axios 實例配置
│   │   └── method.ts          # API 方法封裝
│   │
│   ├── store/                  # Pinia 狀態管理
│   │   ├── Auth.ts            # 會員認證 Store
│   │   ├── Products.ts        # 商品資料 Store
│   │   └── Products-opt.ts    # 商品操作 Store
│   │
│   ├── composables/            # 可組合函式
│   │   └── useCart.ts         # 購物車邏輯
│   │
│   ├── components/             # 元件庫
│   │   ├── AuthForm/          # 登入/註冊表單
│   │   ├── IndexPage/         # 首頁元件群
│   │   ├── ShoppingMall/      # 商城元件群
│   │   ├── ShoppingCart/      # 購物車元件群
│   │   ├── MemberCenter/      # 會員中心元件群
│   │   ├── Header.vue         # 全域 Header
│   │   └── Footer.vue         # 全域 Footer
│   │
│   ├── page/                   # 頁面層
│   │   ├── Index.vue          # 首頁
│   │   ├── ShoppingMall.vue   # 商城頁
│   │   ├── OrderInformation.vue # 訂單資訊頁
│   │   ├── AuthForm.vue       # 登入/註冊頁
│   │   └── MemberCenter.vue   # 會員中心頁
│   │
│   ├── router/                 # 路由配置
│   │   └── index.ts
│   │
│   ├── layouts/                # 佈局元件
│   │   └── Layout.vue
│   │
│   ├── util/                   # 工具函式
│   │   └── price.ts           # 價格格式化
│   │
│   └── assets/                 # 靜態資源
│       └── img/               # 圖片資源
│
├── public/                     # 公開資源
│   └── _headers               # Netlify/Render 部署設定
│
└── 配置檔案
    ├── vite.config.ts         # Vite 配置 (含 Proxy)
    ├── tsconfig.json          # TypeScript 配置
    └── package.json           # 依賴管理
```

---

## 🛠️ 技術棧詳解

### 核心框架
- **Vue 3.5.17**: 採用 Composition API + `<script setup>` 語法
- **TypeScript 5.8.3**: 型別安全開發
- **Vite 7.0.4**: 快速開發伺服器 + HMR

### 狀態管理 & 路由
- **Pinia 3.0.3**: 輕量級狀態管理 (取代 Vuex)
- **Vue Router 4.5.1**: SPA 路由管理

### UI & 樣式
- **TailwindCSS 4.1.12**: Utility-first CSS 框架
- **Flowbite Vue 0.2.1**: UI 元件庫 (基於 Tailwind)
- **Font Awesome**: Icon 圖示系統

### 網路請求 & 工具
- **Axios 1.11.0**: HTTP 請求庫
- **js-cookie 3.0.5**: Cookie 管理
- **Zod 4.1.12**: Schema 驗證 (TypeScript-first)

### 開發工具
- **vue-tsc**: Vue 的 TypeScript 編譯器
- **sass-embedded**: SCSS 預處理器

---

## 📡 API 整合

### API Base URL
```typescript
// src/api/axios.ts
baseURL: import.meta.env.VITE_API_BASE_URL
```

### Vite Proxy 配置
```typescript
// vite.config.ts
proxy: {
  "/api": {
    target: "https://gift-shop-backend-api.onrender.com",
    changeOrigin: true
  }
}
```

### 現有 API 端點

#### 商品相關
- `GET /api/products/all` - 取得所有商品
- `GET /api/coupons` - 取得優惠券列表

#### 會員相關
- `POST /login` - 會員登入
- `POST /register` - 會員註冊
- `GET /api/demo-points/:userId` - 查詢會員點數

---

## 🗂️ 狀態管理架構

### Auth Store (`store/Auth.ts`)
```typescript
export const useUserStore = defineStore("alerts", () => {
  const userData = ref(null);      // 使用者資料
  const userId = ref(null);        // 使用者 ID
  const userPoint = ref(null);     // 使用者點數

  // 方法
  async function onLogin(data)     // 登入
  async function onRegister(data)  // 註冊
  async function getPoint(userId)  // 查詢點數
});
```

**儲存機制**:
- Token 存於 `Cookies` (3天過期, Secure + SameSite)
- 使用者資料存於 `localStorage` (key: `userInfo`)
- 點數存於 `localStorage` (key: `userPoint`)

### Products Store (`store/Products.ts`)
```typescript
export const useProductStore = defineStore("alerts", () => {
  const products = ref(null);      // 商品列表

  async function fetchProducts()   // 取得商品
});
```

### Cart Composable (`composables/useCart.ts`)
```typescript
export const useCart = () => {
  const cartList = ref([]);        // 購物車列表

  function addCart(item)           // 加入購物車
  function addQuantity(item)       // 增加數量
  function deleteQuantity(item)    // 減少數量
  function clearCart()             // 清空購物車
};
```

**購物車邏輯**:
- 重複商品自動合併 (quantity++)
- 庫存檢查 (quantity <= stock)
- 數量為 1 時減少 = 移除商品

---

## 🎨 UI 設計規範

### 當前設計風格
**扁平化設計 (Flat Design)** - 2024/11/15 更新

#### 設計原則
1. **無陰影**: 移除 `shadow-*` 類別
2. **純色區塊**: 使用 `bg-*` + `border-*` 分隔
3. **簡化動畫**: 僅保留 `transition-colors` 色彩變化
4. **清晰層次**: 用色彩對比取代深度效果

#### 色彩系統
```css
/* 主色調 */
- 深色: bg-gray-800 (選中狀態、重要資訊)
- 淺色: bg-gray-50 / bg-gray-100 (未選中、次要區塊)
- 邊框: border-gray-200 / border-gray-300 (分隔線)

/* 功能色 */
- 成功/完成: bg-green-500 (訂單狀態、確認按鈕)
- 警示: text-yellow-400 (點數、特殊標記)
- 文字: text-gray-900 (主文) / text-gray-600 (次文) / text-gray-400 (輔助)
```

#### 元件樣式範例

**按鈕 (扁平化)**
```vue
<!-- 主要按鈕 -->
<button class="px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">

<!-- 次要按鈕 -->
<button class="px-5 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">

<!-- Disabled 狀態 -->
<button class="... disabled:opacity-50 disabled:cursor-not-allowed">
```

**卡片 (扁平化)**
```vue
<div class="bg-white border border-gray-200 rounded-lg hover:border-gray-300">
```

**狀態標籤**
```vue
<div class="px-4 py-1.5 bg-green-500 text-white text-sm rounded">已完成</div>
```

---

## 🧩 核心元件說明

### 會員中心模組 (`components/MemberCenter/`)

#### `MemberMenu.vue` - 會員選單
- **功能**: 側邊選單 + 點數顯示
- **狀態**: activeMenu (profile/orders/coupons)
- **樣式**: 扁平化深淺色切換

#### `UserOrder.vue` - 訂單總覽
- **功能**: 訂單列表 + 狀態流程 + 分頁
- **資料來源**: `localStorage.getItem("userInfo").orders`
- **分頁**: 每頁 3 筆 (pageItems = 3)
- **狀態流程**: 4 階段 (成立 → 付款 → 出貨 → 完成)

#### `UserProfile.vue` - 個人資料
- **功能**: 會員資料編輯

#### `UseCoupons.vue` - 優惠券管理
- **狀態**: 開發中

### 購物車模組 (`components/ShoppingCart/`)

#### `Cart.vue` - 購物車清單
- **功能**: 商品列表、數量調整、小計計算
- **邏輯**: 使用 `useCart()` composable

#### `Dialog.vue` - 購物車彈窗
- **功能**: 快速結帳提示

### 商城模組 (`components/ShoppingMall/`)

#### `ProductList.vue` - 商品列表
- **功能**: 商品卡片展示、加入購物車

#### `ShopFilter.vue` - 商品篩選器
- **功能**: 分類、價格、排序篩選

---

## 🔄 資料流架構

```
┌─────────────┐
│   API 層    │ (axios.ts + method.ts)
└──────┬──────┘
       │
       ↓
┌─────────────┐
│  Store 層   │ (Pinia: Auth, Products)
└──────┬──────┘
       │
       ↓
┌─────────────┐
│ Composable  │ (useCart)
└──────┬──────┘
       │
       ↓
┌─────────────┐
│  Component  │ (UI 元件)
└─────────────┘
```

### 典型流程範例

**使用者登入流程**
```
1. LoginForm.vue 提交表單
   ↓
2. useUserStore().onLogin(data)
   ↓
3. API: POST /login
   ↓
4. 儲存 Token (Cookies) + userData (localStorage)
   ↓
5. Router.push('/memberCenter')
```

**購物車流程**
```
1. ProductList.vue 點擊「加入購物車」
   ↓
2. useCart().addCart(item)
   ↓
3. 檢查重複 → 合併/新增
   ↓
4. 檢查庫存 (quantity <= stock)
   ↓
5. 更新 cartList.value
```

---

## 🚀 開發指令

```bash
# 安裝依賴
npm install

# 本地開發 (localhost:5173)
npm run dev

# 區網測試 (允許其他裝置存取)
npm run dev -- --host

# TypeScript 編譯 + 打包
npm run build

# 預覽打包結果 (localhost:10000)
npm run preview

# 生產環境預覽 (Render 部署用)
npm run start
```

---

## 📝 開發規範

### TypeScript 使用規範
1. **優先使用 `ref` + `computed`** (Composition API)
2. **API 回傳型別標註**: `data: any` → 建議改用 Zod schema
3. **避免 `null` 初始值**: 改用 `undefined` 或明確型別

### Vue 元件規範
1. **使用 `<script setup>`** 語法
2. **Props 定義**: 使用 `defineProps<T>()`
3. **Emits 定義**: 使用 `defineEmits<T>()`
4. **命名規範**:
   - 元件檔案: PascalCase (e.g. `UserOrder.vue`)
   - 資料夾: PascalCase (e.g. `MemberCenter/`)
   - composables: camelCase + `use` 前綴 (e.g. `useCart.ts`)

### 樣式規範
1. **優先使用 TailwindCSS Utility**
2. **避免 `!important`** (除非覆蓋第三方庫)
3. **響應式設計**: 使用 `md:` 前綴 (mobile-first)
4. **扁平化原則**: 無 shadow、純色、簡化動畫

### Git Commit 規範
```
feat: 新功能
fix: 修復 Bug
style: UI 樣式調整
refactor: 重構
docs: 文件更新
chore: 雜項 (依賴更新、設定調整)
```

---

## 🐛 已知問題 & 待優化

### 待修復
- [ ] `useUserStore` 和 `useAuthStore` 命名不一致 (需統一)
- [ ] `MemberMenu.vue` 缺少 `userStore` 引入 (已在 11/15 修復)
- [ ] `localStorage` 無錯誤處理 (JSON.parse 可能失敗)
- [ ] API 錯誤處理不完整 (僅 console.log)

### 待優化
- [ ] TypeScript 型別定義不完整 (`any` 過多)
- [ ] 購物車狀態未持久化 (重新整理會遺失)
- [ ] 訂單資料應從 API 取得 (目前從 localStorage)
- [ ] 響應式設計不完整 (手機版 UI 需優化)
- [ ] 無 Loading 狀態顯示
- [ ] 無錯誤邊界處理 (Error Boundary)

### 效能優化
- [ ] 商品列表需要虛擬滾動 (大量資料)
- [ ] 圖片需要 lazy loading
- [ ] API 請求需要防抖/節流
- [ ] 考慮使用 `Suspense` 處理非同步元件

---

## 🔐 環境變數

```bash
# .env.local (需自行建立)
VITE_API_BASE_URL=https://gift-shop-backend-api.onrender.com
```

---

## 📦 部署資訊

### Render 部署設定
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- **Node Version**: 20.19.0 (指定於 package.json)
- **Port**: 10000

### 部署注意事項
1. 確保 `_headers` 檔案存在 (CORS 設定)
2. 確認 `vite.config.ts` 的 `preview.allowedHosts` 包含部署網域
3. API Proxy 僅在開發環境生效,生產環境需直接呼叫完整 URL

---

## 🤖 AI Agent 協作建議

### 當你需要修改程式碼時
1. **先理解資料流**: 從 API → Store → Component 追蹤
2. **檢查相依性**: 修改 Store 前確認有哪些元件使用
3. **保持一致性**: 遵循現有命名規範與架構
4. **扁平化優先**: UI 修改遵循扁平化設計原則

### 當你需要新增功能時
1. **確認資料來源**: API 是否已提供?需要新增端點?
2. **選擇狀態管理**: 全域用 Pinia,區域用 composable
3. **元件拆分**: 單一元件不超過 200 行,複雜邏輯抽成 composable
4. **型別安全**: 使用 TypeScript 定義介面

### 當你遇到問題時
1. **檢查 Console**: 大量 `console.log` 可協助 debug
2. **檢查 localStorage**: 會員資料、訂單資料存於此
3. **檢查 Cookies**: Token 存於此 (需用開發者工具查看)
4. **檢查 Network**: API 呼叫是否成功

---

## 📚 參考資源

- [Vue 3 官方文件](https://vuejs.org/)
- [Pinia 官方文件](https://pinia.vuejs.org/)
- [TailwindCSS 官方文件](https://tailwindcss.com/)
- [Vite 官方文件](https://vitejs.dev/)
- [TypeScript 官方文件](https://www.typescriptlang.org/)

---

## 📞 聯絡資訊

**專案維護者**: Chouwill
**GitHub**: https://github.com/Chouwill/Gift-Shop-Vue
**分支**: `feat/member-center` (當前開發分支)

---

**最後更新**: 2024-11-15
**文件版本**: v1.0.0

