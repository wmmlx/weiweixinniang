/**
 * Created by Administrator on 2016/9/11.
 */

window.onload=function() {
    var modelImg_img = $(".modelImg").find("img");
    var modelSpan = $(".modelImg").find("span");
    $(".smallImg").find("img").each(function () {
        $(this).on("mouseover", function () {
            var picSrc = $(this).attr("src")
            var arrSrc = picSrc.split("_");
            arrSrc[1] = "m.jpg";
            var modelSrc = arrSrc.join("_");
            arrSrc[1] = "l.jpg";
            var bigSrc = arrSrc.join("_");
            // console.log(picSrc);
            modelImg_img.attr("src", modelSrc);
            $(".bigImg").find("img").attr("src", bigSrc);
            resetBorderColor();
            $(this).css("border-color", "red");
        })
    })
    function resetBorderColor() {
        $(".smallImg").find("img").each(function () {
            $(this).css("border-color", "#eee");
        });
    }
    $(".modelImg").mouseenter(function () {
        console.log("enter");
        $(".bigImg").animate({
            width: '400px',
            height: '400px',
            left: '360px',
            top: '0px'
        },"slow");
        $(".bigImg img").css({
            'left':'200px',
            'top': '200px',
            'width':'800px',
            'height':'800px'
        })
        modelSpan.css({
            'left': '200px',
            'top':'200px',
            'width':'175px',
            'height':'175px'
        })
        /*$(".bigImg").css("display", "block");*/
        $(".modelImg").mousemove(function (event) {
            var evt = event || window.event;
            var ot = evt.clientY - ($(".modelImg").offset().top - $(document).scrollTop()) - Math.floor(parseInt(modelSpan.css("width"))/2);
            var ol = evt.clientX - ($(".modelImg").offset().left - $(document).scrollLeft()) -Math.floor(parseInt(modelSpan.css("height"))/2);;
            if (ol <= 0) {
                ol = 0;
            }
            if (ot <= 0) {
                ot = 0;
            }
            if (ol >= 175) {
                ol = 175
            }
            if (ot >= 175) {
                ot = 175
            }
            modelSpan.css({
                'left': ol,
                'top': ot
            })
            var ott = ot / 350 * 800;
            var oll = ol / 350 * 800;
            $(".bigImg img").css({
                'left': -oll,
                'top': -ott
            })
        })
    })
    $(".modelImg").mouseleave(function () {
        console.log("leave");
        $(".bigImg").stop();
        $(".bigImg").animate({
            width: '0',
            height: '0',
            left: '200px',
            top: '200px'
        }, "slow");
        /* $(".bigImg").css("display", "none");*/
    })
    $(".modelImg").find("span").on("mousewheel DOMMouseScroll", function(e) {
        e=e||window.event;
        if(e.preventDefault){
            e.preventDefault();
        }
        else{
            e.returnValue=false;
        }
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
        if (delta > 0) {
            // alert(modelSpan.css("width"));
            if(parseInt(modelSpan.css("width"))>100){
                $(".bigImg img").css({
                    'width': '+=4px',
                    'height': '+=4px',
                    'left':'-=2px',
                    'top':'-=2px'
                })
                $(".modelImg").find("span").css({
                    'width': '-=4px',
                    'height': '-=4px',
                    'left':'+=2px',
                    'top':'+=2px'
                })
            }
            // console.log("向上滚动");
        } else if (delta < 0) {
            // console.log("向下滚动");
            if (parseInt(modelSpan.css("width")) < 240) {
                $(".bigImg img").css({
                    'width': '-=4px',
                    'height': '-=4px',
                    'left': '+=2px',
                    'top': '+=2px'
                })
                modelSpan.css({
                    'width': '+=4px',
                    'height': '+=4px',
                    'left': '-=2px',
                    'top': '-=2px'
                })
            }
        }
    });
}