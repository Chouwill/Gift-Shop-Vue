import instance from "./axios";

export function onLogin(data){
  return instance({
    url: `/login`,
    method: "post",
    data,
  })
}


export function getProducts(data: object){
  return instance({
    url: `/api/products/all`,
    method: "get",
    data,
  })
}
