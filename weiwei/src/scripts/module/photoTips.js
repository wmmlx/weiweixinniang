/**
 * Created by Administrator on 2016/9/16.
 */
var headerCon=require('../tpls/subheader.string');
var bodyCon=require('../tpls/photoTips_body.string');
var footCon=require('../tpls/footer.string');
var common=require('../commo/until_common.js');
$(function() {
    common.renderhtml(headerCon + bodyCon + footCon);
    var pageturn=$("#pageturn").find("button");
    var pageCnt;
    var num;
    init();
    function init(){
        pageCnt=1;
        num=1;
        judge();
        changeStyle(num);
        getTableData();
    }
    function getTableData(){
        $.ajax({
           /* url: "/api/products/phototips" + pageCnt,*/
            url:"/weiwei/data/phototips"+ pageCnt+".txt",
            success:function(result){
                var result=JSON.parse(result);
                for (var i = 0; i < result.length; i++) {
                    loadImg(result[i]);
                }
                judge();
                changeStyle(num);
            },
            type: "get"
        });
    }
    for(var i=2;i<=3;i++){
        pageturn[i].index=i;
        pageturn[i].onclick=function(){
            var p=parseInt(pageturn[this.index].innerHTML);
            pageCnt=p;
            num=this.index;
            clearContent();
            getTableData();
        }
    }
    pageturn[0].onclick=function(){
        pageCnt--;
        num--;
        if(num==1){
            if(pageCnt==1){
                num==1;
            }else{
                num=2;
                for(var i=1;i<=4;i++){
                    pageturn[i].innerHTML=parseInt(pageturn[i].innerHTML)-1;
                }
            }
        }
        clearContent();
        getTableData();
    }
    pageturn[1].onclick=function(){
        if(pageCnt<=2&&pageCnt>0){
            var p=parseInt(pageturn[1].innerHTML);
            pageCnt=p;
            num=1;
            clearContent();
            getTableData();
        }
        if(pageCnt>2) {
            num=2;
            var p=parseInt(pageturn[1].innerHTML);
            pageCnt=p;
            clearContent();
            getTableData();
            for(var i=1;i<=4;i++){
                pageturn[i].innerHTML=parseInt(pageturn[i].innerHTML)-1;
            }
        }
    }
    pageturn[4].onclick=function(){
        var p=parseInt(pageturn[4].innerHTML);
        pageCnt=p;
        if(pageCnt==10){
            num=4;
        }else{
            num=3;
            for(var i=1;i<=4;i++){
                pageturn[i].innerHTML=parseInt(pageturn[i].innerHTML)+1;
            }
        }
        clearContent();
        getTableData();
    }
    pageturn[5].onclick=function(){
        num++;
        pageCnt++;
        if(num==4){
            if(pageCnt==10){
                num==4;
            }else{
                num=3;
                for(var i=1;i<=4;i++){
                    pageturn[i].innerHTML=parseInt(pageturn[i].innerHTML)+1;
                }
            }
        }
        clearContent();
        getTableData();
    }
    function changeStyle(num){
        for(var i=1;i<=4;i++){
            pageturn[i].style.color="#333";
        }
        pageturn[num].style.color="red";
    }
    function judge(){
        if(pageCnt==1){
            pageturn[0].disabled="disabled";
            pageturn[0].style.color="#999";
        }else{
            pageturn[0].removeAttribute("disabled");
            pageturn[0].style.color="#222";
        }
        if(pageCnt==10){
            pageturn[5].disabled="disabled";
            pageturn[5].style.color="#999";
        }else{
            pageturn[5].removeAttribute("disabled");
            pageturn[5].style.color="#222";
        }
    }
    function clearContent(){
        var product=$(".conList");
        while(product[0].children.length>0){
            product[0].removeChild(product[0].children[0]);
        }
    }
    function loadImg(data){
       var str='<li><div class="newstitle">'+data.date+'</div>'+
            '<a class="newsimg" href="#"><img src="/weiwei/img/tips/'+data.imgsrc+'"/></a>'+
            '<div class="newscon"><h3>'+data.title+'</h3><p>'+data.pcon+'</p>'+
            '<span><a href="#">MORE</a></span> </div> </li>';
        $(".conList").append(str);
    }
});