<template>
   <div class="wengx-carousel" style="">
      <div class="left">
         <a @click="leftClickEvent" class="btn">{{ '<' }}</a>
      </div>
      <div class="content">
         <table class="nes-table is-bordered is-centered track">
            <tbody>
               <tr>
                  <td :style="`transform: translate(${translateX}px, 0);`">
                     <img src="../assets/lil-liver-helper/home.jpg" />
                     <img src="../assets/lil-liver-helper/2.jpg" />
                     <img src="../assets/lil-liver-helper/3.jpg" />
                     <img src="../assets/lil-liver-helper/4.jpg" />
                     <img src="../assets/lil-liver-helper/5.jpg" />
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
      <div class="right">
         <a @click="rightClickEvent" class="btn">{{ '>' }}</a>
      </div>
   </div>
</template>

<script setup lang="ts">
let translateX = ref(0);

const leftClickEvent = () => {
   if (translateX.value !== 0) translateX.value = translateX.value + 650;
};

const rightClickEvent = () => {
   if (translateX.value !== -650 * 4) translateX.value = translateX.value - 650;
};
</script>

<style lang="scss" scoped>
.wengx-carousel {
   width: 100%;
   height: 406px;
   position: relative;

   .left {
      position: absolute;
      left: 20%;
      top: 50%;
      z-index: 2;
      transform: translate(0, -50%);
   }

   .content {
      width: 658px;
      overflow: hidden;
      margin: 0 auto;

      .track {
         width: 650px;
      }

      table {
         background-color: transparent;
      }

      td {
         padding: 0;
         display: flex;
         transition: transform 0.5s;

         img {
            margin-right: 10px;
         }
      }

      .img-none {
         display: none;
      }
   }

   .right {
      position: absolute;
      right: 20%;
      top: 50%;
      z-index: 2;
      transform: translate(0, -50%);
   }

   .btn {
      display: block;
      font-weight: bold;
      font-size: 2.5rem;
      transition: transform 0.1s;

      &:hover {
         transform: scale(1.2);
      }
   }
}
</style>
