/**
 * Created by sf on 2018/8/3.
 */
var areaArr = []

var trackHost = 'https://segmentfault.com';
var viewApi = trackHost + '/ad/track/view'
var clickApi = trackHost + '/ad/track/click'

function ajax(opt) {
    opt = opt || {};//opt以数组方式存参，如果参数不存在就为空。
    opt.method = opt.method.toUpperCase() || 'POST';//转为大写失败，就转为POST
    opt.url = opt.url || '';//检查URL是否为空
    opt.async = opt.async || true;//是否异步
    opt.data = opt.data || null;//是否发送参数，如POST、GET发送参数
    opt.success = opt.success || function () {}; //成功后处理方式
    var xmlHttp = null;//定义1个空变量
    if (XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();//如果XMLHttpRequest存在就新建，IE大于9&&非IE有效
    }
    else {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');//用于低版本IE
    }
    var params = [];//定义1个空数组
    for (var key in opt.data){
        params.push(key + '=' + opt.data[key]);//将opt里的data存到push里
    }
    var postData = params.join('&');//追加个& params
    if (opt.method.toUpperCase() === 'POST') {
        xmlHttp.open(opt.method, opt.url, opt.async);//开始请求
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');//发送头信息，与表单里的一样。
        xmlHttp.send(postData);//发送POST数据
    }
    else if (opt.method.toUpperCase() === 'GET') {
        xmlHttp.open(opt.method, opt.url, opt.async);//GET请求
        xmlHttp.send(null);//发送空数据
    }
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {//readyState有5个状态，可以百度一下看看都有什么。当请求完成，并且返回数据成功
            opt.success(xmlHttp.responseText);//返回成功的数据
        }
    };
}

var sTitle="";
window.SFGridAd = {};
SFGridAd.d = function(o) {
    sTitle = o.getAttribute('stitle');
    document.getElementById("gridMapHoverBox").style.display = "block"
}

SFGridAd.e = function(o) {
    sTitle = "";
    document.getElementById("gridMapHoverBox").style.display = "none"
}

SFGridAd.c = function(id) {

    var clickApi2 = clickApi + '?id=' + id

    ajax({url: clickApi2, method: 'GET'})
};

