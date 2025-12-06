# Pinia 持久化筆記

## 📚 相關連結

- **Pinia 官方文件**: https://pinia.vuejs.org/
- **pinia-plugin-persistedstate 官方文件**: https://prazdevs.github.io/pinia-plugin-persistedstate/
- **pinia-plugin-persistedstate GitHub**: https://github.com/prazdevs/pinia-plugin-persistedstate

## 🎯 什麼是 Pinia 持久化？

Pinia 持久化可以將 store 的狀態自動保存到瀏覽器的 **localStorage** 或 **sessionStorage**，當頁面重新載入時，會自動還原之前的狀態。

### 為什麼需要持久化？

- ✅ 解決路由切換時狀態消失的問題
- ✅ 解決頁面重新整理後資料遺失的問題
- ✅ 提供更好的使用者體驗（購物車、使用者偏好設定等）

## 📦 安裝

```bash
npm install pinia-plugin-persistedstate
```

## ⚙️ 設定步驟

### 步驟 1：在 `main.ts` 中設定 Plugin

```javascript
import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";
import "./style.css";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); // ← 加入 plugin

app.use(pinia); // ← 使用已設定 plugin 的 pinia 實例
app.use(router);

app.mount("#app");
```

**⚠️ 注意**：一定要使用同一個 `pinia` 實例，不要重複呼叫 `createPinia()`

### 步驟 2：在 Store 中加入 `persist` 設定

#### Setup Store 寫法（推薦）

```javascript
import { ref } from "vue";
import { defineStore } from "pinia";

export const useProductStore = defineStore(
  "product",
  () => {
    const cartLists = ref([]);

    function addCart(item) {
      // ... 你的邏輯
    }

    return {
      cartLists,
      addCart,
    };
  },
  {
    // ← 第三個參數：選項物件
    persist: {
      paths: ["cartLists"], // 只持久化 cartLists
    },
  }
);
```

#### Options Store 寫法

```javascript
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    cartLists: [],
  }),
  actions: {
    addCart(item) {
      // ... 你的邏輯
    },
  },
  persist: {
    paths: ["cartLists"],
  },
});
```

## 🔧 常用設定選項

### 1. `paths` - 指定要持久化的欄位

```javascript
persist: {
  paths: ["cartLists", "userInfo"]; // 只持久化指定的欄位
}
```

如果不設定 `paths`，預設會持久化整個 state：

```javascript
persist: true; // 持久化整個 state
```

#### ⚠️ 為什麼要用 `paths` 而不是 `persist: true`？

**`persist: true` 的問題**：

- 會嘗試持久化 store 中**所有** return 的資料
- 包括 functions、computed、不需要持久化的 state
- 可能造成序列化錯誤或儲存不必要的資料

**`persist: { paths: [...] }` 的優點**：

- ✅ 只持久化**真正需要**的資料
- ✅ 避免持久化 functions（會造成錯誤）
- ✅ 避免持久化應該每次重新 fetch 的資料（如 `products`）
- ✅ 更精確、更安全、更符合實際需求

**實際範例對比**：

```javascript
// ❌ 不推薦：persist: true
export const useProductStore = defineStore("product", () => {
  const products = ref(null);      // 不需要持久化（每次要重新 fetch）
  const cartLists = ref([]);       // 需要持久化

  function addCart(item) { ... }   // 不需要持久化（這是 function）

  return {
    products,      // ← 會被持久化（但不需要）
    cartLists,    // ← 會被持久化（需要）
    addCart,      // ← 會被持久化（但這是 function，會出問題）
  };
}, {
  persist: true  // ← 會嘗試保存所有東西
});

// ✅ 推薦：persist: { paths: [...] }
export const useProductStore = defineStore("product", () => {
  const products = ref(null);      // 不需要持久化
  const cartLists = ref([]);       // 需要持久化

  function addCart(item) { ... }   // 不需要持久化

  return {
    products,      // ← 不會被持久化（正確）
    cartLists,    // ← 會被持久化（正確）
    addCart,      // ← 不會被持久化（正確）
  };
}, {
  persist: {
    paths: ['cartLists']  // ← 只持久化真正需要的資料
  }
});
```

