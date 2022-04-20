/****   http.js   ****/
// 导入封装好的axios实例
import request from './request';

const http = {
   get(url: string, params?: object) {
      const config: any = {
         method: 'get',
         url: url,
         params,
      };
      return request(config);
   },
   post(url: string, params?: object, formData: boolean = false) {
      const config: any = {
         method: 'post',
         url: url,
         formData,
         data: params,
      };
      return request(config);
   },
   /**
    * 文件导出 专用函数
    * @param url 接口地址
    * @param params url参数
    * @param bodyParams body 整型数组参数
    * @param formData 上传文件（暂无用）
    * @returns
    */
   postParam(url: string, params: object, bodyParams: number[], formData: boolean = false) {
      const config: any = {
         method: 'post',
         responseType: 'blob',
         url: url,
         formData,
         params,
         data: bodyParams,
      };
      return request(config);
   },
   put(url: string, params?: object) {
      const config: any = {
         method: 'put',
         url: url,
         data: params,
      };
      return request(config);
   },
   delete(url: string, params?: object) {
      const config: any = {
         method: 'delete',
         url: url,
         params,
      };
      return request(config);
   },
};
//导出
export default http;
