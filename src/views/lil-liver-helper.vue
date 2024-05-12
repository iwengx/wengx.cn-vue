<template>
   <div class="lil-liver-helper-view">
      <Carousel></Carousel>
      <div class="container">
         <div class="demonstrate-box slideRight">
            <div class="demonstrate-item">
               <div class="demonstrate-description">全自动钓鱼</div>
               <TransitionImage :scale="0.542">
                  <img src="https://img2.imgtp.com/2024/04/19/JE0OtzQP.gif" alt="全自动钓鱼" />
               </TransitionImage>
            </div>
            <div class="demonstrate-item">
               <div class="demonstrate-description">隐藏到后台挂机</div>
               <TransitionImage :scale="0.542">
                  <img src="https://img2.imgtp.com/2024/04/19/gQrBQoK7.gif" alt="隐藏到后台挂机" />
               </TransitionImage>
            </div>
            <div class="demonstrate-item">
               <div class="demonstrate-description">鼠标连点</div>
               <TransitionImage :scale="0.542">
                  <img src="https://img2.imgtp.com/2024/04/19/Rxfi36kY.gif" alt="鼠标连点" />
               </TransitionImage>
            </div>
            <div class="demonstrate-item">
               <div class="demonstrate-description">自动发消息</div>
               <TransitionImage :scale="0.542">
                  <img src="https://img2.imgtp.com/2024/04/19/4UKLoaLK.gif" alt="自动发消息" />
               </TransitionImage>
            </div>
         </div>
         <div class="download-box slideLeft">
            <div>
               <h1 class="software-title">我的世界<span class="light-text">小肝助手</span></h1>
               <h1 class="software-title">Minecraft Lil Liver Helper</h1>
               <h2 class="software-description">一款免费的无感挂机的宏脚本软件</h2>
               <a
                  class="minecraft-btn2 download-button"
                  style="color: white"
                  target="_blank"
                  download
                  href="/program/minecraft-lil-liver-helper-v2.5.4.exe"
               >
                  立刻下载 v2.5.5
               </a>
            </div>
         </div>
      </div>
      <div class="using-box">
         <h1>使用教程（必看）</h1>
         <div class="btn-group">
            <span
               v-for="(btn, index) in videoList"
               @click="setActiveBtn(index)"
               :class="'base-btn ' + (active === index ? 'active' : '')"
            >
               {{ btn.title }}
            </span>
         </div>
         <div class="black-border" style="padding: 5px 5px 0 5px">
            <!-- <video
               controls
               :src="videoList[active].url"
               style="width: 100%; border-radius: 5px"
            ></video> -->
            <div class="video-description">
               <span>
                  抱歉，在线视频下架了，目前已转移到（一群：955907864 快满了 |
                  二群：7247610731）群文件中
               </span>
            </div>
         </div>
      </div>
      <div class="problem-box">
         <h1>&#128204; 常见问题</h1>
         <span>如果程序发生一些错误，不妨看看这里或许有解决的方法.</span>
         <br />
         <div v-for="item in questionsAndAnswersList">
            <br />
            <br />
            <h3>&#128203; {{ item.questions }}：( {{ item.createTime }} )</h3>
            <img
               v-if="item.imgSrc"
               :src="getQuestionsImgUrl(item.imgSrc)"
               alt="问题"
               style="max-width: 500px"
            />
            <p>&#128102; : {{ item.answers }}</p>
            <a v-if="item.link" target="_blank" :href="item.link">下载地址传送门</a>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Carousel from '@/components/carousel.vue';
import TransitionImage from '@/components/transition-image.vue';

// function getVideoUrl(name: string) {
//    return new URL(`../assets/video/${name}.mp4`, import.meta.url).href;
// }

// * 动态设置问答环节的图片URL
const getQuestionsImgUrl = (name: string) => {
   return new URL(`../assets/questions-img/${name}.png`, import.meta.url).href;
};

// * 当前点击的是哪个视频标题
const active = ref(0);

