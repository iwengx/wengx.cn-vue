<template>
   <main class="wengx-main">
      <div class="header-img">
         <div class="bg-wool-dark"></div>
         <div class="trans-top-darkwool"></div>
      </div>
      <article>
         <div class="left-content slideRight">
            <table class="nes-table is-bordered is-centered">
               <tbody>
                  <tr>
                     <td style="padding: 0">
                        <img src="../assets/lil-liver-helper/home.jpg" alt="" />
                     </td>
                  </tr>
               </tbody>
            </table>
            <div class="brief-box">
               <div>
                  <p>本站主要软件:</p>
                  <h2>我的世界小肝助手</h2>
               </div>
               <div>
                  <button class="nes-btn is-success">前往下载</button>
               </div>
            </div>
         </div>
         <div class="right-content slideLeft">
            <div class="base-card">
               <div class="card-body">
                  <b class="nes-badge" style="margin-bottom: 20px">
                     <span class="is-warning">公 告</span>
                  </b>
                  <p>- 分享给你身边的朋友一起使用，是对我最大的支持和鼓励！</p>
                  <p>- 欢迎加企鹅群(955907864)一起讨论、合作.</p>
               </div>
               <div class="card-footer">
                  <div @click="toGitHub">
                     <a>
                        <i class="nes-icon github is-small" style="vertical-align: middle"></i>
                        <span> WengX-unx</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>

         <div class="main-player-box slideLeft">
            <p class="nes-balloon from-right">hello，你好啊！欢迎来到我的网站~</p>
            <img src="../assets/minecraft-player-1.png" alt="史蒂夫" />
         </div>
      </article>
      <div class="footer-img">
         <div class="trans-top-darkwool"></div>
         <div class="bg-wool-dark"></div>
      </div>
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
   background: url('../assets/bg-wool-light.png');
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   .header-img {
      .bg-wool-dark {
         width: 100%;
         height: 50px;
         background-image: url('../assets/bg-wool-dark.png');
         background-position-x: 100%;
      }

      .trans-top-darkwool {
         width: 100%;
         height: 100px;
         background-image: url('../assets/trans-top-darkwool.png');
         background-position-x: 100%;
      }
   }

   .footer-img {
      .bg-wool-dark {
         width: 100%;
         height: 50px;
         background-image: url('../assets/bg-wool-dark.png');
         background-position-x: 50%;
      }

      .trans-top-darkwool {
         width: 100%;
         height: 100px;
         background-image: url('../assets/trans-bottom-darkwool.png');
         background-position-x: 50%;
      }
   }

   article {
      position: relative;
      flex: 1;
      padding: 20px;
      display: grid;
      column-gap: 50px;
      grid-template-columns: 1fr 1fr;
      align-content: center;
      overflow-x: hidden;

      .left-content {
         table {
            margin: 0 auto;
         }

         .brief-box {
            max-width: 648px;
            margin: 20px auto 10px;
            display: flex;
            justify-content: space-between;
         }
      }
   }

   .main-player-box {
      position: absolute;
      right: 20px;
      bottom: 0;

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
</style>
