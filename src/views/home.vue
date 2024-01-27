<template>
   <div class="home-views">
      <div class="left-content slideRight">
         <table class="nes-table is-bordered is-centered">
            <tbody>
               <tr>
                  <td style="padding: 0">
                     <img src="../assets/lil-liver-helper/home.jpg" alt="" />
                     <img src="../assets/free.png" class="free-png" />
                  </td>
               </tr>
            </tbody>
         </table>
         <div class="text-container">
            <div class="brief-box">
               <div>
                  <p>本站主要软件:</p>
                  <h2>我的世界小肝助手</h2>
               </div>
               <div>
                  <button class="nes-btn is-success" @click="router.push('lil-liver-helper')">
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
                     <span class="is-warning">说 明</span>
                  </b>
                  <p>📖 这是一款集成自动钓鱼、自动发消息和鼠标操作的多功能宏脚本软件。</p>
                  <p>
                     启动脚本后，它不会影响你电脑上的其他操作，实现完全隔离，你可以一边打其他游戏，一边挂机我的世界。
                  </p>
                  <br />
                  <p>
                     -
                     小肝助手会获取你当前的游戏进程，并向该进程发送宏命令，这样就实现了进程间的脚本隔离，从而不影响到其他进程的正常运行。小肝助手不会修改你的游戏数据，也不会修改文件等，它只是在宏脚本的基础上扩展了一些辅助功能。
                  </p>
               </div>

               <div>
                  <b class="nes-badge" style="margin-bottom: 20px">
                     <span class="is-warning">公 告</span>
                  </b>
                  <p>- 分享给你身边的朋友一起使用，是对我最大的支持和鼓励！</p>
                  <p>- 欢迎加企鹅群 (955907864 | 724761073) 一起讨论、合作.</p>
                  <br />
                  <div class="space">
                     <!-- <a target="_blank" href="https://jq.qq.com/?_wv=1027&k=Yb0G9swZ"> 一键加群 </a> -->
                     <a
                        target="_blank"
                        href="https://qm.qq.com/cgi-bin/qm/qr?k=0HMfUmr5QLUiTd3craUDfEj9i7HtgSdz&jump_from=webapi&authKey=R0CDJt+yiyJXUQ6gMUzKrM9Reoep4AYSs+vwoyhW/fAg5YgUchHyAaR8kG8N9Qp8"
                        ><img
                           border="0"
                           src="//pub.idqqimg.com/wpa/images/group.png"
                           alt="小肝助手交流群-2"
                           title="小肝助手交流群-2"
                     /></a>
                     <a href="#/lil-liver-helper"> 视频教程 </a>
                  </div>
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
} from '../api/interface';

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
      height: 610px;

      table {
         margin: 0 auto;
      }

      .free-png {
         position: absolute;
         top: -12px;
         right: -27px;
         transform: rotate(25deg);
         width: 68px;
      }

      .text-container {
         max-width: 648px;
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
         padding: 10px 10px 1px;
         border-radius: 10px;
         transition: filter 0.1s;
         color: white;
         background-size: cover;
         background-position: center;

         p {
            font-size: 1rem;
         }

         &:hover {
            filter: drop-shadow(2px 4px 6px black);
         }
      }

      .data-back-1 {
         background-image: url('../assets/data-1.jpg');
      }

      .data-back-2 {
         background-image: url('../assets/data-2.jpg');
      }

      .data-back-3 {
         background-image: url('../assets/data-3.png');
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

      .space {
         display: flex;
         gap: 20px;
      }
   }
}
</style>
