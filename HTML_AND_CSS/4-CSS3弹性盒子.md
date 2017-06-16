# CSS3弹性盒子

## 简介：
> flex: flex-grow flex-shrink flex-basis|auto|initial|inherit;

## flex-grow (适用于弹性盒模型容器子元素)：
> 设置或检索弹性盒的扩展比率。根据弹性盒子元素所设置的扩展因子作为比率来分配剩余空间。 
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
flex-grow的默认值为0，如果没有显示定义该属性，是不会拥有分配剩余空间权利的。本例中b,c两项都显式的定义了flex-grow，可以看到总共将剩余空间分成了4份，其中b占1份，c占3分，即1:3
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

## 总结：
有了文件操作的API后，让JS进一步的操作本地文件的得到空前的加强，HTML5对于客户端Web应用得到进一步功能的提升。<br>
参考博文：http://www.cnblogs.com/fly_dragon/archive/2012/06/02/2532035.html

## 最后：
如果有什么疑问，请联系邮箱：zhigang.chen@owulia.com<br>
如果喜欢，别忘了给星