/**
 * Created by hxsd on 2016/7/13.
 */

var $ = {
    'ajax': function (options) {
        //创建一个XMLHttpRequest对象
        var xhr =  this.createRequest();
        //配置该XML……，如何处理服务器响应（同步或异步）
        xhr.open(options.method, options.url, true);
        //readyState=4时，说明server响应的数据被browser拿到了
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    if (options.success)options.success(xhr.responseText);
                } else {
                    if (options.fail)options.fail();
                };
            };
        };
        //发送数据
        xhr.send(null);
    },
    'getJson': function (url, success, fail) {
        //创建一个XMLHttpRequest对象
        var xhr = this.createRequest();
        //配置该XML……，如何处理服务器响应（同步或异步）
        xhr.open('GET', url, true);
        //readyState=4时，说明server响应的数据被browser拿到了
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    if (success)success(JSON.parse(xhr.responseText));
                } else {
                    if (fail)fail();
                }
                ;
            }
            ;
        };
        //发送数据
        xhr.send(null);
    },
    'createRequest': function () {//兼容性创建XMLHttpRequest对象，
        var xhr = null;
        try {
            xhr = new XMLHttpRequest;
        } catch (e) {
            try {//如果上面的try执行失败，则进入这个开始执行，兼容IE
                xhr = new ActiveXObject("Msxm12.XMLHTTP");
            } catch (e) {
                try {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {
                    console.log('你的浏览器版本太低了')
                };
            };
        };
        return xhr;
    }
}