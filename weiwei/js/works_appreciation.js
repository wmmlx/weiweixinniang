/**
 * Created by Administrator on 2016/9/9.
 */
var pageturn=$("#pageturn").find("button");
var pageindex=1;
var pageMode=0;
judge();
getData();
function getData(){
    if(pageMode==0){
        $("#pageturn").find("button").css("display","block");
        $("#pageturn").find("span").text("共4页 115条记录");
        $.ajax({
            url:"/product/GetProductsByPage_get",
            data:{
                "pagesize":30,
                "pageindex":pageindex
            },
            success:function(data){
                for(var i=0;i<data.length;i++){
                    var dataObj=JSON.parse(data[i].Data);
                    loadImg(dataObj);
                }
                judge();
                changeStyle();
            },
            dataType:"json"
        });
    }
    if(pageMode==1){
        $("#pageturn").find("button").css("display","block");
        $("#pageturn").find("span").text("共4页 115条记录");
        $.ajax({
            url:"../mock/hunshazhao"+pageindex+".txt",
            success:function(result){
                clearContent();
                var dataObj=JSON.parse(result);
                for(var i=0;i<dataObj.length;i++){
                    loadImg(dataObj[i]);
                }
                judge();
                changeStyle();
            },
            type:"get"
        })
    }
    if(pageMode==2){
        $("#pageturn").find("button").css("display","none");
        $("#pageturn").find("span").text("共1页 13条记录");
        //$("#pageturn").html("共1页 13条记录");
        $.ajax({
            url:"../mock/yunfuzhao"+pageindex+".txt",
            success:function(result){
                clearContent();
                var dataObj=JSON.parse(result);
                for(var i=0;i<dataObj.length;i++){
                    loadImg(dataObj[i]);
                }
                judge();
                changeStyle();
            },
            type:"get"
        })
    }
    if(pageMode==3){
        $("#pageturn").find("button").css("display","none");
        $("#pageturn").find("span").text("共1页 2条记录");
        $.ajax({
            url:"../mock/quanjiafu"+pageindex+".txt",
            success:function(result){
                clearContent();
                var dataObj=JSON.parse(result);
                for(var i=0;i<dataObj.length;i++){
                    loadImg(dataObj[i]);
                }
                judge();
                changeStyle();
            },
            type:"get"
        })
    }
}
function judge(){
    if(pageindex==1){
        pageturn[0].disabled="disabled";
        pageturn[0].style.color="#ddd"
    }else{
        pageturn[0].removeAttribute("disabled");
        pageturn[0].style.color="#666"
    }
    if(pageindex==4){
        pageturn[5].disabled="disabled";
        pageturn[5].style.color="#ddd"
    }else{
        pageturn[5].removeAttribute("disabled");
        pageturn[5].style.color="#666"
    }
}
function loadImg(data){
    var str=$('<a href="#" class="dlbox"><dl>'+
        '<dt><img src="/img/'+data.imgsrc+'"/></dt><dd>'+
        '<p>'+data.name+'</p>'+
        '<span>'+data.date+'</span>'+
        '</dd> </dl></a>');
    $(".ZCase").append(str);
}
function changeStyle(){
    for(var i=1;i<=4;i++){
        pageturn[i].style.color="#333";
    }
    pageturn[pageindex].style.color="red";
}
function clearContent(){
    //var product=$(".ZCase");
    $(".ZCase").empty();
    /*while(product[0].children.length>0){
     product[0].removeChild(product[0].children[0]);
     }*/
}
for(var i=1;i<=4;i++){
    pageturn[i].index=i;
    pageturn[i].onclick=function(){
        var p=parseInt(pageturn[this.index].innerHTML);
        pageindex=p;
        clearContent();
        getData();
    }
}
pageturn[0].onclick=function(){
    pageindex--;
    clearContent();
    getData(pageindex);
}
pageturn[5].onclick=function(){
    pageindex++;
    clearContent();
    getData(pageindex);
}
var liList=$("#ZContent_title").find("li");
for(var i=0;i<liList.length;i++){
    liList[i].index=i;
    liList[i].onclick=function(){
        pageindex=1;
        pageMode=this.index;
        changeListStyle(this.index);
        getData();
    }
}
function changeListStyle(index){
    for(var i=0;i<liList.length;i++){
        liList[i].style.borderBottom="0";
        liList[i].style.color="#333";
    }
    liList[index].style.borderBottom="1px solid red";
    liList[index].style.color="red";
}
