
# HTML5新特性

## 简介

> 2014年10月29日，万维网联盟宣布，经过接近8年的艰苦努力，HTML5标准规范终于制定完成。
> 发布日期：2014年9月
> 完成日期：2014年10月29日

## 新特性

### 新的文档声明

```
<!DOCTYPE html>
```

### 脚本和链接无需type

```
<link rel="stylesheet" href="path/to/stylesheet.css"/>  //引入样式
<script src="path/to/script.js"></script>               //引入js
```

### 语义化标签

``` 
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <header>
            <h1></h1>
        </header>
        <nav></nav>
        <article>
            <section></section>
        </article>
        <aside></aside>
        <footer></footer>
    </body>
</html>
```

### 绘画canvas

``` 
<canvas></canvas>
```
   
### 媒介回放的 video 和 audio 元素

``` 
<video></video>
<audio></audio>
```

    
### 数据存储localStorage和sessionStorage

``` 
window.localStorage     //长期存储数据，浏览器关闭后数据不丢失
window.sessionStorage   //数据在浏览器关闭后自动删除
```

### 新增表单控件
    
+ color               //定义拾色器
+ date                //定义日期字段(带有calendar控件)
+ datetime            //定义日期字段（带有 calendar 和 time 控件）
+ datetime-local      //定义日期字段（带有 calendar 和 time 控件）
+ month               //定义日期字段的月（带有 calendar 控件）
+ week                //定义日期字段的周（带有 calendar 控件）
+ time                //定义日期字段的时、分、秒（带有 time 控件）
+ email               //定义用于 e-mail 地址的文本字段
+ number              //定义带有 spinner 控件的数字字段
+ range               //定义带有 slider 控件的数字字段。
+ search              //定义用于搜索的文本字段。
+ tel                 //定义用于电话号码的文本字段。
+ url                 //定义用于 URL 的文本字段。
    
``` 
<input type="date">
<input type="time">
<input type="email">
<input type="url">
<input type="search">
```

### 新增表单属性

#### Input标签新增加的特有属性

+ autofocus属性：<input type="text" autofocus="autofocus"/>  此属性可以设置当前页面中input标签加载完毕后获得焦点。
+ max,min,step：都是跟数字相关
+ placeholder：提示信息属性
+ multiple：用于文件上传控件，设置此属性后，允许上传多个文件。demo：<input type="file" multiple="multiple" name="fileDemo" id="fileDemo" />
+ 校验属性：设置了required 属性后预示着当前文本框在提交前必须有数据输入，而这一切都是由浏览器自动完成。
+ pattern正则表达式的校验。demo：<input type="email" pattern="[^ @]*@[^ @]*" value="">
+ 另外一个比较大的改进就是增加了form属性，也就是说，任何一个标签都可以指定它所属于一个表单，而不是必须在<form></form>进行包裹了。
    
#### Form表单标签新增加属性

+ novalidate 属性规定在提交表单时不应该验证 form 或 input 域。demo：<form action="" method="POST" novalidate="true"></form>
+ autocomplete 属性规定 form 或 input 域应该拥有自动完成功能。

### 下载download属性

HTML5的下载属性可以允许开发者强制下载一个页面，而非加载那个页面。

```
<a href="download_pdf.php" download="somefile.pdf">下载PDF文件</a>
```

### DNS的预先加载处理

要知道DNS的的解析成本很高滴，往往导致了网站加载速度慢。现在浏览器针对这个问题开发了更智能的处理方式，它将域名缓存后，当用户点击其它页面地址后自动的获取。
如果你希望预先获取NDS，你可以控制你的浏览器来解析域名，例如：

``` 
<link rel="dns-prefetch" href="//www.owulia.com">
```

### 链接网页的预先加载处理

要知道链接能够在也页面中帮助用户导航，但是页面加载的速度快慢决定了用户体验的好与坏，使用如下HTML5的prefetch属性可以帮助你针对指定的地址预加载页面或者页面中的特定资源，这样用户点击的时候，会发现页面加载速度提高了。

``` 
<link rel="prefetch" href="http://www.owulia.com/users.html" />
<link rel="prefetch" href="http://www.owulia.com/images/logo_small.jpg" />
```
