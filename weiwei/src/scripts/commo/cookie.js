/**
 * Created by Administrator on 2016/8/12.
 */
var cookie={
    //设置cookie
    setCookie:function(name,value,days){

        var date=new Date()
        date.setDate(date.getDate()+days);
        //document.cookie=name+"="+value+";expires"+date;
        document.cookie=name+"="+encodeURIComponent(value)+";expires"+date;
    },
//获取cookie
    getCookie:function(name){
        var cookieValue;
        var strCookies=document.cookie;
        var arrCookies=strCookies.split("; ");
        for(var i=0;i<arrCookies.length;i++){
            var Item=arrCookies[i].split("=");
            if(Item[0]==name){
                cookieValue=Item[1];
            }
        }
        return decodeURIComponent(cookieValue);
    },
//删除cookie
    removeCookie:function(name){
        setCookie(name,"",-1);
    }
}

module.exports=cookie;