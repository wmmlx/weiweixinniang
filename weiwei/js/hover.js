/**
 * Created by Administrator on 2016/9/5.
 */
function $Len(IdName){
    return document.getElementById(IdName).value.length;
}
function $SpaceLen(IdName){
    return document.getElementById(IdName).value.replace(/(^\s*)|(\s*$)/g , '').length;
}


function setTab(name,cursel,n){
    for(i=1;i<=n;i++){
        var menu=document.getElementById(name+i);
        var con=document.getElementById("con_"+name+"_"+i);
        menu.className=i==cursel?"hover":"";
        con.style.display=i==cursel?"block":"none";
    }
}