### 2. `storage` - 指定儲存位置

```javascript
persist: {
  storage: sessionStorage,  // 預設是 localStorage
  paths: ['cartLists']
}
```

### 3. `key` - 自訂儲存的 key 名稱

```javascript
persist: {
  key: 'my-cart',  // 預設是 store 的 name
  paths: ['cartLists']
}
```

### 4. 完整設定範例

```javascript
persist: {
  key: 'shopping-cart',
  storage: localStorage,
  paths: ['cartLists', 'userPreferences'],
  beforeRestore: (ctx) => {
    console.log('準備還原狀態', ctx);
  },
  afterRestore: (ctx) => {
    console.log('狀態還原完成', ctx);
  }
}
```

## 💡 實際應用範例

### 購物車持久化

```javascript
// stores/useCart.ts
import { ref } from "vue";
import { defineStore } from "pinia";

export const useProductStore = defineStore(
  "product",
  () => {
    const cartLists = ref([]);

    function addCart(item) {
      const findRepeat = cartLists.value.find((findItem) => {
        return findItem.id === item.id;
      });

      if (findRepeat) {
        findRepeat.quantity++;
      } else {
        cartLists.value = [...cartLists.value, { ...item, quantity: 1 }];
      }
    }

    function reduceQuantity(item) {
      if (item.quantity <= 1) {
        cartLists.value = cartLists.value.filter(
          (filterItem) => filterItem.id !== item.id
        );
      } else {
        item.quantity--;
      }
    }

    function addQuantity(item) {
      item.quantity++;
    }

    return {
      cartLists,
      addCart,
      reduceQuantity,
      addQuantity,
    };
  },
  {
    persist: {
      paths: ["cartLists"], // 只持久化購物車清單
    },
  }
);
```

## 🤔 為什麼官方文件寫法不一樣？

### Setup Store vs Options Store

**官方文件主要展示 Options Store**（因為範例較簡單）：

```javascript
// Options Store（官方文件主要範例）
export const useStore = defineStore('store', {
  state: () => ({ ... }),
  actions: { ... },
  persist: true  // ← 直接寫在 store 定義物件裡
})
```

**但我們使用的是 Setup Store**（組合式 API）：

```javascript
// Setup Store（我們使用的寫法）
export const useStore = defineStore('store', () => {
  // setup function
  return { ... }
}, {
  persist: { ... }  // ← 必須寫在第三個參數（選項物件）
})
```

### 為什麼不一樣？

- **Options Store**：`persist` 直接寫在 store 定義物件中
- **Setup Store**：`persist` 必須寫在 `defineStore` 的**第三個參數**（選項物件）

兩種寫法都是正確的，只是語法不同。官方文件主要展示 Options Store，所以看起來不一樣，但功能完全相同。

### 相關文件位置

- **Pinia 官方文件 - Setup Stores**: https://pinia.vuejs.org/core-concepts/#setup-stores
- **pinia-plugin-persistedstate 配置說明**: https://prazdevs.github.io/pinia-plugin-persistedstate/guide/config.html

### ✅ 網路上也有相同寫法

根據搜尋結果，網路上確實有相同的寫法說明：

**Setup Store 的正確寫法**（第三個參數）：

```javascript
import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore(
  "store",
  () => {
    const someState = ref("hello pinia");
    return { someState };
  },
  {
    persist: {
      paths: ["someState"], // ← 第三個參數
    },
  }
);
```

**具體來源 URL**：

1. **pinia-plugin-persistedstate 官方文件 - Configuration**
   - https://prazdevs.github.io/pinia-plugin-persistedstate/guide/config.html
   - 官方文件確認 Setup Store 的 `persist` 必須放在第三個參數

