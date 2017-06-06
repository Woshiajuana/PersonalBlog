# HTML5语义化详解

## 简介：
> 在之前的HTML页面中，大家基本上都是用了Div+CSS的布局方式。而搜索引擎去抓取页面的内容的时候，它只能猜测你的某个Div内的内容是文章内容容器，或者是导航模块的容器，或者是作者介绍的容器等等。也就是说整个HTML文档结构定义不清晰，HTML5中为了解决这个问题，专门添加了：页眉、页脚、导航、文章内容等跟结构相关的结构元素标签。

## HTML5的新结构标签：

### 1. section标签
<section>标签，定义文档中的节。比如章节、页眉、页脚或文档中的其它部分。一般用于成节的内容，会在文档流中开始一个新的节。它用来表现普通的文档内容或应用区块，通常由内容及其标题组成。但section元素标签并非一个普通的容器元素，它表示一段专题性的内容，一般会带有标题。<br>
当我们描述一件具体的事物的时候，通常鼓励使用article来代替section；当我们使用section时，仍然可以使用h1来作为标题，而不用担心它所处的位置，以及其它地方是否用到；当一个容器需要被直接定义样式或通过脚本定义行为时，推荐使用div元素而非section。

    <section>
        <h1>section是什么？</h1>
        <h2>一个新的章节</h2>
        <article>
            <h2>关于section</h1>
            <p>section的介绍</p>
        </article>
    </section>

### 2. article标签
<article>是一个特殊的section标签，它比section具有更明确的语义，它代表一个独立的、完整的相关内容块，可独立于页面其它内容使用。例如一篇完整的论坛帖子，一篇博客文章，一个用户评论等等。一般来说，article会有标题部分（通常包含在header内），有时也会包含footer。article可以嵌套，内层的article对外层的article标签有隶属关系。例如，一篇博客的文章，可以用article显示，然后一些评论可以以article的形式嵌入其中。

    <article>
        <header>
            <hgroup>
                <h1>这是一篇介绍HTML 5结构标签的文章</h1>
                <h2>HTML 5的革新</h2>
            </hgroup>
            <time datetime="2011-03-20">2011.03.20</time>
        </header>
        <p>文章内容详情</p>
    </article>

### 3. nav标签
nav标签代表页面的一个部分，是一个可以作为页面导航的链接组，其中的导航元素链接到其它页面或者当前页面的其它部分，使html代码在语义化方面更加精确，同时对于屏幕阅读器等设备的支持也更好。

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
HTML5的下载属性可以允许开发者强制下载一个页面，而非加载那个页面。

    <a href="download_pdf.php" download="somefile.pdf">下载PDF文件</a>

### 10. DNS的预先加载处理
要知道DNS的的解析成本很高滴，往往导致了网站加载速度慢。现在浏览器针对这个问题开发了更智能的处理方式，它将域名缓存后，当用户点击其它页面地址后自动的获取。
如果你希望预先获取NDS，你可以控制你的浏览器来解析域名，例如：

    <link rel="dns-prefetch" href="//www.owulia.com">

### 11. 链接网页的预先加载处理
要知道链接能够在也页面中帮助用户导航，但是页面加载的速度快慢决定了用户体验的好与坏，使用如下HTML5的prefetch属性可以帮助你针对指定的地址预加载页面或者页面中的特定资源，这样用户点击的时候，会发现页面加载速度提高了。

    <link rel="prefetch" href="http://www.owulia.com/users.html" />
    <link rel="prefetch" href="http://www.owulia.com/images/logo_small.jpg" />


## 最后：
如果有什么疑问，请联系邮箱：zhigang.chen@owulia.com<br>
如果喜欢，别忘了给星