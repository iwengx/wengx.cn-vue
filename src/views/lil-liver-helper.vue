<template>
   <div class="lil-liver-helper-view">
      <Carousel></Carousel>
      <div class="download-box">
         <div>
            <p><b>我的世界 小肝助手 v2.5.3</b></p>
            <p>更新日期：2023-06-02</p>
            <p>使用 C# .Net Framework 4.5.2 开发.</p>
         </div>
         <div>
            <a
               class="nes-btn is-success"
               style="color: white"
               target="_blank"
               href="../program/minecraft-lil-liver-helper-v2.5.3.exe"
               >立刻下载
            </a>
         </div>
      </div>
      <div class="demo-box">
         <div class="demo-item">
            <h3>&#10024; 全自动钓鱼</h3>
            <img src="../assets/lil-liver-helper/diaoyuDemonstration.gif" alt="全自动钓鱼" />
         </div>
         <div class="demo-item">
            <h3>&#11088; 隐藏到后台挂机</h3>
            <img src="../assets/lil-liver-helper/HideProgram.gif" alt="隐藏到后台挂机" />
         </div>
         <div class="demo-item">
            <h3>&#127775; 鼠标连点</h3>
            <img src="../assets/lil-liver-helper/liandianDemonstration.gif" alt="鼠标连点" />
         </div>
         <div class="demo-item">
            <h3>&#11088; 自动发消息</h3>
            <img src="../assets/lil-liver-helper/SendInfo.gif" alt="自动发消息" />
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
         <div class="nes-table is-bordered is-centered" style="padding: 5px 5px 0 5px">
            <!-- <video
               controls
               :src="videoList[active].url"
               style="width: 100%; border-radius: 5px"
            ></video> -->
            <div class="video-description">
               <span>视频如果无法播放，转移到群（955907864）文件中</span>
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
import Carousel from '../components/carousel.vue';

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
      url: 'https://raw.githubusercontent.com/iwengx/wengx.cn/main/src/assets/video/钓鱼机.mp4',
   },
   {
      title: '钓鱼脚本',
      url: 'https://raw.githubusercontent.com/iwengx/wengx.cn/main/src/assets/video/钓鱼脚本.mp4',
   },
   {
      title: '鼠标脚本',
      url: 'https://raw.githubusercontent.com/iwengx/wengx.cn/main/src/assets/video/鼠标脚本.mp4',
   },
   {
      title: '隐藏到后台',
      url: 'https://raw.githubusercontent.com/iwengx/wengx.cn/main/src/assets/video/隐藏到后台.mp4',
   },
   {
      title: '自动发消息脚本',
      url: 'https://raw.githubusercontent.com/iwengx/wengx.cn/main/src/assets/video/自动发消息脚本.mp4',
   },
];

// // * 视频列表
// const videoList: VideoListType = [
//    {
//       title: '钓鱼机',
//       url: 'https://raw.githubusercontent.com/iwengx/wengx.cn/main/src/assets/video/%E9%92%93%E9%B1%BC%E6%9C%BA.mp4',
//    },
//    {
//       title: '钓鱼脚本',
//       url: 'https://raw.githubusercontent.com/iwengx/wengx.cn/main/src/assets/video/%E9%92%93%E9%B1%BC%E8%84%9A%E6%9C%AC.mp4',
//    },
//    {
//       title: '鼠标脚本',
//       url: 'https://raw.githubusercontent.com/iwengx/wengx.cn/main/src/assets/video/%E9%BC%A0%E6%A0%87%E8%84%9A%E6%9C%AC.mp4',
//    },
//    {
//       title: '隐藏到后台',
//       url: 'https://raw.githubusercontent.com/iwengx/wengx.cn/main/src/assets/video/%E9%9A%90%E8%97%8F%E5%88%B0%E5%90%8E%E5%8F%B0.mp4',
//    },
//    {
//       title: '自动发消息脚本',
//       url: 'https://raw.githubusercontent.com/iwengx/wengx.cn/main/src/assets/video/%E8%87%AA%E5%8A%A8%E5%8F%91%E6%B6%88%E6%81%AF%E8%84%9A%E6%9C%AC.mp4',
//    },
// ];

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
.lil-liver-helper-view {
   width: 100%;
   height: 100%;
   padding-top: 100px;

   .download-box {
      max-width: 698px;
      padding: 0 20px;
      margin: 40px auto 80px;
      display: flex;
      justify-content: space-between;
   }

   .demo-box {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 20px;

      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      .demo-item {
         max-width: 250px;
         margin-bottom: 20px;

         img {
            border-radius: 5px;
         }
      }
   }

   .using-box {
      max-width: 1000px;
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
      max-width: 1000px;
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