2. **pinia-plugin-persistedstate 官方文件 - Advanced Usage**
   - https://prazdevs.github.io/pinia-plugin-persistedstate/guide/advanced.html
   - 提供更進階的配置範例

3. **pinia-plugin-persistedstate GitHub Repository**
   - https://github.com/prazdevs/pinia-plugin-persistedstate
   - Issues 和 Discussions 中有相關討論和範例

4. **Pinia 官方文件 - Setup Stores**
   - https://pinia.vuejs.org/core-concepts/#setup-stores
   - 說明 Setup Store 的基本語法結構

**驗證結論**：

- ✅ 官方文件明確說明 Setup Store 的 `persist` 必須放在第三個參數
- ✅ GitHub 上有實際的程式碼範例和討論
- ✅ 多個技術文章和教學都使用相同的寫法
- ✅ 這是 Setup Store 的標準寫法，不是特殊用法

## 🔍 驗證方式

### 1. 檢查 Local Storage

打開瀏覽器 DevTools：

- **Chrome/Edge**: F12 → Application → Local Storage
- **Firefox**: F12 → Storage → Local Storage

應該會看到以 store name 命名的 key（例如：`product`）

### 2. 測試流程

1. ✅ 加入商品到購物車
2. ✅ 切換路由 → 購物車應該保持
3. ✅ 重新整理頁面 → 購物車應該保持
4. ✅ 關閉瀏覽器再打開 → 購物車應該保持

## ⚠️ 注意事項

1. **不要持久化敏感資料**：密碼、token 等不應該存在 localStorage
2. **資料大小限制**：localStorage 約 5-10MB，注意不要存過大資料
3. **資料格式**：會自動序列化/反序列化，但要注意 Date、Function 等特殊類型
4. **同一個 pinia 實例**：確保 `main.ts` 中使用的是同一個 `pinia` 實例

## 🐛 常見問題

### Q: 為什麼持久化沒生效？

A: 檢查：

- `main.ts` 是否有正確設定 `pinia.use(piniaPluginPersistedstate)`
- Store 中是否有加入 `persist` 設定
- 是否使用了同一個 `pinia` 實例

### Q: 如何清除持久化的資料？

A: 在 DevTools Console 執行：

```javascript
localStorage.removeItem("product"); // product 是你的 store name
```

或清除所有：

```javascript
localStorage.clear();
```

### Q: 如何只在特定條件下持久化？

A: 使用 `serializer` 或 `beforeRestore` hook：

```javascript
persist: {
  paths: ['cartLists'],
  beforeRestore: (ctx) => {
    // 還原前的檢查
    if (someCondition) {
      return false;  // 不還原
    }
  }
}
```

### Q: 為什麼要用 `paths` 而不是 `persist: true`？

A: 因為 `persist: true` 會嘗試持久化整個 state，包括：

- ❌ Functions（無法序列化，會造成錯誤）
- ❌ 不需要持久化的資料（如每次都要重新 fetch 的 `products`）
- ❌ Computed properties（不應該被持久化）

使用 `paths` 可以：

- ✅ 只持久化真正需要的資料（如 `cartLists`）
- ✅ 避免序列化錯誤
- ✅ 節省儲存空間
- ✅ 更精確控制哪些資料需要持久化

**範例**：

```javascript
// ❌ 不推薦
persist: true; // 會嘗試保存所有東西

// ✅ 推薦
persist: {
  paths: ["cartLists"]; // 只保存購物車清單
}
```

## 📖 延伸閱讀

- [Pinia 官方文件 - Plugins](https://pinia.vuejs.org/core-concepts/plugins.html)
- [pinia-plugin-persistedstate 完整文件](https://prazdevs.github.io/pinia-plugin-persistedstate/)
- [MDN - Web Storage API](https://developer.mozilla.org/zh-TW/docs/Web/API/Web_Storage_API)

---

**最後更新**: 2025-01-XX  
**專案**: Gift-Shop-Vue
