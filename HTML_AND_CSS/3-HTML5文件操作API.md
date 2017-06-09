# HTML5文件操作API

## 简介：
> HTML5文件操作API案例

## 案例一：获取上传文件的文件名
```html js
<!DOCTYPE html">
<html>
<head>
    <title></title>
    <script src="Scripts/jquery-1.5.1.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(function () {
            $("#btnGetFile").click(function (e) {
                var fileList = document.getElementById("fileDemo").files;
                for (var i = 0; i < fileList.length; i++) {
                    if (!(/image\/\w+/.test(fileList[i].type))) {
                         $("#result").append("<span>type:"+fileList[i].type+"--******非图片类型*****--name:"+fileList[i].name+"--size:"+fileList[i].size+"</span><br />");
                    }
                    else {
                        $("#result").append("<span>type:"+fileList[i].type+"--name:"+fileList[i].name+"--size:"+fileList[i].size+"</span><br />");
                    }
                }
            });
        });
    </script>
</head>
<body>
    <form action="/home/index" method="POST" novalidate="true">
        <input type="file" multiple="multiple" name="fileDemo" id="fileDemo" /><br/>
        <input type="button" value="获取文件的名字" id="btnGetFile"/>
        <div id="result"></div>
    </form>
    <hr/>
</body>
</html>
```
## 案例二：读取上传文件内容，然后将文件内容直接读取到浏览器上
```html js
<!DOCTYPE html">
<html>
<head>
    <title></title>
    <script src="Scripts/jquery-1.5.1.js" type="text/javascript"></script>  
    <script type="text/javascript">
        if(typeof FileReader == "undified") {
            alert("您老的浏览器不行了！");
        }
        function showDataByURL() {
            var resultFile = document.getElementById("fileDemo").files[0];
            if (resultFile) {
                var reader = new FileReader();
                reader.readAsDataURL(resultFile);
                reader.onload = function (e) {
                    var urlData = this.result;
                    document.getElementById("result").innerHTML += "<img src='" + urlData + "' alt='" + resultFile.name + "' />";
                }; 
            }
        } 
        function showDataByBinaryString() {
              var resultFile = document.getElementById("fileDemo").files[0];
            if (resultFile) {
                var reader = new FileReader();
                //异步方式，不会影响主线程
                reader.readAsBinaryString(resultFile);
                reader.onload = function(e) {
                    var urlData = this.result;
                    document.getElementById("result").innerHTML += urlData;
                };
            }
        }
        function showDataByText() {
            var resultFile = document.getElementById("fileDemo").files[0];
            if (resultFile) {
                var reader = new FileReader();
                reader.readAsText(resultFile,'gb2312');
                reader.onload = function (e) {
                    var urlData = this.result;
                    document.getElementById("result").innerHTML += urlData;
                };
            }
        }
    </script>
</head>
<body>
    <input type="file" name="fileDemo" id="fileDemo" multep/>
    <input type="button" value="readAsDataURL" id="readAsDataURL" onclick="showDataByURL();"/>
    <input type="button" value="readAsBinaryString"  id="readAsBinaryString" onclick="showDataByBinaryString();"/>
    <input type="button" value="readAsText"  id="readAsText" onclick="showDataByText();"/>
    <div id="result">
    </div>
</body>
</html>
```

## 总结：
有了文件操作的API后，让JS进一步的操作本地文件的得到空前的加强，HTML5对于客户端Web应用得到进一步功能的提升。<br>
参考博文：http://www.cnblogs.com/fly_dragon/archive/2012/06/02/2532035.html

## 最后：
如果有什么疑问，请联系邮箱：zhigang.chen@owulia.com<br>
如果喜欢，别忘了给星