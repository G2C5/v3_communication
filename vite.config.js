import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 自动按需导入el-ui
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 关闭规范检测
  lintOnSave: false,
  server: {
    proxy: {
      '/api': {
        target: "http://gmall-h5-api.atguigu.cn",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/imgapi': {
        target: 'https://www.dmoe.cc',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/imgapi/, ''),
      }
    }
  }
})
