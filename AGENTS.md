# Gift Shop Vue - AI Agent 協作指南

> **專案類型**: E-Commerce 電商平台 (前端)
> **技術棧**: Vue 3 + TypeScript + Vite + Pinia + TailwindCSS
> **後端 API**: https://gift-shop-backend-api.onrender.com > **部署平台**: Render (https://gift-shop-vue.onrender.com)

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
baseURL: import.meta.env.VITE_API_BASE_URL;
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
  const userData = ref(null); // 使用者資料
  const userId = ref(null); // 使用者 ID
  const userPoint = ref(null); // 使用者點數

  // 方法
  async function onLogin(data); // 登入
  async function onRegister(data); // 註冊
  async function getPoint(userId); // 查詢點數
});
```

**儲存機制**:

- Token 存於 `Cookies` (3 天過期, Secure + SameSite)
- 使用者資料存於 `localStorage` (key: `userInfo`)
- 點數存於 `localStorage` (key: `userPoint`)

### Products Store (`store/Products.ts`)

```typescript
export const useProductStore = defineStore("alerts", () => {
  const products = ref(null); // 商品列表

  async function fetchProducts(); // 取得商品
});
```

### Cart Composable (`composables/useCart.ts`)

```typescript
export const useCart = () => {
  const cartList = ref([]); // 購物車列表

  function addCart(item); // 加入購物車
  function addQuantity(item); // 增加數量
  function deleteQuantity(item); // 減少數量
  function clearCart(); // 清空購物車
};
```

**購物車邏輯**:

- 重複商品自動合併 (quantity++)
- 庫存檢查 (quantity <= stock)
- 數量為 1 時減少 = 移除商品

---

## 🎨 UI 設計規範

### 當前設計風格

**扁平化設計 (Flat Design) + 精品電商風格** - 2024/11/15 更新

#### 設計原則

1. **扁平化為主**: 移除 `shadow-*` 類別 (除特殊元件如浮動按鈕)
2. **純色區塊**: 使用 `bg-*` + `border-*` 分隔
3. **簡化動畫**: 僅保留 `transition-colors` 色彩變化
4. **清晰層次**: 用色彩對比取代深度效果
5. **精品質感**: 使用深藍灰 + 金色點綴,營造高級感

---

### 色彩系統 (精品電商配色)

#### **主色調 - 深藍灰 Slate**

取代原本的黑灰色系,更柔和、更有質感

```css
/* 深色區塊 */
bg-slate-800        /* 深色背景 (Footer, 重要卡片) */
bg-slate-700        /* 深色 Hover 狀態 */
text-slate-900      /* 主標題 */
text-slate-800      /* 次標題 */
text-slate-700      /* 內文 */
text-slate-600      /* 次要文字 */
text-slate-500      /* 輔助文字 */
text-slate-400      /* 提示文字 */
text-slate-300      /* 淺色文字 (深色背景用) */

/* 淺色區塊 */
bg-slate-50         /* 淺色背景 (表單、次要區塊) */
bg-slate-100        /* 次要淺色背景 */
bg-slate-200        /* 更深的淺色背景 */

/* 邊框 */
border-slate-200    /* 預設邊框 */
border-slate-300    /* 表單邊框 */
border-slate-700    /* 深色背景的分隔線 */
```

#### **強調色 - 金色 Amber**

用於主要按鈕、行動呼籲、重要資訊標記

```css
/* 主要按鈕 */
bg-amber-600        /* 主要按鈕背景 */
bg-amber-500        /* 按鈕 Hover 狀態 */
text-amber-600      /* 金色文字 */
text-amber-700      /* 深金色文字 */
text-amber-400      /* 淺金色 (Logo, Icon 點綴) */

/* 淺色背景 */
bg-amber-50         /* 淺金色背景 (Hover 效果) */
bg-amber-100        /* 次要淺金色背景 */

/* 邊框 */
border-amber-400    /* 金色邊框 (Hover) */
border-amber-500    /* 深金色邊框 (Focus) */
```

#### **輔助色 - 翠綠 Emerald**

用於成功狀態、完成標記

```css
bg-emerald-500      /* 成功/完成狀態 */
bg-emerald-100      /* 淺綠色背景 */
text-emerald-700    /* 綠色文字 */
```

#### **功能色**

```css
/* 錯誤/警告 */
text-red-600        /* 錯誤提示文字 */
bg-red-50           /* 錯誤背景 */

/* 資訊 */
bg-blue-50          /* 資訊背景 */
text-blue-600       /* 資訊文字 */
```

---

### 元件樣式規範

#### **按鈕 (Button)**

**主要按鈕 (Primary) - 金色**

```vue
<button
  class="px-5 py-2 bg-amber-600 text-white text-sm font-medium rounded hover:bg-amber-500 transition-colors"
>
  確認
</button>
```

**次要按鈕 (Secondary) - 淺灰**

```vue
<button
  class="px-5 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded hover:bg-amber-50 hover:text-amber-700 transition-colors"
>
  取消
</button>
```

**Disabled 狀態**

```vue
<button class="... disabled:opacity-50 disabled:cursor-not-allowed" disabled>
  已停用