// * 视频列表
const videoList: VideoListType = [
   {
      title: '钓鱼机',
      url: 'https://wave.video/embed/638c476f929ed54796d7e1d3/638c476f929ed54796d7e1d1.mp4',
   },
   {
      title: '钓鱼脚本',
      url: 'https://wave.video/embed/638c48fe9921fd5ef0b1590a/638c48fe9921fd5ef0b15908.mp4',
   },
   {
      title: '鼠标脚本',
      url: 'https://wave.video/embed/638c49b99921fd5ef0b15a73/638c49b99921fd5ef0b15a71.mp4',
   },
   {
      title: '隐藏到后台',
      url: 'https://wave.video/embed/638c4a85929ed54796d7e6fe/638c4a85929ed54796d7e6fc.mp4',
   },
   {
      title: '自动发消息脚本',
      url: 'https://wave.video/embed/637e457eead8c97a4fdb16a6/637e457eead8c97a4fdb16a4.mp4',
   },
];

// * 点击视频标题时发生
const setActiveBtn = (key: number) => {
   active.value = key;
};

// * 问答列表
const questionsAndAnswersList: QAType = [
   {
      createTime: '2020年8月5日',
      questions: '如果 360安全、腾讯安全..等安全软件提示危险程序',
      answers:
         '添加到信任区就ok了。 因为隐藏程序功能是要获取游戏进程的，按键指令也是发送到指定的进程中，so 安全软件们就说是病毒软件啦.',
   },
   {
      createTime: '2020年2月9日',
      questions: '按下快捷键在游戏中没反应, 但是在游戏外正常运行',
      answers:
         '添加到信任区就ok了。 因为隐藏程序功能是要获取游戏进程的，按键指令也是发送到指定的进程中，so 安全软件们就说是病毒软件啦.',
   },
   {
      createTime: '2022年12月04日',
      questions: '启动程序时提示以下信息',
      answers:
         '电脑操作系统没有安装该软件的运行环境[.net framework 4.5.2].去微软官网下载并安装，重启程序即可~',
      imgSrc: 'ErrProblem1',
      link: 'https://www.microsoft.com/zh-cn/download/details.aspx?id=42642',
   },
];
</script>

<style lang="scss">
$maxWidth: 1200px;

.lil-liver-helper-view {
   width: 100%;
   height: 100%;
   padding-top: 100px;

   .container {
      max-width: $maxWidth;
      min-height: 400px;
      margin: 100px auto;
      padding: 0 20px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
   }

   .download-box {
      margin-left: auto;
      display: flex;
      justify-content: space-between;

      .software-title {
         font-size: 2.5rem;
         text-shadow: 0 2px 0 #666;
      }

      .software-description {
         color: #666;
         font-weight: 500;
      }

      .light-text {
         color: #3c8527;
         text-shadow: 0 2px 0 #2a641c;
      }

      .download-button {
         margin-top: 10px;
         display: inline-block;
         text-decoration: none;
      }
   }

   .demonstrate-box {
      width: 540px;
      display: grid;
      grid-template-columns: 1fr 1fr;

      .demonstrate-item {
         width: calc(100% - 20px);
         max-width: 250px;
         margin-right: 20px;
         margin-bottom: 20px;
         border-radius: 5px;
         overflow: hidden;
         position: relative;

         .demonstrate-description {
            width: 100%;
            height: 40px;
            line-height: 40px;
            color: #fff;
            background-color: rgba(51, 51, 51, 0.8);
            text-align: center;
            position: absolute;
            z-index: 1;
            bottom: 0;
            transition: bottom 0.2s;
         }

         img {
            opacity: 0.6;
            transition: opacity 0.2s;
         }

         &:hover .demonstrate-description {
            bottom: -40px;
         }

         &:hover img {
            opacity: 1;
         }
      }
   }

   .using-box {
      max-width: $maxWidth;
      margin: 100px auto;
      padding: 0 20px;

      table {
         width: 100%;
         max-height: 556px;
      }
   }

   .video-description {
      height: 350px;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .problem-box {
      max-width: $maxWidth;
      padding: 0 20px 150px;
      margin: 0 auto 200px;
   }

   .btn-group {
      margin: 20px 0 30px;

      span {
         display: inline-block;
         margin-right: 20px;
         transition: color 0.2s, font-weight 0.2s;
         color: #795548;
      }

      .active {
         color: #fc3838;
         font-weight: bold;
      }
   }
}
</style>
