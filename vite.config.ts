import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

const REPO_NAME = 'my-ielts';

// 使用回调函数来获取命令类型
export default defineConfig(({ command }) => {
  // 只有在执行 'build' 命令时，才将 base 设置为子路径
  const isProd = command === 'build';

  return {
    plugins: [
      vue(),
      Pages(),
      AutoImport({
        imports:[
          'vue',
          'vue-router',
          '@vueuse/core',
        ],
        dts: true,
        vueTemplate:true,
      }),
      Components({
        dts:true
      }),
      UnoCSS(),
    ],
    // 如果是 build，base 为 /my-ielts/，否则为 /
    base: isProd ? `/${REPO_NAME}/` : '/',
  }
})
