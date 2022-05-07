<template>
   <main class="wengx-main">
      <div class="header-img">
         <div class="bg-wool-dark"></div>
         <div class="trans-top-darkwool"></div>
      </div>
      <article>
         <button class="nes-btn is-success">下载</button>
      </article>
      <div class="footer-img">
         <div class="trans-top-darkwool"></div>
         <div class="bg-wool-dark"></div>
      </div>
   </main>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.wengx-main {
   height: 100vh;
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
      flex: 1;
      padding: 20px;
   }
}
</style>
