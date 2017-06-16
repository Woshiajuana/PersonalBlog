# CSS3弹性盒子

## 简介：
> flex: flex-grow flex-shrink flex-basis|auto|initial|inherit;

## flex-direction (适用于父类容器的元素上)：
> 设置或检索伸缩盒对象的子元素在父容器中的位置。
> flex-direction: row | row-reverse | column | column-reverse

row：横向从左到右排列（左对齐），默认的排列方式。<br>
row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面。<br>
column：纵向排列。<br>
row-reverse：反转纵向排列，从后往前排，最后一项排在最上面。
```html css
<!DOCTYPE html">
<html>
<head>
    <title></title>
    <style>
    .box{
    	display:-webkit-flex;
    	display:flex;
    	margin:0;padding:10px;list-style:none;background-color:#eee;}
    .box li{width:100px;height:100px;border:1px solid #aaa;text-align:center;}
    #box{
    	-webkit-flex-direction:row;
    	flex-direction:row;
    }
    #box2{
    	-webkit-flex-direction:row-reverse;
    	flex-direction:row-reverse;
    }
    #box3{
    	height:500px;
    	-webkit-flex-direction:column;
    	flex-direction:column;
    }
    #box4{
    	height:500px;
    	-webkit-flex-direction:column-reverse;
    	flex-direction:column-reverse;
    }
    </style>
</head>
<body>
    <h2>flex-direction:row</h2>
    <ul id="box" class="box">
    	<li>a</li>
    	<li>b</li>
    	<li>c</li>
    </ul>
    <h2>flex-direction:row-reverse</h2>
    <ul id="box2" class="box">
    	<li>a</li>
    	<li>b</li>
    	<li>c</li>
    </ul>
    <h2>flex-direction:column</h2>
    <ul id="box3" class="box">
    	<li>a</li>
    	<li>b</li>
    	<li>c</li>
    </ul>
    <h2>flex-direction:column-reverse</h2>
    <ul id="box4" class="box">
    	<li>a</li>
    	<li>b</li>
    	<li>c</li>
    </ul>
</body>
</html>
```

## flex-wrap (适用于父类容器上)
> 设置或检索伸缩盒对象的子元素超出父容器时是否换行。
> flex-wrap: nowrap | wrap | wrap-reverse

nowrap：当子元素溢出父容器时不换行。
wrap：当子元素溢出父容器时自动换行。
wrap-reverse：反转 wrap 排列。
```html css
<!DOCTYPE html">
<html>
<head>
    <title></title>
    <style>
    .box{
    	display:-webkit-flex;
    	display:flex;
    	width:220px;margin:0;padding:10px;list-style:none;background-color:#eee;}
    .box li{width:100px;height:100px;border:1px solid #aaa;text-align:center;}
    #box{
    	-webkit-flex-wrap:nowrap;
    	flex-wrap:nowrap;
    }
    #box2{
    	-webkit-flex-wrap:wrap;
    	flex-wrap:wrap;
    }
    #box3{
    	-webkit-flex-wrap:wrap-reverse;
    	flex-wrap:wrap-reverse;
    }
    </style>
</head>
<body>
    <ul id="box" class="box">
    	<li>a</li>
    	<li>b</li>
    	<li>c</li>
    </ul>
    <h2>flex-wrap:wrap</h2>
    <ul id="box2" class="box">
    	<li>a</li>
    	<li>b</li>
    	<li>c</li>
    </ul>
    <h2>flex-wrap:wrap-reverse</h2>
    <ul id="box3" class="box">
    	<li>a</li>
    	<li>b</li>
    	<li>c</li>
    </ul>
</body>
</html>
```

## flex-flow (适用于父类容器上)
> 设置或检索伸缩盒对象的子元素超出父容器时是否换行。
> flex-flow: <‘flex-direction’> || <‘flex-wrap’>

[ flex-direction ]：定义弹性盒子元素的排列方向。
[ flex-wrap ]：定义弹性盒子元素溢出父容器时是否换行。

