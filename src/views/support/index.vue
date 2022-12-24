<template>
   <div class="support-view">
      <div class="support-left">
         <table>
            <thead>
               <tr>
                  <th>昵称</th>
                  <th>时间</th>
                  <th>金额（元）</th>
               </tr>
            </thead>
            <tbody>
               <tr v-for="item in supportList">
                  <td>{{ item.name }}</td>
                  <td>{{ item.time }}</td>
                  <td>{{ item.money }} ￥</td>
               </tr>
            </tbody>
         </table>
         <p class="sub-description">根据最新时间进行排序。</p>
      </div>
      <div class="support-right">
         <p>您的支持是我创作最大的动力，捐助是自愿的，</p>
         <p>表示对本站软件的支持，并没有提供额外的功能。</p>
         <div class="play-image-box">
            <img src="../../assets/alipayImg.png" alt="alipayImg" />
            <img src="../../assets/WechatImg.png" alt="WechatImg" />
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getSupportListApi } from '../../api/interface';

import './index.scss';

const supportList = ref<Support.list>([]);

getSupportListApi()
   .then((res) => {
      supportList.value = res.data;
   })
   .catch((err) => {
      console.log(err);
   });
</script>
