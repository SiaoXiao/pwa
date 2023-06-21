import { requestService } from "@/api/request";

// Get OTP碼
export function apiGetOTP(params) {
  return requestService({
    url: "/admin/otp",
    method: "GET",
    headers: {
      "Content-Type": "text/plain",
    },
    params,
  });
}

// Post 使用者登入
export function apiPostLogin(data) {
  return requestService({
    url: "/admin/login",
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
    },
    data,
  });
}

/* Goods List */
// Post 取得所有商品資料
export function apiPostGetGoodsList(data) {
  return requestService({
    url: "/admin/goods/r",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });
}