```html css
<!DOCTYPE html">
<html>
<head>
    <title></title>
    <style>
    .box{
    	display:-webkit-flex;
    	display:flex;
    	width:220px;margin:0;padding:10px;list-style:none;background-color:#eee;}
    .box li{width:100px;height:100px;border:1px solid #aaa;text-align:center;}
    #box{
    	-webkit-flex-flow:row nowrap;
    	flex-flow:row nowrap;
    }
    #box2{
    	-webkit-flex-flow:row wrap-reverse;
    	flex-flow:row wrap-reverse;
    }
    #box3{
    	height:220px;
    	-webkit-flex-flow:column wrap-reverse;
    	flex-flow:column wrap-reverse;
    }
    </style>
</head>
<body>
    <ul id="box" class="box">
    	<li>a</li>
    	<li>b</li>
    	<li>c</li>
    </ul>
    <h2>flex-flow:row wrap-reverse</h2>
    <ul id="box2" class="box">
    	<li>a</li>
    	<li>b</li>
    	<li>c</li>
    </ul>
    <h2>flex-flow:column wrap-reverse;</h2>
    <ul id="box3" class="box">
    	<li>a</li>
    	<li>b</li>
    	<li>c</li>
    </ul>
</body>
</html>
```

## justify-content (适用于父类容器上)
> 设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。<br>
> 当弹性盒里一行上的所有子元素都不能伸缩或已经达到其最大值时，这一属性可协助对多余的空间进行分配。当元素溢出某行时，这一属性同样会在对齐上进行控制。
> justify-content: flex-start | flex-end | center | space-between | space-around

flex-start：弹性盒子元素将向行起始位置对齐。该行的第一个子元素的主起始位置的边界将与该行的主起始位置的边界对齐，同时所有后续的伸缩盒项目与其前一个项目对齐。<br>
flex-end：弹性盒子元素将向行结束位置对齐。该行的第一个子元素的主结束位置的边界将与该行的主结束位置的边界对齐，同时所有后续的伸缩盒项目与其前一个项目对齐。<br>
center：弹性盒子元素将向行中间位置对齐。该行的子元素将相互对齐并在行中居中对齐，同时第一个元素与行的主起始位置的边距等同与最后一个元素与行的主结束位置的边距（如果剩余空间是负数，则保持两端相等长度的溢出）。<br>
space-between：弹性盒子元素会平均地分布在行里。如果最左边的剩余空间是负数，或该行只有一个子元素，则该值等效于'flex-start'。在其它情况下，第一个元素的边界与行的主起始位置的边界对齐，同时最后一个元素的边界与行的主结束位置的边距对齐，而剩余的伸缩盒项目则平均分布，并确保两两之间的空白空间相等。<br>
space-around：弹性盒子元素会平均地分布在行里，两端保留子元素与子元素之间间距大小的一半。如果最左边的剩余空间是负数，或该行只有一个伸缩盒项目，则该值等效于'center'。在其它情况下，伸缩盒项目则平均分布，并确保两两之间的空白空间相等，同时第一个元素前的空间以及最后一个元素后的空间为其他空白空间的一半。

