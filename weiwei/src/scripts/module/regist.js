/**
 * Created by Administrator on 2016/9/16.
 */
var headerCon=require('../tpls/subheader.string');
var bodyCon=require('../tpls/regist_body.string');
var footCon=require('../tpls/footer.string');
var common=require('../commo/until_common.js');
$(function() {
    common.renderhtml(headerCon + bodyCon + footCon);
    var txt=$("#user");
    var pass=$("#pass");
    var re=$("#re");
    var sure=$("#btn");
    var usertip=$("#usertip");
    var passwordtip=$("#passwordtip");
    txt.blur(function(){
        var user = txt.val();
        var reg=/^[a-zA-Z_]{3,}/;
        if(reg.test(user)==false){
            usertip.html("用户名必须是以字母或者下划线开头,至少3位");
            usertip.css("display","block");
        }else{
            usertip.css("display","none");
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
                            usertip.html("用户名已存在");
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
        }
    });
    pass.blur(function(){
        var passvalue=pass.val();
        var reg=/.{6,}/;
        if(reg.test(passvalue)==false){
            passwordtip.html("密码至少6位");
            passwordtip.css("display","block");
        }else{
            passwordtip.css("display","none");
        }
    });
    sure.click(function(){
        if(re.val()==pass.val()){
            passwordtip.css("display","none");
            if($("#sureService").is(':checked')){
                $("#serviceTip").css("display","none");
                var xmlHttp;
                var user = txt.val();
                var passValue=pass.val();
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
                            }
                            else{
                                alert("失败");
                            }
                        }else{
                            alert("未获取到");
                        }
                    }
                }
                xmlHttp.open("post", "http://localhost:8080/user/register", true);
                xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xmlHttp.send("name="+user+"&password="+passValue);
            }else{
                $("#serviceTip").css("display","block");
            }


        }else{
            passwordtip.html("密码不一致");
            passwordtip.css("display","block");
        }
    });
});