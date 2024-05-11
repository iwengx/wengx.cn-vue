import axios from 'axios';

const service = axios.create({
   baseURL: 'https://api.wengx.cn',
   timeout: 60 * 1000,
});

/**
 * @description 请求拦截器
 */
service.interceptors.request.use(
   (config: any) => {
      // * do something

      return config;
   },
   (error) => {
      Promise.reject(error);
   },
);

/**
 * @description 响应拦截器
 */
service.interceptors.response.use(
   (response) => {
      const validCode: number[] = [200];

      if (validCode.includes(response.data.status)) {
         return response.data;
      } else {
         return Promise.reject(response.data);
      }
   },
   (error) => {
      const res = error.response;
      console.log('请求超时', res);
      return Promise.reject(res);
   },
);

// * 替换 axios 默认返回类型的配置
declare module 'axios' {
   export interface AxiosInstance {
      get<T = any>(url: string, params?: object, config?: AxiosRequestConfig): Promise<T>;

      delete<T = any>(url: string, params?: object, config?: AxiosRequestConfig): Promise<T>;

      post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;

      put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
   }
}

export default service;
