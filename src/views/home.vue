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
            </div>
         </div>
      </div>

      <div class="right-content">
         <div class="base-card slideLeft">
            <div class="card-body">
               <div>
                  <b class="nes-badge" style="margin-bottom: 20px">
                     <span class="is-warning">公 告</span>
                  </b>
                  <p>- 分享给你身边的朋友一起使用，是对我最大的支持和鼓励！</p>
                  <p>- 欢迎加企鹅群(955907864)一起讨论、合作.</p>
                  <br />
                  <a target="_blank" href="https://jq.qq.com/?_wv=1027&k=Yb0G9swZ">一键加群</a>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { getToDayWebVisitorsCount, getToDayLilLiverHelperVisitorsCount } from '../api/interface';

const router = useRouter();

let webVisitorsCount = ref(0);
let lilLiverHelperVisitorsCount = ref(0);

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

         a {
            text-decoration: none;
         }
      }

      .data-item {
         width: 150px;
         padding: 10px 10px 1px;
         border-radius: 10px;
         transition: filter 0.1s;
         margin-right: 30px;
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
   }

   .right-content {
      height: 610px;
      overflow: hidden;

      .statement-box,
      .version-box {
         margin-top: 35px;
      }
   }
}
</style>
