import axios from "axios";
import { networkConfig } from "@/api/networkConfig";

// 創建axios實例
export function requestService(config) {
  const service = axios.create({
    baseURL: networkConfig.baseURL,
    timeout: networkConfig.requestTimeout,
    headers: config.headers,
  });

  // request攔截
  service.interceptors.request.use(
    (config) => {
      // 如果此請求不需要帶 token，直接返回 config
      // if (shouldAddToken(config)) {
      //   // 檢查Token
      //   const token = JSON.parse(localStorage.getItem("userInfo")).token;
      //   // 如果 token 存在，則將其添加到請求頭中
      //   if (token) {
      //     config.headers.token = token;
      //     // config.headers.Authorization = `Bearer ${token}`;
      //   }
      // }

      // function shouldAddToken(config) {
      //   return config.url !== "/admin/otp" && config.url !== "/admin/login";
      // }
      return config;
    },
    (error) => {
      console.log("攔截RequestError", error);
      return Promise.reject(error);
    }
  );

  // response攔截
  service.interceptors.response.use(
    (response) => {
      if (response.status >= 200 && response.status < 300) {
        // 狀態碼為 2xx 時視為成功
        // if (response.data.status === "success") {
        return Promise.resolve(response);
        // } else if (response.data.status === "error") {
        //   console.log("error in data");
        //   // 拋出異常或是 reject 一個錯誤
        //   return Promise.reject(new Error("Error in response data"));
        // }
      } else {
        console.log("response status is not 2xx");
        return Promise.reject(response);
      }
    },
    (error) => {
      console.log("攔截ResponseError", error);
      return Promise.reject(error);
    }
  );
  return service(config);
}