```html css
<!DOCTYPE html">
<html>
<head>
    <title></title>
    <style>
    .box{
    	display:-webkit-flex;
    	display:flex;
    	width:400px;height:100px;margin:0;padding:0;border-radius:5px;list-style:none;background-color:#eee;}
    .box li{margin:5px;padding:10px;border-radius:5px;background:#aaa;text-align:center;}
    #box{
    	-webkit-justify-content:flex-start;
    	justify-content:flex-start;
    }
    #box2{
    	-webkit-justify-content:flex-end;
    	justify-content:flex-end;
    }
    #box3{
    	-webkit-justify-content:center;
    	justify-content:center;
    }
    #box4{
    	-webkit-justify-content:space-between;
    	justify-content:space-between;
    }
    #box5{
    	-webkit-justify-content:space-around;
    	justify-content:space-around;
    }
    </style>
</head>
<body>
    <ul id="box" class="box">
    	<li>a</li>
    	<li>b</li>
    	<li>c</li>
    </ul>
    <h2>justify-content:flex-end</h2>
    <ul id="box2" class="box">
    	<li>a</li>
    	<li>b</li>
    	<li>c</li>
    </ul>
    <h2>justify-content:center</h2>
    <ul id="box3" class="box">
    	<li>a</li>
    	<li>b</li>
    	<li>c</li>
    </ul>
    <h2>justify-content:space-between</h2>
    <ul id="box4" class="box">
    	<li>a</li>
    	<li>b</li>
    	<li>c</li>
    </ul>
    <h2>justify-content:space-around</h2>
    <ul id="box5" class="box">
    	<li>a</li>
    	<li>b</li>
    	<li>c</li>
    </ul>
</body>
</html>
```

## align-items (适用于父类容器上)
> 设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式。<br>
> align-items: flex-start | flex-end | center | baseline | stretch

flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴（纵轴）起始边界。<br>
flex-end：弹性盒子元素的侧轴（纵轴）结束位置的边界紧靠住该行的侧轴（纵轴）结束边界。<br>
center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。<br>
baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。<br>
stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。

## align-content (适用于父类容器上)
> 设置或检索弹性盒堆叠伸缩行的对齐方式。<br>
> align-content: flex-start | flex-end | center | space-between | space-around | stretch

flex-start：各行向弹性盒容器的起始位置堆叠。弹性盒容器中第一行的侧轴起始边界紧靠住该弹性盒容器的侧轴起始边界，之后的每一行都紧靠住前面一行。<br>
flex-end：各行向弹性盒容器的结束位置堆叠。弹性盒容器中最后一行的侧轴起结束界紧靠住该弹性盒容器的侧轴结束边界，之后的每一行都紧靠住前面一行。<br>
center：各行向弹性盒容器的中间位置堆叠。各行两两紧靠住同时在弹性盒容器中居中对齐，保持弹性盒容器的侧轴起始内容边界和第一行之间的距离与该容器的侧轴结束内容边界与第最后一行之间的距离相等。（如果剩下的空间是负数，则各行会向两个方向溢出的相等距离。）<br>
space-between：各行在弹性盒容器中平均分布。如果剩余的空间是负数或弹性盒容器中只有一行，该值等效于'flex-start'。在其它情况下，第一行的侧轴起始边界紧靠住弹性盒容器的侧轴起始内容边界，最后一行的侧轴结束边界紧靠住弹性盒容器的侧轴结束内容边界，剩余的行则按一定方式在弹性盒窗口中排列，以保持两两之间的空间相等。<br>
space-around：各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。如果剩余的空间是负数或弹性盒容器中只有一行，该值等效于'center'。在其它情况下，各行会按一定方式在弹性盒容器中排列，以保持两两之间的空间相等，同时第一行前面及最后一行后面的空间是其他空间的一半。<br>
stretch：各行将会伸展以占用剩余的空间。如果剩余的空间是负数，该值等效于'flex-start'。在其它情况下，剩余空间被所有行平分，以扩大它们的侧轴尺寸。

## order (适用于弹性盒模型容器子元素)
> 设置或检索弹性盒模型对象的子元素出現的順序。<br>
> order: integer

integer：用整数值来定义排列顺序，数值小的排在前面。可以为负值。

## flex-grow (适用于弹性盒模型容器子元素)：
> 设置或检索弹性盒的扩展比率。根据弹性盒子元素所设置的扩展因子作为比率来分配剩余空间。 

flex-grow的默认值为0，如果没有显示定义该属性，是不会拥有分配剩余空间权利的。本例中b,c两项都显式的定义了flex-grow，可以看到总共将剩余空间分成了4份，其中b占1份，c占3分，即1:3

