/**
 * Created by Administrator on 2016/9/14.
 */
var headerCon=require('../tpls/subheader.string');
var bodyCon=require('../tpls/detail_body.string');
var footCon=require('../tpls/footer.string');
var common=require('../commo/until_common.js');
require('../commo/share.js');
$(function() {
    common.renderhtml(headerCon + bodyCon + footCon);
    var mark;
    var imgId;
    var str=location.href; //取得地址栏的url
    var num=str.indexOf("?");  //？ 的位置
    str=str.substr(num+1); //取得所有参数  获取？后面的url内容。
    var arr=str.split("&"); //各个参数放到数组里
    mark=arr[0];
    imgId=arr[1];
    getDate(mark,imgId);
    function getDate(mark,imgId){
        if(mark=="h"){
            getAjaxDate("works_hunsha",imgId);
        }
        if(mark=="x"){
            getAjaxDate("works_xiezhen",imgId);
        }
        if(mark=="g"){
            getAjaxDate("works_guest",imgId);
        }
        if(mark=="s"){
            getAjaxDate("works_shooting",imgId);
        }
    }
    function getAjaxDate(txtName,imgId){
        $.ajax({
           /* url: "/api/products/" + txtName,*/
            url:"/weiwei/data/"+ txtName+".txt",
            success:function(result){
                var result=JSON.parse(result);
                for(var i=0;i<result.length;i++){
                    if(result[i].id==imgId){
                        loadImg(result[i]);
                        break;
                    }
                }
            },
            type:"get"
        })
    }
    function loadImg(data){
        $(".detail_title").text(data.name);
        var allImgSrc=data.imgSrc.split("&");
        var str='<p>'+data.pCon+'</p>';
        for(var i=0;i<allImgSrc.length;i++){
            str+='<img src="/weiwei/img/conimg/'+allImgSrc[i]+'.jpg"/>';
        }
        $(".detail_Box").html(str);
    }
})