</button>
```

**浮動按鈕 (Floating Action Button)**

```vue
<button
  class="w-16 h-16 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-500 transition-colors"
>
  <i class="fa-solid fa-cart-shopping text-2xl"></i>
</button>
```

---

#### **卡片 (Card)**

**基本卡片**

```vue
<div
  class="bg-white border border-slate-200 rounded-lg p-4 hover:border-amber-400 transition-colors"
>
  <!-- 內容 -->
</div>
```

**強調卡片 (深色背景)**

```vue
<div
  class="bg-gradient-to-br from-slate-700 to-slate-800 text-white rounded-lg p-4"
>
  <!-- 內容 -->
</div>
```

**商品卡片**

```vue
<div class="flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 transition-colors">
  <div class="w-full h-[220px] bg-slate-100">
    <img class="w-full h-full object-cover" src="..." alt="..." />
  </div>
  <div class="p-4 flex flex-col gap-2">
    <h3 class="text-sm font-medium text-slate-900">商品名稱</h3>
    <p class="text-lg font-semibold text-slate-900">NT$ 1,000</p>
    <button class="w-full py-2.5 bg-amber-600 text-white text-sm font-medium rounded hover:bg-amber-500 transition-colors">
      加入購物車
    </button>
  </div>
</div>
```

---

#### **表單元素 (Form)**

**輸入框 (Input)**

```vue
<input
  type="text"
  placeholder="請輸入..."
  class="w-full px-4 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
/>
```

**搜尋框**

```vue
<div class="relative w-full">
  <input
    type="search"
    placeholder="搜尋商品..."
    class="w-full py-2 pl-10 pr-4 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
  />
  <img class="w-5 h-5 absolute top-2.5 left-3 opacity-40" src="..." alt="搜尋" />
</div>
```

**下拉選單 (Select)**

```vue
<select
  class="w-full px-4 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-amber-500 transition-colors"
>
  <option value="">請選擇</option>
  <option value="1">選項 1</option>
</select>
```

**單選框 (Radio)**

```vue
<label class="flex items-center gap-2 cursor-pointer">
  <input
    type="radio"
    name="option"
    value="1"
    class="w-4 h-4 text-amber-600 focus:ring-amber-400"
  />
  <span class="text-sm text-slate-700">選項</span>
</label>
```

---

#### **狀態標籤 (Badge)**

**成功/完成**

```vue
<div class="px-4 py-1.5 bg-emerald-500 text-white text-sm font-medium rounded">
  已完成
</div>
```

**可用**

```vue
<div class="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded">
  可使用
</div>
```

**已過期**

```vue
<div class="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
  已過期
</div>
```

---

#### **導航連結 (Navigation)**

**Header 導航**

```vue
<router-link
  to="/"
  class="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors"
>
  首頁
</router-link>
```

**側邊選單 (未選中)**

```vue
<button
  class="w-full px-4 py-3 text-left text-sm font-medium bg-slate-50 text-slate-700 rounded hover:bg-amber-50 hover:text-amber-700 transition-colors"
>
  <i class="fa-solid fa-user mr-3"></i>
  我的帳戶
</button>
```

**側邊選單 (選中)**

```vue
<button
  class="w-full px-4 py-3 text-left text-sm font-medium bg-amber-600 text-white rounded transition-colors"
>
  <i class="fa-solid fa-user mr-3"></i>
  我的帳戶
</button>
```

---

#### **分頁控制 (Pagination)**

```vue
<div class="flex justify-center items-center gap-4">
  <button
    class="px-5 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded hover:bg-amber-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    :disabled="!hasPrevPage"
  >
    上一頁
  </button>

  <div class="px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded">
    1 / 10
  </div>

  <button
    class="px-5 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded hover:bg-amber-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    :disabled="!hasNextPage"
  >
    下一頁
  </button>
</div>
```

---

#### **狀態流程指示器 (Stepper)**

```vue
<div class="flex items-center justify-around">
  <!-- 已完成步驟 -->
  <div class="flex flex-col items-center gap-2">
    <div class="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center">
      <i class="fa-solid fa-check text-white text-xl"></i>
    </div>
    <p class="text-xs text-slate-600 font-medium">訂單已成立</p>
    <div class="text-xs text-slate-400">2024/11/15</div>
  </div>

  <!-- 連接線 -->
  <div class="flex-1 h-0.5 bg-emerald-500 mx-2"></div>

  <!-- 進行中步驟 -->
  <div class="flex flex-col items-center gap-2">
    <div class="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center animate-pulse">
      <i class="fa-solid fa-truck text-white text-xl"></i>
    </div>
    <p class="text-xs text-slate-600 font-medium">配送中</p>
  </div>

  <!-- 連接線 (未完成) -->
  <div class="flex-1 h-0.5 bg-slate-200 mx-2"></div>

  <!-- 未完成步驟 -->
  <div class="flex flex-col items-center gap-2 opacity-50">
    <div class="w-14 h-14 bg-slate-200 rounded-full flex items-center justify-center">
      <i class="fa-solid fa-check text-slate-400 text-xl"></i>
    </div>
    <p class="text-xs text-slate-400 font-medium">完成訂單</p>
  </div>
