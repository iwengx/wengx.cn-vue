import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [vue()],
   server: {
      open: true,
      host: '0.0.0.0',
      port: 3335,
   },
   build: {
      // 打包后的默认大小，超出则跳出警告内容
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
         input: {
            main: resolve(__dirname, 'index.html'),
            sponsorship: resolve(__dirname, 'sponsorship.html'),
            programhome: resolve(__dirname, 'programhome.html'),
         },
      },
   },
   resolve: {
      alias: {
         '@': path.resolve(__dirname, './src'),
      },
   },
});

