/**
 * Created by Administrator on 2016/9/16.
 */
var headerCon=require('../tpls/subheader.string');
var bodyCon=require('../tpls/login_body.string');
var footCon=require('../tpls/footer.string');
var common=require('../commo/until_common.js');
$(function() {
    common.renderhtml(headerCon + bodyCon + footCon);
    var txt=$("#user");
    var usertip=$("#usertip");
    var pass=$("#pass")
    var login=$("#btn");
    txt.blur(function(){
        var user = txt.val();
        var xmlHttp;
        if(window.XMLHttpRequest){
            xmlHttp=new XMLHttpRequest();
        }else{
            xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlHttp.onreadystatechange=function(){
            if(xmlHttp.readyState==4){
                if(xmlHttp.status==200){
                    var result=eval("("+xmlHttp.responseText+")");
                    if(result==-1){
                        usertip.css("display","block");
                    }else{
                        usertip.css("display","none");
                    }
                }else{
                    alert("未获取到");
                }
            }
        }
        xmlHttp.open("post", "http://localhost:8080/user/CheckUserName", true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send("username="+user);
    })
    login.click(function() {
        var user = txt.val();
        var passValue=pass.val();
        if(user==""||passValue==""){
            alert("用户名或者密码不能为空");
        }else{
            var xmlHttp;
            if(window.XMLHttpRequest){
                xmlHttp=new XMLHttpRequest();
            }else{
                xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlHttp.onreadystatechange=function(){
                if(xmlHttp.readyState==4){
                    if(xmlHttp.status==200){
                        var result=eval("("+xmlHttp.responseText+")");
                        if(result==1){
                            location.assign("xiangqing.html");
                        }else{
                            alert("失败");
                        }
                    }else{
                        alert("未获取到");
                    }
                }
            }
            xmlHttp.open("post", "http://localhost:8080/user/login", true);
            xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlHttp.send("name="+user+"&password="+passValue);
        }
    })
});