</div>
```

---

### 間距規範 (Spacing)

#### **內距 (Padding)**

```css
p-2   /* 8px  - 極小元件 */
p-3   /* 12px - 小按鈕 */
p-4   /* 16px - 標準卡片 */
p-5   /* 20px - 大卡片 */
p-6   /* 24px - 區塊容器 */
p-8   /* 32px - 大區塊 */
```

#### **外距 (Margin)**

```css
gap-2  /* 8px  - 緊密元素 */
gap-3  /* 12px - 標準間距 */
gap-4  /* 16px - 寬鬆間距 */
gap-6  /* 24px - 區塊間距 */
gap-8  /* 32px - 大區塊間距 */
```

---

### 字體規範 (Typography)

#### **字體大小**

```css
text-xs    /* 12px - 輔助文字、標籤 */
text-sm    /* 14px - 按鈕、表單、內文 */
text-base  /* 16px - 標準內文 */
text-lg    /* 18px - 小標題、價格 */
text-xl    /* 20px - 標題 */
text-2xl   /* 24px - 大標題 */
text-3xl   /* 30px - Logo */
text-4xl   /* 36px - Hero 標題 */
text-5xl   /* 48px - 超大標題 */
```

#### **字重**

```css
font-normal    /* 400 - 內文 */
font-medium    /* 500 - 按鈕、導航 */
font-semibold  /* 600 - 小標題 */
font-bold      /* 700 - 主標題、Logo */
```

---

### 圓角規範 (Border Radius)

```css
rounded       /* 4px  - 按鈕、輸入框 */
rounded-lg    /* 8px  - 卡片 */
rounded-full  /* 50%  - 圓形按鈕、頭像 */
```

---

### 響應式斷點 (Responsive Breakpoints)

```css
/* Mobile First 設計 */
默認          /* < 768px  - 手機版 */
md:          /* ≥ 768px  - 平板/桌面版 */
lg:          /* ≥ 1024px - 大螢幕 */
xl:          /* ≥ 1280px - 超大螢幕 */
```

---

### 動畫規範 (Animation)

#### **過渡效果**

```css
transition-colors    /* 色彩變化 (按鈕、連結) */
transition-all       /* 全屬性變化 (輸入框 focus) */
duration-200         /* 200ms - 快速 */
duration-300         /* 300ms - 標準 (預設) */
```

#### **禁止使用**

```css
❌ transition-transform  /* 避免縮放、移動動畫 */
❌ shadow-*             /* 避免陰影 (除浮動按鈮) */
❌ hover:scale-*        /* 避免 hover 縮放 */
```

---

### 特殊元件規範

#### **購物車浮動按鈕**

- 位置:`fixed bottom-6 right-6 z-50`
- 顏色:金色 `bg-amber-600`
- 陰影:允許使用 `shadow-lg`
- 尺寸:`w-16 h-16`

#### **Modal/彈窗**

- 使用 Flowbite Vue 的 `<fwb-modal>`
- Header 標題:`text-xl font-semibold text-slate-800`
- Body 背景:`bg-white`
- Footer 背景:`bg-slate-50 border-t border-slate-200`

#### **點數卡片**

- 允許使用漸層:`bg-gradient-to-br from-slate-700 to-slate-800`
- Icon 使用金色:`text-amber-400`
- 文字使用淺色:`text-slate-300`

---

### 開發檢查清單

新增元件時,請確認:

- [ ] 主色調使用 `slate` 系列 (不是 `gray`)
- [ ] 主要按鈕使用 `bg-amber-600`
- [ ] Hover 效果使用 `hover:bg-amber-50` 或 `hover:text-amber-600`
- [ ] 邊框使用 `border-slate-200`
- [ ] 無使用 `shadow-*` (除浮動按鈕)
- [ ] 動畫僅使用 `transition-colors`
- [ ] 文字顏色使用 `text-slate-*` 系列
- [ ] 成功狀態使用 `bg-emerald-500`
- [ ] 間距使用標準 spacing scale
- [ ] 響應式使用 `md:` 前綴

---

### 色彩對照表 (Migration Guide)

如果要從舊版灰色系統遷移到新版:

| 舊版 (Gray)       | 新版 (Slate)       | 用途           |
| ----------------- | ------------------ | -------------- |
| bg-gray-800       | bg-slate-800       | 深色背景       |
| bg-gray-700       | bg-slate-700       | 深色 Hover     |
| bg-gray-50        | bg-slate-50        | 淺色背景       |
| bg-gray-100       | bg-slate-100       | 次要淺色背景   |
| border-gray-200   | border-slate-200   | 預設邊框       |
| text-gray-900     | text-slate-900     | 主標題         |
| text-gray-700     | text-slate-700     | 內文           |
| hover:bg-gray-700 | hover:bg-amber-600 | 主要按鈕 Hover |
| hover:bg-gray-100 | hover:bg-amber-50  | 次要元素 Hover |
| bg-green-500      | bg-emerald-500     | 成功狀態       |

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
