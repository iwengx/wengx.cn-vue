<template>
   <main class="wengx-main">
      <article class="main-body">
         <div class="body-header">
            <img class="wengxcn-img" src="../assets/wengxcn.png" alt="" />
            <img class="coolie-fear-img" src="../assets/coolie-fear.png" alt="" />
            <ul class="link-box">
               <li>
                  <a @click="toGitHub">
                     <i class="nes-icon github is-small" style="vertical-align: middle"></i>
                     <span> WengX-unx</span>
                  </a>
               </li>
               <li>
                  <a>关于我们</a>
               </li>
            </ul>
         </div>

         <div class="body-content">
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
                        <button class="nes-btn is-success">前往下载</button>
                     </div>
                  </div>
                  <div class="online-data">
                     <div class="data-item" style="background-image: url('/src/assets/data-1.jpg')">
                        <p>今日网站访问量</p>
                        <h2>124</h2>
                     </div>
                     <div class="data-item" style="background-image: url('/src/assets/data-2.jpg')">
                        <p>今日小肝访问量</p>
                        <h2>89</h2>
                     </div>
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
                        <a target="_blank" href="https://jq.qq.com/?_wv=1027&k=Yb0G9swZ"
                           >一键加群</a
                        >
                     </div>
                  </div>
               </div>
            </div>
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
const toGitHub = () => {
   window.open('https://github.com/wengx-unx');
};
</script>

<style lang="scss">
.wengx-main {
   min-height: 100vh;
   background-image: url('../assets/wallhaven-z8vk1w.png');
   background-size: cover;
   display: flex;
   justify-content: center;
   align-items: center;
}

.wengx-main .main-body {
   position: relative;
   width: 100%;
   max-width: 1680px;
   height: 1000px;
   margin: 40px;

   display: flex;
   flex-direction: column;

   border-radius: 15px;
   overflow: hidden;

   background-image: url('../assets/bg-wool-light.png');
   background-size: cover;

   .body-header {
      position: relative;
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
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      align-items: center;
      margin: 20px 0;
      padding: 0 30px;
      flex: 1;
   }

   .body-footer {
      height: 150px;
      padding: 20px 35px;

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
            transform: translateX(20px);
         }

         img {
            width: 180px;
            vertical-align: text-top;
         }
      }
   }

   .body-content .left-content {
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
      }

      .data-item {
         width: 150px;
         background: rgba(139, 195, 74, 0.3803921569);
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
   }

   .body-content .right-content {
      height: 610px;
      overflow: hidden;

      .statement-box,
      .version-box {
         margin-top: 35px;
      }
   }
}
</style>
