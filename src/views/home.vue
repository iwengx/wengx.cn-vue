<template>
   <div class="home-views">
      <div class="left-content slideRight">
         <div class="black-border program-main">
            <TransitionImage :scale="0.625">
               <img src="https://img2.imgtp.com/2024/04/19/Ghn2RkBm.png" />
            </TransitionImage>
            <img src="https://img2.imgtp.com/2024/04/19/ELAhNZaX.png" class="free-png" />
         </div>
         <div class="text-container">
            <div class="brief-box">
               <div>
                  <h2>我的世界小肝助手</h2>
                  <p>一款免费的无感挂机的宏脚本软件</p>
               </div>
               <div>
                  <button class="minecraft-btn2" @click="router.push('lil-liver-helper')">
                     前往下载
                  </button>
               </div>
            </div>
            <div class="online-data">
               <router-link to="/visits-web">
                  <div class="data-item data-back-1">
                     <p>今日网站访问量</p>
                     <h2>{{ webVisitorsCount }}</h2>
                  </div>
               </router-link>
               <router-link to="/visits-llh">
                  <div class="data-item data-back-2">
                     <p>今日小肝访问量</p>
                     <h2>{{ lilLiverHelperVisitorsCount }}</h2>
                  </div>
               </router-link>
               <router-link to="/support" class="support-box">
                  <div class="support-brief data-item data-back-3">
                     <p>赞助榜一</p>
                     <h3 v-if="supportFirst">
                        {{ supportFirst.name }} / {{ supportFirst.money }} ￥
                     </h3>
                  </div>
               </router-link>
            </div>
         </div>
      </div>

      <div class="right-content wengx-scrollbar">
         <div class="base-card slideLeft">
            <div class="card-body">
               <div style="margin-bottom: 50px">
                  <b class="nes-badge" style="margin-bottom: 20px">
                     <span class="is-warning">简 述</span>
                  </b>
                  <p>
                     这是一款集成自动钓鱼、自动发消息和鼠标操作的多功能宏脚本软件。启动脚本后，它不会影响你电脑上的其他操作，实现完全隔离，你可以一边打其他游戏，一边挂机我的世界。
                  </p>
               </div>

               <div style="margin-bottom: 50px">
                  <b class="nes-badge" style="margin-bottom: 20px">
                     <span class="is-warning">逻 辑</span>
                  </b>
                  <p>
                     小肝助手会获取你当前的游戏进程，并向该进程发送宏命令，这样就实现了进程间的脚本隔离，从而不影响到其他进程的正常运行。小肝助手不会修改你的游戏数据，也不会修改文件等，它只是在宏脚本的基础上扩展了一些辅助功能。
                  </p>
               </div>

               <div>
                  <b class="nes-badge" style="margin-bottom: 20px">
                     <span class="is-warning">关注 / 反馈</span>
                  </b>
                  <p>
                     欢迎加入我们的企鹅群 955907864、724761073
                     一起交流。当然，如果可以的话最好给我的
                     <a class="github-text" @click="toGitHub">GitHub</a>
                     点一个 Star，非常感谢。
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
   getToDayWebVisitorsCount,
   getToDayLilLiverHelperVisitorsCount,
   getSupportFirstApi,
} from '@/api/interface';
import TransitionImage from '@/components/transition-image.vue';

const router = useRouter();

const webVisitorsCount = ref(0);
const lilLiverHelperVisitorsCount = ref(0);
const supportFirst = ref<Support.list[number]>();

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

getSupportFirstApi()
   .then((res) => {
      supportFirst.value = res.data[0];
   })
   .catch((err) => {
      console.log(err);
   });

const toGitHub = () => {
   window.open('https://github.com/iwengx/Minecraft-Lil-liver-helper');
};
</script>

<style lang="scss">
.home-views {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 50px;
   align-items: center;
   padding: 120px 30px 150px;
   flex: 1;

   .left-content {
      width: 100%;
      height: 610px;
      max-width: 648px;
      margin: 0 auto;

      .program-main {
         .img-mask {
            width: 100%;
            height: 100%;
            background-color: #9999995c;
            position: absolute;
            left: 0;
            top: 0;
            transition: background-color 0.5s;
         }

         .img-mask-hidden {
            background-color: #9990;
         }

         .program-img {
            transition: opacity 0.5s;
         }

         .program-img-hidden {
            opacity: 0;
         }
      }

      .free-png {
         width: 68px;
         position: absolute;
         z-index: 10;
         top: -12px;
         right: -27px;
         transform: rotate(25deg);
      }

      .text-container {
         margin: 20px auto 10px;
      }

      .brief-box {
         display: flex;
         justify-content: space-between;
      }

      .online-data {
         margin-top: 25px;
         display: flex;
         flex-wrap: wrap;
         gap: 30px;

         a {
            text-decoration: none;
         }
      }

      .data-item {
         width: 150px;
         opacity: 0.6;
         border-radius: 10px;
         padding: 10px 10px 1px;
         transition: filter 0.1s, opacity 0.1s;
         color: white;
         background-size: cover;
         background-position: center;

         p {
            font-size: 1rem;
         }

         &:hover {
            opacity: 1;
            filter: drop-shadow(2px 4px 6px #999);
         }
      }

      .data-back-1 {
         background-image: url('https://img2.imgtp.com/2024/04/19/MNcECsx5.jpg');
      }

      .data-back-2 {
         background-image: url('https://img2.imgtp.com/2024/04/19/AkFybdag.jpg');
      }

      .data-back-3 {
         background-image: url('https://img2.imgtp.com/2024/04/19/MAirbRQ3.png');
      }

      .support-box {
         flex: 1;

         .support-brief {
            min-width: 200px;
            width: 100% !important;
            height: 100% !important;

            h3 {
               line-height: 35px;
               margin-bottom: 0 !important;
            }
         }
      }
   }

   .right-content {
      height: 610px;
      overflow-x: hidden;

      .statement-box,
      .version-box {
         margin-top: 35px;
      }

      .github-text {
         font-weight: bold;
         font-family: 'Zpix';
      }
   }
}
</style>
