/**
 * 接口的返回值类型
 */
declare namespace Visits {
   interface ResToDay {
      data: number;
      status: number;
   }

   interface ResSetToDay {
      data: string;
      status: number;
   }

   interface ResTenDays {
      seriesData: number[];
      xAxisData: string[];
   }
}
