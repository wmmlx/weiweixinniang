/**
 * Created by Administrator on 2016/9/14.
 */

module.exports=function() {
    var hId = 1;
    var xId = 1;
    var gId = 1;
    var sId = 1;
    $("#silderbar").find("a").each(function () {
        $(this).mouseover(function () {
            $(this).css("background", "url(/weiwei/img/icon/cur-ico.png) no-repeat center");
        })
        $(this).mouseout(function () {
            $(this).css("background", "");
        })
    })
    function getAjax(dom, txtName, mark) {
        $.ajax({
           /* url: "/api/products/" + txtName,*/
            url:"/weiwei/data/"+ txtName+".txt",
            success: function (result) {
                var result = JSON.parse(result);
                for (var i = 0; i < result.length; i++) {
                    loadImg(result[i], dom, mark);
                }
            },
            type: "get"
        })
    }

    getAjax($(".hunsha"), "works_hunsha", "h");
    getAjax($(".xiezhen"), "works_xiezhen", "x");
    getAjax($(".guest"), "works_guest", "g");
    getAjax($(".shoot"), "works_shooting", "s");
    function loadImg(data, dom, mark) {
        if (mark == "h") {
            var str = $('<a href="html/detail.html?' + mark + '&' + hId + '" class="dlbox"><dl>' +
                '<dt><img src="/weiwei/img/conimg/' + data.current + '.jpg"/></dt><dd>' +
                '<p>' + data.name + '</p>' +
                '<span>' + data.date + '</span>' +
                '</dd> </dl></a>');
            hId++;
        }
        else if (mark == "x") {
            var str = $('<a href="html/detail.html?' + mark + '&' + xId + '" class="dlbox"><dl>' +
                '<dt><img src="/weiwei/img/conimg/' + data.current + '.jpg"/></dt><dd>' +
                '<p>' + data.name + '</p>' +
                '<span>' + data.date + '</span>' +
                '</dd> </dl></a>');
            xId++;
        } else if (mark == "g") {
            var str = $('<a href="html/detail.html?' + mark + '&' + gId + '" class="dlbox"><dl>' +
                '<dt><img src="/weiwei/img/conimg/' + data.current + '.jpg"/></dt><dd>' +
                '<p>' + data.name + '</p>' +
                '<span>' + data.date + '</span>' +
                '</dd> </dl></a>');
            gId++;
        } else {
            var str = $('<a href="html/detail.html?' + mark + '&' + sId + '" class="dlbox"><dl>' +
                '<dt><img src="/weiwei/img/conimg/' + data.current + '.jpg"/></dt><dd>' +
                '<p>' + data.name + '</p>' +
                '<span>' + data.date + '</span>' +
                '</dd> </dl></a>');
            sId++;

        }
        /*var str=$('<a href="html/detail.html?'+mark+sId+'" class="dlbox"><dl>'+
         '<dt><img src="/img/'+mock.current+'.jpg"/></dt><dd>'+
         '<p>'+mock.name+'</p>'+
         '<span>'+mock.date+'</span>'+
         '</dd> </dl></a>');*/
        dom.append(str);
    }
}
