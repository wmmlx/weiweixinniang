/**
 * Created by Administrator on 2016/9/13.
 */

var headerCon=require('./tpls/header.string');
var bodyCon=require('./tpls/index_body.string');
var footCon=require('./tpls/footer.string');
var silderbar=require("./tpls/silderbar.string")
var common=require('./commo/until_common.js');;
var list=require('./module/index.js');
$(function(){
    common.renderhtml(headerCon+bodyCon+footCon+silderbar);
    list();
})