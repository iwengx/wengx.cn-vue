import http from './http.js';
import { AxiosPromise } from 'axios';

/**
 * 获取当天的Web访问量
 * @returns
 */
export function getToDayWebVisitorsCount(): AxiosPromise {
   return http.get('/web/visitor/count');
}

/**
 * 获取当天的小肝访问量
 * @returns
 */
export function getToDayLilLiverHelperVisitorsCount(): AxiosPromise {
   return http.get('/lilLiverHelper/visitor/count');
}

/**
 * 记录当天的Web访问量
 * @returns
 */
export function setToDayWebVisitorsCount(): AxiosPromise {
   return http.post('/web/visitor/count');
}
