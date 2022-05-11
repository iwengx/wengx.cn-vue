<template>
   <main class="wengx-main">
      <div class="header-img">
         <img class="wengxcn-img" src="../assets/wengxcn.png" alt="" />
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
                  <b class="nes-badge" style="margin-bottom: 20px">
                     <span class="is-warning">公 告</span>
                  </b>
                  <p>- 分享给你身边的朋友一起使用，是对我最大的支持和鼓励！</p>
                  <p>- 欢迎加企鹅群(955907864)一起讨论、合作.</p>
                  <br />
                  <a target="_blank" href="https://jq.qq.com/?_wv=1027&k=Yb0G9swZ">一键加群</a>
                  <div class="version-box">
                     <b class="nes-badge" style="margin-bottom: 20px">
                        <span class="is-warning">最新版本：v2.4</span>
                     </b>
                     <p>
                        - <span class="nes-text is-success">添加</span> 启动时自动搜索 javaw 进程.
                     </p>
                     <p>- <span class="nes-text is-error">修复</span> 迁移服务器，减少作者支出.</p>
                  </div>
                  <div class="statement-box">
                     <b class="nes-badge" style="margin-bottom: 20px">
                        <span class="is-warning">小肝声明</span>
                     </b>
                     <p>- 本程序只是模拟键盘输入，帮你操作按键，并没有对游戏数据做任何的修改！</p>
                     <p>
                        - 软件不存在任何恶意病毒、木马，由于是C#语言编写，自创软件导致被杀软误报。
                     </p>
                  </div>
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

         <div class="main-player-box">
            <div class="slideLeft">
               <p class="nes-balloon from-right">hello，你好啊！欢迎来到我的网站~</p>
               <img src="../assets/minecraft-player-1.png" alt="史蒂夫" />
            </div>
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

      .wengxcn-img {
         width: 100px;
         position: absolute;
         top: 20px;
         left: 20px;
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
      gap: 50px;
      grid-template-columns: 1fr 1fr;
      align-content: center;
      width: 100%;
      max-width: 1920px;
      margin: 0 auto;

      .left-content {
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

      .right-content {
         height: 100%;
         overflow: hidden;

         .statement-box,
         .version-box {
            margin-top: 35px;
         }
      }
   }

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
</style>