// 这里 data 需要注入
[{"id":"1750000017188265","user_id":"1030000012831663","box_ad_id":"0","started":"1543507200","ended":"1548345600","cycles":"4","status":"0","banner":"\/102\/205\/1022053054-5bff5d7cd567a","link":"https:\/\/12306bycloud.com","title":"12306bycloud - \u7a0b\u5e8f\u5458\u4e2a\u4eba\u5199\u7684\u62a2\u7968\u8f6f\u4ef6\uff0cp2p\u67b6\u6784\uff0c\u6781\u901f\u51fa\u7968","area_info":{"area":"M1:M1","height":"17","width":"17","left":"204","top":"0","pos":{"rowTop":1,"rowBottom":1,"columnLeft":13,"columnRight":13},"size":1},"created":"1543461005","modified":"1543462276"},{"id":"1750000017316701","user_id":"1030000002496563","box_ad_id":"0","started":"1544457600","ended":"1546876800","cycles":"2","status":"0","banner":"\/696\/110\/696110750-5c0f213038c71","link":"https:\/\/www.fundebug.com\/?utm_source=sf_1","title":"Debug\u5c31\u7528Fundebug","area_info":{"area":"F1:H1","height":"17","width":"51","left":"85","top":"0","pos":{"rowTop":1,"rowBottom":1,"columnLeft":6,"columnRight":8},"size":3},"created":"1544404207","modified":"1544405468"},{"id":"1750000017321033","user_id":"1030000002753969","box_ad_id":"0","started":"1544457600","ended":"1546876800","cycles":"4","status":"0","banner":"\/406\/520\/4065206864-5c0e28ac56ae8","link":"https:\/\/www.tracup.com","title":"Bug\u7ba1\u7406\uff0c\u7528Tracup","area_info":{"area":"B4:D5","height":"34","width":"51","left":"17","top":"51","pos":{"rowTop":4,"rowBottom":5,"columnLeft":2,"columnRight":4},"size":6},"created":"1544422361","modified":"1544431791"},{"id":"1750000017324760","user_id":"1030000016660904","box_ad_id":"0","started":"1544457600","ended":"1546876800","cycles":"4","status":"0","banner":"\/298\/916\/2989169838-5c0e3bfb7c983","link":"https:\/\/uniapp.dcloud.io\/?hmsr=sf&hmpl=&hmcu=&hmkw=&hmci=","title":"\u5f00\u53d1\u4e00\u6b21\uff0c\u540c\u65f6\u751f\u6210 App\u3001\u5c0f\u7a0b\u5e8f\u3001H5","area_info":{"area":"J7:O7","height":"17","width":"102","left":"153","top":"102","pos":{"rowTop":7,"rowBottom":7,"columnLeft":10,"columnRight":15},"size":6},"created":"1544433872","modified":"1544436897"},{"id":"1750000017343968","user_id":"1030000015588360","box_ad_id":"0","started":"1544630400","ended":"1547049600","cycles":"1","status":"0","banner":"\/264\/406\/2644069485-5c105f49390ca","link":"https:\/\/www.accesshub.cn","title":"SD-WAN\u8f6f\u4ef6\u89e3\u51b3\u65b9\u6848\uff0c\u5e2e\u52a9\u7528\u6237\u5728\u6df7\u5408\u7f51\u7edc\u73af\u5883\u7ec4\u7f51\uff0c\u6ee1\u8db3\u7f51\u7edc\u8054\u901a\u6027\u9700\u6c42","area_info":{"area":"M4:O4","height":"17","width":"51","left":"204","top":"51","pos":{"rowTop":4,"rowBottom":4,"columnLeft":13,"columnRight":15},"size":3},"created":"1544576802","modified":"1544576977"},{"id":"1750000017491584","user_id":"1030000016263412","box_ad_id":"0","started":"1545667200","ended":"1546876800","cycles":"2","status":"0","banner":"\/274\/450\/2744503121-5c2048a921a96","link":"https:\/\/www.3tee.cn\/index.html?source=segmentfault","title":"\u8fde\u63a5\u4e00\u5207\uff0c\u517c\u5bb9WebRTC\uff0c\u6d59\u6c5f\u5927\u534e\u80a1\u4efd\u7b49\u90fd\u5728\u7528","area_info":{"area":"N1:O2","height":"34","width":"34","left":"221","top":"0","pos":{"rowTop":1,"rowBottom":2,"columnLeft":14,"columnRight":15},"size":4},"created":"1545619552","modified":"1545619833"}].forEach(function(item) {
    var html = '<area shape="rect" ' +
        'target="_blank" ' +
        'onmouseover="SFGridAd.d(this)" ' +
        'onmouseout="SFGridAd.e(this)" ' +
        'onclick="SFGridAd.c(' + item.id + ')" ' +
        'coords="' + item.area_info.left + ',' + item.area_info.top + ',' + ((+item.area_info.left)+(+item.area_info.width)) + ',' + ((+item.area_info.top)+(+item.area_info.height)) + '" ' +
        'href="' + item.link + '" ' +
        'stitle="' + item.title + '" />'

    areaArr.push(html)
})

document.getElementById('gridsMap').innerHTML = areaArr.join('')

document.getElementById('gridsMap').onmousemove = function(e) {
    var pos = getMousePos(e)

    document.getElementById("gridMapHoverBox").style.left = pos.x + 20 + 'px'
    document.getElementById("gridMapHoverBox").style.top = pos.y + 20 + 'px'

    document.getElementById("gridMapHoverBox").innerHTML = sTitle
}

// 增加 view 统计
setTimeout(function() {
    isShow = document.querySelector('img[src^="https://static.segmentfault.com/sponsor"]').clientHeight > 0
    if (isShow) ajax({url: viewApi, method: 'GET'})
}, 0)

function getMousePos(event) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    return { 'x': x, 'y': y };
}