```html css
<!DOCTYPE html">
<html>
<head>
    <title></title>
    <style>
    .box{
    	display:-webkit-flex;
    	display:flex;
    	width:600px;margin:0;padding:10px;list-style:none;background-color:#eee;}
    .box li{width:100px;height:100px;border:1px solid #aaa;text-align:center;}
    #box li:nth-child(2){
    	-webkit-flex-grow:1;
    	flex-grow:1;
    }
    #box li:nth-child(3){
    	-webkit-flex-grow:2;
    	flex-grow:2;
    }
    </style>
</head>
<body>
    <ul id="box" class="box">
    	<li>a</li>
    	<li>b</li>
    	<li>c</li>
    	<li>d</li>
    	<li>e</li>
    </ul>
</body>
</html>
```

## flex-shrink (适用于弹性盒模型容器子元素)：
> 设置或检索弹性盒的收缩比率（根据弹性盒子元素所设置的收缩因子作为比率来收缩空间。）
```html css
<!DOCTYPE html">
<html>
<head>
    <title></title>
    <style>
    #flex{display:-webkit-flex;display:flex;width:400px;margin:0;padding:0;list-style:none;}
    #flex li{width:200px;}
    #flex li:nth-child(1){background:#888;}
    #flex li:nth-child(2){background:#ccc;}
    #flex li:nth-child(3){-webkit-flex-shrink:3;flex-shrink:3;background:#aaa;}
    </style>
</head>
<body>
    <ul id="flex">
    	<li>a</li>
    	<li>b</li>
    	<li>c</li>
    </ul>
</body>
</html>
```
flex-shrink的默认值为1，如果没有显示定义该属性，将会自动按照默认值1在所有因子相加之后计算比率来进行空间收缩。<br>
本例中c显式的定义了flex-shrink，a,b没有显式定义，但将根据默认值1来计算，可以看到总共将剩余空间分成了5份，其中a占1份，b占1份，c占3分，即1:1:3<br>
我们可以看到父容器定义为400px，子项被定义为200px，相加之后即为600px，超出父容器200px。那么这么超出的200px需要被a,b,c消化<br>
按照以上定义a,b,c将按照1:1:3来分配200px，计算后即可得40px,40px,120px，换句话说，a,b,c各需要消化40px,40px,120px，那么就需要用原定义的宽度相减这个值，最后得出a为160px，b为160px，c为80px

## flex-basis(适用于弹性盒模型容器子元素)：
> 设置或检索弹性盒伸缩基准值。
> flex-basis: length | auto (default auto)

auto：无特定宽度值，取决于其它属性值<br>
length：用长度值来定义宽度。不允许负值<br>
percentage：用百分比来定义宽度。不允许负值

## flex (适用于弹性盒模型子元素)：
> 复合属性。设置或检索伸缩盒对象的子元素如何分配空间。如果缩写flex:1, 则其计算值为：1 1 0。
> flex：none | [ flex-grow ] || [ flex-shrink ] || [ flex-basis ]

none：none关键字的计算值为: 0 0 auto<br>
[ flex-grow ]：定义弹性盒子元素的扩展比率。<br>
[ flex-shrink ]：定义弹性盒子元素的收缩比率。<br>
[ flex-basis ]：定义弹性盒子元素的默认基准值。

## align-self (适用于弹性盒模型子元素)：
> 设置或检索弹性盒子元素自身在侧轴（纵轴）方向上的对齐方式。
> align-self: auto | flex-start | flex-end | center | baseline | stretch

auto：如果'align-self'的值为'auto'，则其计算值为元素的父元素的'align-items'值，如果其没有父元素，则计算值为'stretch'。<br>
flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。<br>
flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。<br>
center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。<br>
baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。<br>
stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。

## 总结：
参考博文：http://caibaojian.com/demo/flexbox/flex-direction.html

## 最后：
如果有什么疑问，请联系邮箱：zhigang.chen@owulia.com<br>
如果喜欢，别忘了给星