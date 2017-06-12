/**
 * Created by Administrator on 2017/6/9.
 */
(function () {
    var doc = document,
        getEle = function (ele) {
            return doc.getElementById(ele);
        },
        ssEle = getEle('ss'),
        lsEle = getEle('ls'),
        dataEle = getEle('data');
    getEle('container-wrap').addEventListener('click',function (event){
        if (event.target == ssEle) {
            ssEle.classList.add('active');
            lsEle.classList.remove('active');
            dataEle.innerHTML = returnHtml();
            return;
        }
        if (event.target == lsEle) {
            ssEle.classList.remove('active');
            lsEle.classList.add('active');
            dataEle.innerHTML = returnHtml();
            return;
        }
        if (event.target.id == 'delete') {
            deleteFun(event.target);
            dataEle.innerHTML = returnHtml();
            return;
        }
        if (event.target.id == 'update') {
            updateFun(event.target);
            dataEle.innerHTML = returnHtml();
            return;
        }
    });
    dataEle.innerHTML = returnHtml();
    function returnHtml() {
        var storage = achieveData(doc.getElementsByClassName('active')[0].innerHTML);
        //初始化数据
        var arr = [], str = '';
        if(storage.length){
            var key;
            for(var i=0,len=storage.length;i<len;i++){
                key = storage.key(i);
                arr.push({
                    key: key,
                    value: storage.getItem(key)
                });
            }
            arr.forEach(function (item,index) {
                str += '<li class="data-item">' +
                    '<span class="data-key">'+ item.key +'</span>' +
                    '<input type="text" value="'+ item.value +'" class="data-value">' +
                    '<div class="data-operate">' +
                    '<span class="operate-delete" id="delete">删除</span>' +
                    '<span class="operate-update" id="update">修改</span></div></li>';
            })
        }
        return str;
    }
    function achieveData (ss) {
        if (ss == 'SS') {
            return window.sessionStorage;
        } else {
            return window.localStorage;
        }
    }
    function deleteFun (ele) {
        var key = ele.parentNode.parentNode.getElementsByClassName('data-key')[0].innerHTML;
        var storage = achieveData(doc.getElementsByClassName('active')[0].innerHTML);
        key && storage.removeItem(key);
    }
    function updateFun (ele) {
        var key = ele.parentNode.parentNode.getElementsByClassName('data-key')[0].innerHTML;
        var value = ele.parentNode.parentNode.getElementsByClassName('data-value')[0].value;
        var storage = achieveData(doc.getElementsByClassName('active')[0].innerHTML);
        key && storage.setItem(key,value);
    }
})();