import instance from "./axios";

export function onLogin(data) {
  return instance({
    url: `/login`,
    method: "post",
    data,
  });
}
export function getCoupons(userId: string) {
  return instance({
    url: `/api/coupons/`,
    method: "get",
    params: { userId },
  });
}

export function getProducts(data: object) {
  return instance({
    url: `/api/products/all`,
    method: "get",
    data,
  });
}
