/**
 * Created by Administrator on 2016/8/12.
 */
//…Ë÷√cookie
function setCookie(name,value,days){

    var date=new Date()
    date.setDate(date.getDate()+days);
    //document.cookie=name+"="+value+";expires"+date;
    document.cookie=name+"="+encodeURIComponent(value)+";expires"+date;
}
//ªÒ»°cookie
function getCookie(name){
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
}
//…æ≥˝cookie
function removeCookie(name){
    setCookie(name,"",-1);
}