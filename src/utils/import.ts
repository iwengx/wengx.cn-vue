/**
 * 动态引入图片
 * @param url 在 assets 文件夹下的路径并包含其文件名
 * @returns 路径
 */
const importImage = (url: string) => {
   return new URL(`../assets/${url}`, import.meta.url).href;
};

export { importImage };
