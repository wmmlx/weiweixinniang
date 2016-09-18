/**
 * Created by Administrator on 2016/9/16.
 */
var headerCon=require('../tpls/subheader.string');
var bodyCon0=require('../tpls/photoTipsDetail_body.string');
var bodyCon1=require('../tpls/photoTipsDetail_body2.string');
var bodyCon2=require('../tpls/photoTipsDetail_body3.string');
var bodyCon3=require('../tpls/photoTipsDetail_body4.string');
var footCon=require('../tpls/footer.string');
var common=require('../commo/until_common.js');
$(function() {
   /* common.renderhtml(headerCon + bodyCon + footCon);*/
    var str=location.href; //取得地址栏的url
    var num=str.indexOf("?");  //？ 的位置
    str=str.substr(num+1); //取得所有参数  获取？后面的url内容。
    var arr=str.split("&"); //各个参数放到数组里
    var mark=arr[0].split("=")[1];
    if(mark==1){
        common.renderhtml(headerCon + bodyCon1 + footCon);
    }else if(mark==2){
        common.renderhtml(headerCon + bodyCon2 + footCon);
    }else if(mark==3){
        common.renderhtml(headerCon + bodyCon3 + footCon);
    }else{
        common.renderhtml(headerCon + bodyCon0 + footCon);
    }
});