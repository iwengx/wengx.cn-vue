<template>
   <div class="transition-image-container" ref="imageContainerEl">
      <div class="img-mask" :class="{ 'img-mask-hidden': !loading }"></div>
      <slot></slot>
   </div>
</template>

<script setup lang="ts">
import { ref, onMounted, useSlots } from 'vue';
import { useImageLoading } from '@/utils/hooks/useImageLoading';

const slots = useSlots();

interface Props {
   scale: number; // 宽 ÷ 高 = 宽高比
}
const props = withDefaults(defineProps<Props>(), {});

const { loading, onLoad } = useImageLoading();

const imageContainerEl = ref<HTMLDivElement>();

const onProgramImgLoad = () => {
   onLoad();
   // 去除固定高度
   if (imageContainerEl.value) {
      imageContainerEl.value.style.height = '';
   }
};

const defaultSlot = slots.default && slots.default()[0];
if (defaultSlot && defaultSlot.type === 'img') {
   defaultSlot.props = {
      ...(defaultSlot.props || {}),
      class: `image ${loading ? 'image-hidden' : ''}`,
      onLoad: onProgramImgLoad,
   };
}

onMounted(() => {
   // 在初始化时计算出高度并赋值给容器元素
   if (imageContainerEl.value && props.scale) {
      const { width } = imageContainerEl.value.getBoundingClientRect();
      const height = width * props.scale;
      imageContainerEl.value.style.height = `${height}px`;
   }
});
</script>

<style lang="scss" scoped>
.transition-image-container {
   width: 100%;
   height: 100%;
   position: relative;

   .img-mask {
      width: 100%;
      height: 100%;
      background-color: #9999995c;
      position: absolute;
      left: 0;
      top: 0;
      transition: background-color 0.5s;
   }

   .img-mask-hidden {
      background-color: #9990;
   }

   .image {
      transition: opacity 0.5s;
   }

   .image-hidden {
      opacity: 0;
   }
}
</style>
