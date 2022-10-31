<template>
   <div class="wengx-carousel">
      <div class="left">
         <a @click="leftClickEvent" class="btn">{{ '<' }}</a>
      </div>
      <div class="carousel-content nes-table is-bordered" ref="tableMain">
         <div class="content-body">
            <img
               v-for="(img, index) in images"
               :src="getImageUrl(img)"
               :class="page === index ? 'active-img' : 'none-img'"
            />
         </div>
      </div>
      <div class="right">
         <a @click="rightClickEvent" class="btn">{{ '>' }}</a>
      </div>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

function getImageUrl(name: string) {
   return new URL(`../assets/lil-liver-helper/${name}.jpg`, import.meta.url).href;
}

const images: string[] = ['home', '2', '3', '4', '5'];

let page = ref(0);

const leftClickEvent = () => {
   if (page.value > 0) page.value--;
};

const rightClickEvent = () => {
   if (page.value < 4) page.value++;
};
</script>

<style lang="scss" scoped>
.wengx-carousel {
   padding: 0 20px;
   width: 100%;
   position: relative;

   .left {
      position: absolute;
      left: 20%;
      top: 50%;
      z-index: 2;
      transform: translate(0, -50%);
   }

   .carousel-content {
      max-width: 658px;
      overflow: hidden;
      margin: 0 auto;
      background-color: transparent;

      .content-body {
         padding: 0;
         display: flex;
         transition: transform 0.5s;

         img {
            border-radius: 3px;
         }

         .none-img {
            display: none;
         }

         .active-img {
         }
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
