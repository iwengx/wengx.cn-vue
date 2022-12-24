declare interface Result<T> {
   data: T;
   status: number;
}

/**
 * 接口的返回值类型
 */
declare namespace Visits {
   type ResToDay = Result<number>;

   type ResSetToDay = Result<string>;

   type ResTenDays = Result<{
      seriesData: number[];
      xAxisData: string[];
   }>;
}

/**
 * 赞助的返回值类型
 */
declare namespace Support {
   type list = {
      name: string;
      time: string;
      money: string;
   }[];
}
