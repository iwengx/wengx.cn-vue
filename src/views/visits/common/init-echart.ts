// 按需导入 Echarts
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { TooltipComponent, GridComponent } from 'echarts/components';

import type { LineSeriesOption } from 'echarts/charts';
import type { ComposeOption, ECharts } from 'echarts/core';
import type { GridComponentOption } from 'echarts/components';

// 注册必须的组件
echarts.use([
   LineChart,
   LabelLayout,
   CanvasRenderer,
   UniversalTransition,
   GridComponent,
   TooltipComponent,
]);

type ECOption = ComposeOption<LineSeriesOption | GridComponentOption>;

/**
 * 初始化 Echart 对象
 * @param dom 元素
 * @param option 配置
 * @returns Echart 对象
 */
const init = (dom: HTMLDivElement, option: ECOption): ECharts => {
   const echart = echarts.init(dom);
   echart.setOption(option);
   return echart;
};

export { init, ECOption };
