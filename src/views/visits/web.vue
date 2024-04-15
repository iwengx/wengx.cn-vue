<template>
   <div class="visits-web-page">
      <p class="title">&#10024; 官网访问量可视化曲线图</p>
      <p class="explanation">说明: 每位玩家当日打开就算一次，多次打开也只算一次。</p>
      <div class="echarts-main" id="main" v-if="isMainChartInit"></div>
   </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { getTenDaysWebEChartsData } from '../../api/interface';
import { ECOption, init } from './common/init-echart';

const isMainChartInit = ref(true);

onMounted(() => {
   const chartDom = document.getElementById('main') as HTMLDivElement;

   const option: ECOption = {
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

   getTenDaysWebEChartsData()
      .then((res) => {
         // @ts-ignore
         option.xAxis.data = res.data.xAxisData;
         // @ts-ignore
         option.series[0].data = res.data.seriesData;

         const myChart = init(chartDom, option);

         window.onresize = function () {
            myChart.resize();
         };
      })
      .catch((err) => {
         console.log(err.message);
      });

   onBeforeUnmount(() => {
      isMainChartInit.value = false;
   });
});
</script>

<style lang="scss">
.visits-web-page {
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
