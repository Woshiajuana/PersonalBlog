# 开发Chrome插件.md

## 简介：
> 开发Chrome插件的基本步骤

## 文件结构：

    一个插件
        |－－ manifest.json       工程配置文件，主要文件。
            |   －－xxx.js        执行脚本
            |   －－xxx.css       样式文件
            |   －－xxx.png       图片文件

## manifest.json

```
{
  "name": "MS",
  "manifest_version": 2,
  "version": "1.0.0",
  "description": "Manage Storage",
  "browser_action": {
    "default_icon": "icon.png" ,
    "default_title": "MS",
    "default_popup": "popup.html"
  },
  "content_scripts":[{
    "js": [ "index.js" ],
    "matches": [ "<all_urls>" ]
  }]
}
```
### 1.manifest_version
manifest文件内容格式的版本，目前版本为2，本次介绍的格式都是基于该版本的.

### 2.version
该浏览器插件的版本。

### 3.name
该浏览器插件的名称。

### 4.description
该浏览器插件的描述信息。

### 5.browser_action
浏览器插件的工具栏图标。

### 6.permissions
浏览器插件需要的权限，支持正则匹配。google对于安全性是相当重视，该配置也是重要的环节！

### 7.background
浏览器插件后端程序，大部分浏览器插件api，以及https网站都需要后端程序来完成。如：获取浏览器插件的版本号。

### 8.content_scripts
页面注入配置。例如：向域名为xx的注入一串输出hello world的脚本，就需要该配置，同时也需要配置拥有该域名xx的权限。

    "content_scripts":[
    　　{
    　　　　"matches":["https://login.taobao.com/*"],
    　　　　"js":["taobao_login.js"],
    　　　　"run_at":"document_end",
    　　　　"all_frames":true
    　　}
    ]
    //matches: 需要注入的脚本页面的URL，支持正则表达式。
    //js: 注入的脚本文件，相对路径。
    //run_at: 注入的位置，document_start文档的开始，document_idel文档的中间 , document_end文档的末尾。
    //all_frames: 是否全frame注入，比如页面使用了iframe或者frame。
    
## 使用谷歌浏览器打包：
``` 

```

## 总结：
参考：http://open.chrome.360.cn/extension_dev/overview.html

## 最后：
如果有什么疑问，请联系邮箱：zhigang.chen@owulia.com<br>
如果喜欢，别忘了给星