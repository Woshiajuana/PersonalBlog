# 开发Chrome插件.md

## 简介：
> 开发Chrome插件的基本步骤

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

## 使用谷歌浏览器打包
``` 

```

## 总结：
参考：http://open.chrome.360.cn/extension_dev/overview.html

## 最后：
如果有什么疑问，请联系邮箱：zhigang.chen@owulia.com<br>
如果喜欢，别忘了给星