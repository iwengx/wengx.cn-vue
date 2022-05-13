// 导入axios
import axios from 'axios';
import { getCookie } from '../utils/cookie/index';
//1. 创建新的axios实例，
const service = axios.create({
   // 接口地址
   baseURL: 'http://ovohi.com',
   // 超时时间 单位是ms，这里设置了60s的超时时间
   timeout: 60 * 1000,
});

// 2.请求拦截器
service.interceptors.request.use(
   (config: any) => {
      config.headers = {
         'Content-Type': config.formData ? 'multipart/form-data' : 'application/json;charset=UTF-8', //配置请求头
      };
      const token: string = getCookie('token'); // 取出token
      if (token) {
         config.headers['Authorization'] = 'Bearer ' + token; //如果要求携带在请求头中
      }

      return config;
   },
   (error) => {
      Promise.reject(error);
   }
);

// 3.响应拦截器
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
      let res = error.response;
      console.log('请求超时', res);
      return Promise.reject(res);
   }
);

// 4.导出
export default service;
