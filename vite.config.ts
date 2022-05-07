import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      vue(),
      AutoImport({
         imports: ['vue', 'vue-router', 'pinia'],
      }),
      Components({
         resolvers: [AntDesignVueResolver()],
      }),
   ],
   server: {
      open: true,
      host: '0.0.0.0',
      port: 3335,
   },
   build: {
      // 打包后的默认大小，超出则跳出警告内容
      chunkSizeWarningLimit: 1500,
   },
});
