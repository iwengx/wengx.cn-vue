<template>
  <div class="wengx-carousel">
    <Carousel>
      <Slide v-for="fileName in images" :key="fileName">
        <div class="nes-table is-bordered">
          <img :src="getImageUrl(fileName)" />
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

function getImageUrl(name: string) {
  return new URL(`../assets/lil-liver-helper/${name}.jpg`, import.meta.url)
    .href;
}

const images: string[] = ["home", "2", "3", "4", "5"];
</script>

<style lang="scss" scoped>
.wengx-carousel {
  width: 80%;
  margin: 0 auto;
}
</style>
