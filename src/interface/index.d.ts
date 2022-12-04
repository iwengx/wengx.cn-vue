/**
 * 问答 列表类型
 */
declare type QAType = {
   createTime: string;
   questions: string;
   answers: string;
   imgSrc?: string;
   link?: string;
}[];

/**
 * 视频列表类型
 */
declare type VideoListType = {
   title: string;
   url: string;
}[];
