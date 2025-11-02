import instance from "./axios";

// 取得商品列表
export function getProducts(data: object) {
  return instance({
    url: `/api/products/all`,
    method: "get",
    data,
  });
}

// 取得購物優惠卷
export function getCoupons(data: object) {
  return instance({
    url: `/api/coupons`,
    method: "get",
    data,
  });
}
// 登入會員
export function useLogin(data: object) {
  return instance({
    url: `/login`,
    method: "post",
    data,
  });
}

// 註冊會員
export function useRegister(data: object) {
  return instance({
    url: `/register`,
    method: "post",
    data,
  });
}

// 查詢會員點數

export function getUserPoints(userId: any) {
  return instance({
    url: `/api/demo-points/${userId}`,
    method: "get",
  });
}
