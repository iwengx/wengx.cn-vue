import http from './http.js';
import { AxiosPromise } from 'axios';
import { EChartsLLHProps } from './result.js';

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

/**
 * 获取十天的小肝助手访问量
 * @returns Echarts 数据集
 */
export function getTenDaysLilLiverHelperEChartsData(): AxiosPromise<EChartsLLHProps> {
   return http.get('/echarts/visits-llh');
}
