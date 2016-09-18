/**
 * Created by Administrator on 2016/9/17.
 */
var headerCon=require('../tpls/subheader.string');
var bodyCon=require('../tpls/search_body.string');
var footCon=require('../tpls/footer.string');
var common=require('../commo/until_common.js');
$(function() {
    common.renderhtml(headerCon + bodyCon + footCon);
    var pageIndex=1;
    var typeName="hunshazhao";
    getData(typeName,0);
    $("#seBtn").click(function(){
        var keywords=$("#keywords").val();
        if(keywords.indexOf("婚")!=-1&&keywords.indexOf("纱")!=-1){
            typeName="hunshazhao";
           // getData(typeName,0);
        }
        else if(keywords.indexOf("写")!=-1&&keywords.indexOf("真")!=-1){
            typeName="guest_outdoor";
            //getData(typeName,0);
        }
        else if(keywords.indexOf("技")!=-1&&keywords.indexOf("巧")!=-1){
            typeName="phototips";
           // getData(typeName,0);
        }else{
            typeName="guest_indoor";
            //getData(typeName,0);
        }
        getData(typeName,0);
    })
    $("#min_price").focus(function(){
        $(this).css("color","#222");
    });
    $("#max_price").focus(function(){
        $(this).css("color","#222");
    });
    var spanList=$(".sortRule");
    for(var i=0;i<spanList.length;i++){
        spanList[i].index=i;
        spanList[i].onclick=function(){
            //alert(this.index);
            getData(typeName,this.index);
        }
    }
    $("#sure").click(function(){
        var start=parseInt($("#min_price").val());
        var end=parseInt($("#max_price").val());
        if(!start){
            start=0
        }
        if(!end){
            end=999999999;
        }
        $.ajax({
            url: "/api/products/"+typeName + pageIndex,
            /*url:"/weiwei/data/"+typeName + pageIndex+".txt",*/
            success: function (result) {
                clearContent();
                result=_.sortBy(result, 'price');
                for (var i = 0; i < result.length; i++) {
                    if(result[i].price>=start&&result[i].price<=end){
                        loadImg(result[i],typeName);
                    }
                }
            },
            type: "get"
        })
    })
    function clearContent() {
        $(".search_con").empty();
    }
    function getData(typeName,mark){
        $.ajax({
          /*  url: "/api/products/"+typeName + pageIndex,*/
            url:"/weiwei/data/"+typeName + pageIndex+".txt",
            success: function (result) {
                clearContent();
                var result=JSON.parse(result);
                if(mark==1){
                   result= _.sortBy(result,'sales');
                }else if(mark==2){
                    result= _.sortBy(result, 'popularity');
                }else if(mark==3){
                    result=_.sortBy(result, 'price');
                }
                for (var i = 0; i < result.length; i++) {
                    loadImg(result[i],typeName);
                }
            },
            type: "get"
        })
    }
    function loadImg(data,typeName) {
        if(typeName=="phototips"){
            var str = $('<a href="#" class="dlbox"><dl>' +
                '<dt><img src="/weiwei/img/tips/' + data.imgsrc + '"/></dt><dd>' +
                '<p>' + data.title + '</p>' +
                '<span>' + data.date + '</span>' +
                '</dd> </dl></a>');
        }else{
            var str = $('<a href="#" class="dlbox"><dl>' +
                '<dt><img src="/weiwei/img/conimg/' + data.imgsrc + '"/></dt><dd>' +
                '<p>' + data.name + '</p>' +
                '<span>' + data.date + '</span>' +
                '</dd> </dl></a>');
        }

        $(".search_con").append(str);
    }
});