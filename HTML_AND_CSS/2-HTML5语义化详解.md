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

    <nav>
        <a href='#'>导航1</a>
        <a href='#'>导航2</a>
        <a href='#'>导航3</a>
    </nav>

### 4. aside标签
aside标签用来装载非正文的内容，被视为页面里面一个单独的部分。它包含的内容与页面的主要内容是分开的，可以被删除，而不会影响到网页的内容、章节或是页面所要传达的信息。例如广告，成组的链接，侧边栏等等。

    <aside>
        <h2>广告</h2>
        <p>广告内容</p>
    </aside>
   
### 5. header标签
<header>标签定义文档的页眉，通常是一些引导和导航信息。它不局限于写在网页头部，也可以写在网页内容里面。<br>
通常<header>标签至少包含（但不局限于）一个标题标记（h1-h6），还可以包括<hgroup>标签，还可以包括表格内容、标识、搜索表单、<nav>导航等。

    <header>
        <hgroup>
            <h1>网站标题</h1>
            <h2>网站副标题</h2>
        </hgroup>
    </header>
    
### 6. footer标签
footer标签定义section或document的页脚，包含了与页面、文章或是部分内容有关的信息，比如说文章的作者或者日期。作为页面的页脚时，一般包含了版权、相关文件和链接。它和<header>标签使用基本一样，可以在一个页面中多次使用，如果在一个区段的后面加入footer，那么它就相当于该区段的页脚了。

    <footer>
        COPYRIGHT@Ajuan
    </footer>

### 7. hgroup标签
hgroup标签是对网页或区段section的标题元素（h1-h6）进行组合。例如，在一区段中你有连续的h系列的标签元素，则可以用hgroup将他们括起来

    <hgroup>
        <h1>这是一篇介绍HTML 5结构标签的文章</h1>
        <h2>HTML 5的革新</h2>
    </hgroup>
    
### 8. figure标签
用于对元素进行组合。多用于图片与图片描述组合。

    <figure>
        <img src="img.gif" alt="figure标签"  title="figure标签" />
        <figcaption>这儿是图片的描述信息</figcaption>
    </figure>

## 总结：
有了新的结构性的标签的标准，让HTML文档更加清晰，可阅读性更强，更利于SEO，也更利于视障人士阅读。<br>
参考博文：http://www.cnblogs.com/fly_dragon/archive/2012/05/25/2516142.html

## 最后：
如果有什么疑问，请联系邮箱：zhigang.chen@owulia.com<br>
如果喜欢，别忘了给星