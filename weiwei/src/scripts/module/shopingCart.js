/**
 * Created by Administrator on 2016/9/14.
 */
var headerCon=require('../tpls/subheader.string');
var bodyCon=require('../tpls/shopingCart_body.string');
var footCon=require('../tpls/footer.string');
var common=require('../commo/until_common.js');
var cookie=require('../commo/cookie.js');
var magnifying=require('../commo/magnifying.js');
$(function(){
    common.renderhtml(headerCon + bodyCon + footCon);
    init_city_select($("#selectCity"));
    magnifying();

    /*购物车*/
    var count;
    $(".addToCart").click(function(){
        count=0;
        $(".ncs-cart-popup").css("display","none");
        var productInfo = new Object();
        productInfo.name = cartName;
        productInfo.price = cartPrice;
        productInfo.imgsrc =specId;
        productInfo.cnt=1;
        var products=cookie.getCookie("productCookie");
        var arrProducts=[]; //存储所有的商品在此arrProducts中
        if(products!="undefined")
        {
            arrProducts=JSON.parse(products);
        }
        var flag=false;
        for(var j=0;j<arrProducts.length;j++)
        {
            if(arrProducts[j].name==productInfo.name)
            {
                flag=true;
            }
        }
        if(!flag)
        {
            arrProducts.push(productInfo);
        }
        var strProInfo=JSON.stringify(arrProducts); //json对象转化为string；
        //alert(strProInfo);
        cookie.setCookie("productCookie",strProInfo,30);
        getProductCnt();
    })
    function getProductCnt(){
        $(".ncs-cart-popup").css("display","block");
        var carCookies=cookie.getCookie("productCookie"); //string
        if(carCookies.length>0)
        {
            var arrCookies=JSON.parse(carCookies);//string->object
            for(var i=0;i<arrCookies.length;i++)
            {
                count+=arrCookies[i].cnt;
            }
            showCount(count);
        }
    }
    function showCount(count)
    {
        $("#bold_num").text(count);
    }
/*放大镜*/

})