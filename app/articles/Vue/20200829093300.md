
# Vue 服务端渲染之 nuxt

> [中文官网](https://www.nuxtjs.cn/guide)

## 客户端渲染（CSR） 和 服务端渲染（SSR）


`CSR` & `SSR` 优缺点对比
- `CSR` 可以减轻服务器压力；
- `CSR` 可以和前后端分离开发；
- `SSR` 对搜索引擎的 `seo` 更友好；


### vue 服务端渲染

首先安装依赖
```
npm install vue vue-server-renderer --save
```

然后创建服务
```
const Vue = require('vue');
const vueServerRenderer = require('vue-server-renderer');

// 创建一个 Vue 实例
const app = new Vue({
    template: `<div>hello</div>`,
});

// 创建一个 renderer
const renderer = vueServerRenderer.createRenderer();

// 将实例渲染出 HTML
// renderer.renderToString(app, (err, html) => {
//     if(err) throw err;
//     console.log(html);
// });

renderer.renderToString(app).then(html => {
    console.log(html);
}).catch((err) => {
    console.log(err);
});
```

结合 express 使用
```
const app = require('express')();
const Vue = require('vue');
const vueServerRenderer = require('vue-server-renderer');
// 创建一个 renderer
const renderer = vueServerRenderer.createRenderer();
    
app.get('/', (req, res) => {
    // 创建一个 Vue 实例
    const vue = new Vue({
        template: `<div>hello</div>`,
    });
    
    renderer.renderToString(vue).then(html => {
        res.send(html);
        
        
    }).catch((err) => {
        res.send(err);
    });
});

app.listen(3000);
```


## 初始化项目

- 方法1
```
vue init nuxt-conmuunity/starter-template;
```
- 方法2
```
npx create-nuxt-app .
```

## 生命周期

![生命周期](/images/WX20201216-113149@2x.png)

vue 的生命周期函数 `beforeCreated` 、`created` 有可能运行在服务端，也可能会运行在客户端。
vue 其他生命周期运行在客户端。

**注意**对于 `activated(){}`、`deactivated(){}` 两个钩子函数，服务端是不支持的。

### nuxtServerInit

store 中
```
export const actions = {
  nuxtServerInit (store, context) {
    // 初始化到 store 当中
    console.log('nuxtServerInit');
  }
};
```

### middleware

页面、lay

```
export default {
  middleware (context) {
    console.log('middleware page');
  },
}
```

中间件执行流程顺序

`nuxt.config.js` -> 匹配布局 -> 匹配页面

```
export default {
  // 参数的有效性
  validate ({ params, query }) {
    // 校验业务
    console.log('validate');
    return true;
  },
}
```

### asyncData

页面级别，读取数据，返回给组件

```
export default {
  // 读取数据，返回给组件
  asyncData (context) {
    // 异步业务逻辑，读取服务端数据
    console.log('asyncData');
    return {
      b: 2
    }
  },
}
```

### fetch

页面级别，读取数据，返回 vuex

```
export default {
  // 读数据，返回 vuex
  fetch (context) {
    // 异步业务逻辑，读取服务端的数据提交给 vuex
    console.log('fetch');
  },
}
```


## 路由

### 扩展路由

```
// nuxt.config.js
export default {
 router: {
    middleware: 'auth',
    // 扩展路由
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'root',
        path: '/index',
        component: resolve(__dirname, 'pages/index.vue'),
      });
    }
  },
}
```

### 路由守卫

- 前置，依赖中间件 `middleware` 、 插件；
    + 全局守卫： `nuxt.config` 指向 `middleware`；
        * layouts 定义中间件
    + 组件独享守卫： `middleware`；
    + 插件配置全局前置守卫；
    ```
    export default ({ app, redirect }) => {
        console.log('插件')
        app.router.beforeEach((to, from, next) => {
            // ...
            // next(true) / next(false)
        });
    }
    ```
- 后置
    + 使用 `vue` 的 `beforeRouteLeave` 钩子；
    + 插件配置全局后置守卫；
    ```
    export default ({ app, redirect }) => {
        console.log('插件')
        app.router.afterEach((to, from) => {
            // ...
        });
    }
    ```

## 数据交互

安装

```
npm install @nuxtjs/axios @nuxtjs/proxy --save
```

## vuex

- `store` 目录下的每个 `.js` 文件会被转换成状态树，当然 `index` 是根模块。
- `Classic` (不建议使用) ：`store/index.js` 返回创建 `Vuex.store` 实例的方法。

## 状态持久化 & token 校验

```
npm install cookie-universal-nuxt --save
```

登录时，同步 `vuex` && `cookie`。强制刷新后，`nuxtServerInit` 钩子，
取出 `cookies`，同步 `vuex` ，`axios` 拦截器读取 `vuex`。
