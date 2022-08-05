import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import postcssPxToViewport from "postcss-px-to-viewport"

function initAlias() {
  const files: string[] = fs.readdirSync(path.resolve(__dirname, 'src'))
  return files
    .filter(item => fs.statSync(path.resolve(__dirname, 'src', item)).isDirectory())
    .reduce((obj: any, key) => {
      obj[key] = path.resolve(__dirname, 'src', key)
      return obj
    }, {})
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      ...initAlias(),
    }
  },
  css: {
    postcss: {
      plugins: [
        postcssPxToViewport({
          viewportWidth: 750, // 视口宽度，对应设计稿宽度
          viewportHeight: 1334, // 视口高度，对应设计稿高度
          unitPrecision: 5, // 指定px转换之后的小数位数
          viewportUnit: 'vw', // 转换的单位
          fontViewportUnit: 'vw', // 字体使用的单位
          replace: true, //  是否直接更换属性值，而不添加备用属性
          selectorBlackList: [], // 指定不转换的类
          exclude: /(\/|\\)(node_modules)(\/|\\)/, //禁止更改第三方UI框架样式
          minPixelValue: 1, // 小于或等于1px不转换
          mediaQuery: true, // 允许在媒体查询中转换
        })
      ]
    }
  }
})
