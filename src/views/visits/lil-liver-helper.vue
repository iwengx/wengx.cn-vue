<template>
   <div class="visits-llh-page">
      <p class="title">&#10024; 小肝助手访问量可视化曲线图</p>
      <p class="explanation">说明: 每位玩家当日打开就算一次，多次打开也只算一次。</p>

      <div class="echarts-main" id="main" v-if="isMainChartInit"></div>
   </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue';
import { getTenDaysLilLiverHelperEChartsData } from '../../api/interface';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

let isMainChartInit = ref(true);

onMounted(() => {
   let chartDom = document.getElementById('main')!;
   let myChart = echarts.init(chartDom);

   let option: EChartsOption = {
      tooltip: {
         trigger: 'axis',
      },
      xAxis: {
         type: 'category',
         data: [],
      },
      yAxis: {
         type: 'value',
      },
      series: [
         {
            data: [],
            type: 'line',
            smooth: true,
            lineStyle: {
               width: 4, //设置线条粗细
            },
         },
      ],
   };

   getTenDaysLilLiverHelperEChartsData()
      .then((res) => {
         (option.xAxis as any).data = res.data.xAxisData;
         (option.series as any)[0].data = res.data.seriesData;
      })
      .catch((err) => {
         console.log(err.message);
      })
      .finally(() => {
         myChart.setOption(option);
      });

   window.onresize = function () {
      myChart.resize();
   };

   onBeforeUnmount(() => {
      isMainChartInit.value = false;
   });
});
</script>

<style lang="scss">
.visits-llh-page {
   flex: 1;
   padding: 120px 30px 150px;

   .title {
      font-size: 2rem;
      margin-bottom: 15px;
   }

   .echarts-main {
      width: 100%;
      height: 600px;
   }

   .explanation {
      font-size: 1rem;
      margin-left: 10px;
   }
}
</style>
