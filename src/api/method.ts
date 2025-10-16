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
