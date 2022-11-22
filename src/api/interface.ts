import http from './index';

/**
 * 获取当天的Web访问量
 */
export const getToDayWebVisitorsCount = () => {
   return http.get<Visits.ResToDay>('/web/visitor/count');
};

/**
 * 获取当天的小肝访问量
 */
export const getToDayLilLiverHelperVisitorsCount = () => {
   return http.get<Visits.ResToDay>('/lilLiverHelper/visitor/count');
};

/**
 * 记录当天的Web访问量
 */
export const setToDayWebVisitorsCount = () => {
   return http.post<Visits.ResSetToDay>('/web/visitor/count');
};

/**
 * 获取十天的小肝助手访问量
 * @returns Echarts 数据集
 */
export const getTenDaysLilLiverHelperEChartsData = () => {
   return http.get<Visits.ResTenDays>('/echarts/visits-llh');
};

/**
 * 获取十天的网站访问量
 * @returns Echarts 数据集
 */
export const getTenDaysWebEChartsData = () => {
   return http.get<Visits.ResTenDays>('/echarts/visits-web');
};
