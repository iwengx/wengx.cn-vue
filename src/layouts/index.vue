<template>
   <main class="wengx-main">
      <article class="main-body">
         <div class="body-header">
            <a>
               <img
                  @click="router.push('/')"
                  class="wengxcn-img"
                  src="../assets/wengxcn.png"
                  alt=""
               />
            </a>
            <img class="coolie-fear-img" src="../assets/coolie-fear.png" alt="" />
            <ul class="link-box">
               <li>
                  <a @click="toGitHub">
                     <i class="nes-icon github is-small" style="vertical-align: middle"></i>
                     <span> iwengx</span>
                  </a>
               </li>
            </ul>
         </div>

         <div class="body-content wengx-scrollbar">
            <router-view></router-view>
         </div>

         <div class="body-footer">
            <div class="main-player-box">
               <div class="slideLeft">
                  <p class="nes-balloon from-right">hello，你好啊！欢迎来到我的网站~</p>
                  <img src="../assets/minecraft-player-1.png" alt="史蒂夫" />
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

let webVisitorsCount = ref(0);
let lilLiverHelperVisitorsCount = ref(0);

const toGitHub = () => {
   window.open('https://github.com/iwengx');
};

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
   min-height: 100vh;
   height: 100vh;
   background-image: url('../assets/wallhaven-z8vk1w.png');
   background-size: cover;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 40px;
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

   background-image: url('../assets/bg-wool-light.png');
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

      width: 100%;
      height: 150px;

      background-image: url('../assets/trans-bottom-darkwool.png');
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
            width: 180px;
            vertical-align: text-top;
         }
      }
   }
}
</style>
