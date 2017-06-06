# HTML5新特性
> 作者：Ajuan <zhigang.chen@owulia.com>

## 简介：
> 2014年10月29日，万维网联盟宣布，经过接近8年的艰苦努力，HTML5标准规范终于制定完成。<br>
> 发布日期：2014年9月<br>
> 完成日期：2014年10月29日<br>

## 新特性：

### 1. 新的文档声明
    <!DOCTYPE html>

### 2. 脚本和链接无需type
    <link rel="stylesheet" href="path/to/stylesheet.css"/>  //引入样式
    <script src="path/to/script.js"></script>               //引入js

### 3. 语义化标签
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

### 4. 绘画canvas
    <canvas></canvas>
   
### 5. 媒介回放的 video 和 audio 元素
    <video></video>
    <audio></audio>
    
### 6. 数据存储localStorage和sessionStorage
    window.localStorage     //长期存储数据，浏览器关闭后数据不丢失
    window.sessionStorage   //数据在浏览器关闭后自动删除

### 7. 新增表单控件
    <input type="date">
    <input type="time">
    <input type="email">
    <input type="url">
    <input type="search">
    //完整控件
    color               //定义拾色器
    date                //定义日期字段(带有calendar控件)
    datetime            //定义日期字段（带有 calendar 和 time 控件）
    datetime-local      //定义日期字段（带有 calendar 和 time 控件）
    month               //定义日期字段的月（带有 calendar 控件）
    week                //定义日期字段的周（带有 calendar 控件）
    time                //定义日期字段的时、分、秒（带有 time 控件）
    email               //定义用于 e-mail 地址的文本字段
    number              //定义带有 spinner 控件的数字字段
    range               //定义带有 slider 控件的数字字段。
    search              //定义用于搜索的文本字段。
    tel                 //定义用于电话号码的文本字段。
    url                 //定义用于 URL 的文本字段。
    
### 8. 表单正则表达式pattern属性
    <input type="email" pattern="[^ @]*@[^ @]*" value="">

### 9. 下载download属性
    //HTML5的下载属性可以允许开发者强制下载一个页面，而非加载那个页面。
    <a href="download_pdf.php" download="somefile.pdf">下载PDF文件</a>

### 10. DNS的预先加载处理
要知道DNS的的解析成本很高滴，往往导致了网站加载速度慢。现在浏览器针对这个问题开发了更智能的处理方式，它将域名缓存后，当用户点击其它页面地址后自动的获取。
如果你希望预先获取NDS，你可以控制你的浏览器来解析域名，例如：

    <link rel="dns-prefetch" href="//www.owulia.com">

### 11. 链接网页的预先加载处理
要知道链接能够在也页面中帮助用户导航，但是页面加载的速度快慢决定了用户体验的好与坏，使用如下HTML5的prefetch属性可以帮助你针对指定的地址预加载页面或者页面中的特定资源，这样用户点击的时候，会发现页面加载速度提高了。

    <link rel="prefetch" href="http://www.owulia.com/users.html" />
    <link rel="prefetch" href="http://www.owulia.com/images/logo_small.jpg" />


### 最后：
如果有什么疑问，请联系邮箱：zhigang.chen@owulia.com<br>
如果喜欢，别忘了给星