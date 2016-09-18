/**
 * Created by Administrator on 2016/9/16.
 */
var headerCon=require('../tpls/subheader.string');
var bodyCon=require('../tpls/banner_body.string');
var footCon=require('../tpls/footer.string');
var common=require('../commo/until_common.js');
$(function() {
    common.renderhtml(headerCon + bodyCon + footCon);
});