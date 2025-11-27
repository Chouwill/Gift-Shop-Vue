import instance from "./axios";

export function getProducts(data: object){
  return instance({
    url: `/api/products/all`,
    method: "get",
    data,
  })
}
