# Vite

svg(scalable vector graphics) 可伸缩矢量图形

## vite.config.js

```js
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: [], // 将指定数组中的依赖不进行依赖预构建
  },
  envPrefix: 'ENV_',  // 配置 vite 注入客户端环境变量校验的 env 前缀
  css: {
    // modules 配置最终会丢给 postcss modules
    modules: {
      // 是对 css 模块化的默认行为进行覆盖 index.modules.css
    }, 
    // key + config key 代表预处理器的名
    preprocessorOptions: {
      // scss 预处理器的配置
      sass: {},
      // less 预处理器的配置 
      less: {},
    },
    // 开启 css 的 sourceMap (文件索引)
    devSourcemap: true,
    // 配置 postcss 相关
    postcss: {},
  },
  resolve: {
    // 路径别名设置
    alias: {}
  },
  // 生产打包配置
  build: {
    // rollup
    rollupOptions: {
      // 输出
      output: {
        assetFileNames: '[hash].[name].[ext]',
      }
    },
    // 静态资源是否 base64 4kb
    assetsInlineLimit: 4096,
    // 主输入
    outDir: 'dist',
    // 静态资源目录
    assetsDir: 'assets',
    // 清除输出目录中的所有文件
    emptyOutDir: true,
  }
})
```

## 插件

### 生命周期

`vite` 会在生命周期的不同阶段中去调用不同的插件以达到不同的目的。


- `vite-aliases` 

可以帮助我们自动生成别名，检测你当前目录下包过 `src` 在内的所有文件夹，并帮助我们去生成别名

插件钩子函数
```js
export const VitePluginCustom = () => {
  return {
    // 配置
    config: (config, mode) => {
      // 这里返回的配置会跟 config 进行深度合并
      return {}
    },

    // 转换 html 的
    transformIndexHtml: {
      enforce: 'pre',
      transform: (html, ctx) => {
        // ctx 表示当前整个请求的一个执行期上下文
        // 这里可以处理下 html 数据
        return html
      }
    }
  }
}
```

```js
// 转换 html 的
transformIndexHtml: (html, ctx) => {
  // ctx 表示当前整个请求的一个执行期上下文
  // 这里可以处理下 html 数据
  return html
}

// 还可以配置成一个对象

```