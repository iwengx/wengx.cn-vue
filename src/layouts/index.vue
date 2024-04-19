<template>
   <main class="wengx-main">
      <article class="main-body">
         <div class="body-header">
            <a>
               <img
                  @click="router.push('/')"
                  class="wengxcn-img"
                  src="https://img2.imgtp.com/2024/04/19/6Mz5BL3Q.png"
                  alt=""
               />
            </a>
            <img
               class="coolie-fear-img"
               src="https://img2.imgtp.com/2024/04/19/VGA4usUM.png"
               alt=""
            />
         </div>

         <div class="body-content wengx-scrollbar">
            <router-view v-slot="{ Component }">
               <keep-alive>
                  <component :is="Component" />
               </keep-alive>
            </router-view>
         </div>

         <div class="body-footer">
            <div class="main-player-box">
               <div class="slideLeft">
                  <p class="nes-balloon from-right">hello，你好啊！欢迎来到我的网站~</p>
                  <img src="https://img2.imgtp.com/2024/04/19/0ufv2cAH.png" alt="史蒂夫" />
               </div>
            </div>
         </div>
      </article>
   </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getToDayWebVisitorsCount, getToDayLilLiverHelperVisitorsCount } from '../api/interface';

const router = useRouter();

const webVisitorsCount = ref(0);
const lilLiverHelperVisitorsCount = ref(0);

getToDayWebVisitorsCount()
   .then((res: any) => {
      webVisitorsCount.value = res.data;
   })
   .catch((err) => {
      console.log(err);
   });

getToDayLilLiverHelperVisitorsCount()
   .then((res: any) => {
      lilLiverHelperVisitorsCount.value = res.data;
   })
   .catch((err) => {
      console.log(err);
   });
</script>

<style lang="scss">
.wengx-main {
   height: 100vh;
   min-height: 100vh;
   padding: 40px;
   background-color: #d8d8d8;
   background-image: url('https://img2.imgtp.com/2024/04/19/SzpASoin.png');
   background-size: cover;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
}

.wengx-main .main-body {
   position: relative;
   width: 100%;
   max-width: 1680px;
   height: 100%;
   max-height: 1000px;

   flex: 1;
   display: flex;
   flex-direction: column;

   border-radius: 15px;
   overflow: hidden;

   background-image: url('https://img2.imgtp.com/2024/04/19/eYzbRIlY.png');
   background-size: cover;

   .body-header {
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 120px;
      padding: 20px;
      display: flex;
      justify-content: space-between;

      .wengxcn-img {
         width: 114px;
         height: 24px;
      }

      .coolie-fear-img {
         position: absolute;
         right: 0;
         bottom: -50px;
         width: 68px;
         transition: transform 0.2s ease;

         &:hover {
            transform: scale(1.2);
         }
      }

      .link-box {
         li {
            display: inline-block;
            white-space: nowrap;
            margin-right: 30px;
         }
      }
   }

   .body-content {
      flex: 1;
      display: flex;
      overflow-y: auto;
   }

   .body-footer {
      position: absolute;
      bottom: 0;
      z-index: 9999;

      width: 100%;
      height: 150px;

      background-image: url('https://img2.imgtp.com/2024/04/19/VUiWPgVT.png');
      background-repeat: repeat-x;
      background-position: bottom;

      .main-player-box {
         position: absolute;
         right: 20px;
         bottom: 0;
         overflow: hidden;

         &:hover p {
            display: inline-block;
         }

         p {
            display: none;
            animation-name: overVisible;
            -webkit-animation-name: overVisible;
            animation-duration: 0.2s;
            -webkit-animation-duration: 0.2s;
            animation-timing-function: ease;
            -webkit-animation-timing-function: ease;
            transform: translateX(20px);
         }

         img {
            width: 150px;
            vertical-align: text-top;
         }
      }
   }
}
</style>
