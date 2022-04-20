import http from './http.js';
import { AxiosPromise } from 'axios';
import { getCookie } from '../utils/cookie/index';

// 获取cookie中存储的uuid
let accountUuid: string = getCookie('uuid') || '';

// 设置uuid
export function setAccountUuid(): void {
   // 重新获取一次
   accountUuid = getCookie('uuid') || '';
}

// 获取账号信息
// export function getLoginAccountInfo(): AxiosPromise {
//    return http.get('/wit-admin/account/info');
// }
