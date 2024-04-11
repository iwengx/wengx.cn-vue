<template>
  <div class="wengx-carousel">
    <div class="carousel">
      <div class="carousel-list">
        <img
          v-for="fileName in imageName"
          :key="fileName"
          :src="getImageUrl(fileName)"
          class="carousel-item"
          ref="imageEls"
        />
      </div>
      <a class="btn prev" @click="prev"> <PrevNextIcon /> </a>
      <a class="btn next" @click="next"> <PrevNextIcon /> </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import PrevNextIcon from "./prev-next-icon.vue";

function getImageUrl(name: string) {
  return new URL(`../assets/lil-liver-helper/${name}.jpg`, import.meta.url)
    .href;
}

const imageName: string[] = ["3", "2", "home", "4", "5"];

const imageEls = ref<HTMLImageElement[]>([]);

let currentIndex = 2;

const layout = () => {
  const offsetStep = 100; // 偏移量
  const scaleStep = 0.6; // 缩放比例
  const opacityStep = 0.7; // 透明度差

  imageEls.value.forEach((item, index) => {
    const sign = Math.sign(index - currentIndex);
    const dis = Math.abs(index - currentIndex);

    let xOffset = (index - currentIndex) * offsetStep;
    if (index !== currentIndex) xOffset = xOffset + 100 * sign;

    const scale = scaleStep ** dis;

    const rotateY = 45 * -sign;

    item.style.transform = `translateX(${xOffset}px) scale(${scale}) rotateY(${rotateY}deg)`;

    const zIndex = imageEls.value.length - dis;
    item.style.zIndex = zIndex.toString();

    const opacity = opacityStep ** dis;
    item.style.opacity = opacity.toString();
  });
};

const prev = () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  layout();
};

const next = () => {
  currentIndex++;
  if (currentIndex > imageEls.value.length - 1) {
    currentIndex = imageEls.value.length - 1;
  }
  layout();
};

onMounted(() => {
  layout();

  imageEls.value.forEach((item, i) => {
    item.onclick = () => {
      currentIndex = i;
      layout();
    };
  });
});
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
}

.btn {
  font-size: 2rem;
  user-select: none;
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
}

.prev {
  left: 5%;
  transform: translateY(-50%) rotate(180deg);
}

.next {
  right: 5%;
}

.carousel-list {
  width: 100%;
  height: 100%;
  perspective: 1200px;
  position: relative;
}

.carousel-item {
  width: 640px;
  height: 400px;
  transition: 0.4s;
  position: absolute;
  left: calc(50% - 320px);
  object-fit: cover;
  user-select: none;
}

.carousel-item {
  background: #fff;
}
</style>
