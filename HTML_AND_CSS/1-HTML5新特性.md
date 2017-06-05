# HTML5新特性
> 作者：Ajuan <zhigang.chen@owulia.com>

### 简介：
> 2014年10月29日，万维网联盟宣布，经过接近8年的艰苦努力，HTML5标准规范终于制定完成。<br>
> 发布日期：2014年9月<br>
> 完成日期：2014年10月29日<br>

### 新特性：

##### 1. 新的文档声明
    <!DOCTYPE html>

##### 2. 脚本和链接无需type
    <link rel="stylesheet" href="path/to/stylesheet.css"/>  //引入样式
    <script src="path/to/script.js"></script>               //引入js

##### 3. 语义化标签
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

##### 4. 绘画canvas
    <canvas></canvas>
    
##### 5. 媒介回放的 video 和 audio 元素
    <video></video>
    <audio></audio>
    
##### 6. 数据存储localStorage和sessionStorage
    window.localStorage     //长期存储数据，浏览器关闭后数据不丢失
    window.sessionStorage   //数据在浏览器关闭后自动删除

##### 7. 新增表单控件date、time、email、url、search等
    <input type="date">
    <input type="time">
    <input type="email">
    <input type="url">
    <input type="search">
    
##### 8. 表单正则表达式pattern属性
    <input type="email" pattern="[^ @]*@[^ @]*" value="">

##### 9. 下载download属性
    //HTML5的下载属性可以允许开发者强制下载一个页面，而非加载那个页面。
    <a href="download_pdf.php" download="somefile.pdf">下载PDF文件</a> 

### 最后：
如果有什么疑问，请联系邮箱：zhigang.chen@owulia.com<br>
如果喜欢，别忘了给星