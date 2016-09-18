// JavaScript Document
$(document).ready(function()
{

    // New values图片真实大小
    var animateWgt = '554px';
    var animateHgt = '554px';
    //默认显示大小
    var defaultWgt = '324px';
    var defaultHgt = '270px';
    //第二排图片的top值
//	var defaultBottom = '284px';
    var defaultBottom = '282px';

    var taget_animateWgt = '209px';
    var notaget_animateWgt = '136px';

//	var box1_default_top = '20px';
    var box1_default_top = '0px';
//	var box2_default_top = '289px';
    var box2_default_top = '0px';
//	var box3_default_top = '558px';
//	var box3_default_top = '558px';
    var box3_default_top = '282px';
//	var box4_default_top = '827px';
    var box4_default_top = '564px';
//	var box5_default_top = '1096px';
    var box5_default_top = '1128px';


//	var box1_default_left = '20px';
    var box1_default_left = '0px';
//	var box2_default_left = '339px';
    var box2_default_left = '338px';
//	var box3_default_left = '658px';
    var box3_default_left = '676px';

//	var box1_set_left2_top = '544px';
    var box1_set_left2_top = '568px';
//	var box1_set_left3_top = '754px';
    var box1_set_left3_top = '791px';
//	var box1_set_left1_bot = '544px';
    var box1_set_left1_bot = '568px';
//	var box1_set_left2_bot = '684px';
    var box1_set_left2_bot = '716px';
//	var box1_set_left3_bot = '824px';
    var box1_set_left3_bot = '864px';

//	var active_top2_set3_left = '863px';
    var active_top2_set3_left = '906px';
    var active_top2_set3_width = '94px';
//	var active_top2_set2bot_left = '180px';
    var active_top2_set2bot_left = '169px';
    var active_bot2_width = '155px';

//	var active_top3_set2top_left = '230px';
    var active_top3_set2top_left = '223px';
//	var active_top3_left = '440px';
    var active_top3_left = '446px';
//	var active_top3_left_bot2 = '160px';
    var active_top3_left_bot2 = '148px';
//	var active_top3_left_bot3 = '300px';
    var active_top3_left_bot3 = '298px';

    /*
     // Old values
     var animateWgt = '500px';
     var animateHgt = '520px';


     var defaultWgt = '300px';
     var defaultHgt = '250px';


     var defaultBottom = '270px';

     var taget_animateWgt = '200px';
     var notaget_animateWgt = '126px';

     var box1_default_top = '0px';
     var box2_default_top = '270px';
     var box3_default_top = '540px';
     var box4_default_top = '810px';
     var box5_default_top = '1080px';


     var box1_default_left = '0px';
     var box2_default_left = '319px';
     var box3_default_left = '637px';

     var box1_set_left2_top = '520px';
     var box1_set_left3_top = '736px';
     var box1_set_left1_bot = '520px';
     var box1_set_left2_bot = '666px';
     var box1_set_left3_bot = '808px';

     var active_top2_set3_left = '837px'; //860
     var active_top2_set3_width = '98px';
     var active_top2_set2bot_left = '160px'; //180
     var active_bot2_width = '140px';

     var active_top3_set2top_left = '220px'; //240
     var active_top3_left = '437px'; //460
     var active_top3_left_bot2 = '146px'; //166
     var active_top3_left_bot3 = '292px'; //312*/

    var box1_width = defaultWgt;
    var box1_height = defaultHgt;
    var box1_left = box1_default_left;
    var box1_top = box1_default_top;

    var box2_width = defaultWgt;
    var box2_height = defaultHgt;
    var box2_left = box2_default_left;
    var box2_top = box1_default_top;

    var box3_width = defaultWgt;
    var box3_height = defaultHgt;
    var box3_left = box3_default_left;
    var box3_top = box1_default_top;

    var box4_width = defaultWgt;
    var box4_height = defaultHgt;
    var box4_left = box1_default_left;
    var box4_top = box2_default_top;

    var box5_width = defaultWgt;
    var box5_height = defaultHgt;
    var box5_left = box2_default_left;
    var box5_top = box2_default_top;

    var box6_width = defaultWgt;
    var box6_height = defaultHgt;
    var box6_left = box3_default_left;
    var box6_top = box2_default_top;



    $('.list-item').bind(
        {
            mouseenter: function()
            {

                var id = $(this).attr('id');
                switch (id)
                {
                    case 'box1':
                        return ( //taget box 1
                            (box1_width = animateWgt), (box1_height = animateHgt), (box1_left = box1_default_left), (box1_top = box1_default_top),

                                (box2_width = taget_animateWgt), (box2_height = defaultHgt), (box2_left = box1_set_left2_top), (box2_top = box1_default_top),

                                (box3_width = taget_animateWgt), (box3_height = defaultHgt), (box3_left = box1_set_left3_top), (box3_top = box1_default_top),

                                (box4_width = notaget_animateWgt), (box4_height =
                                defaultHgt), (box4_left = box1_set_left1_bot), (box4_top =
                                box2_default_top),

                                (box5_width = notaget_animateWgt), (box5_height =
                                defaultHgt), (box5_left = box1_set_left2_bot), (box5_top =
                                box2_default_top),

                                (box6_width = notaget_animateWgt), (box6_height =
                                defaultHgt), (box6_left = box1_set_left3_bot), (box6_top =
                                box2_default_top),

                                (box7_width = defaultWgt), (box7_height = defaultHgt), (box7_left = box1_default_left), (box7_top = box3_default_top),

                                (box8_width = defaultWgt), (box8_height = defaultHgt), (box8_left = box2_default_left), (box8_top = box3_default_top),

                                (box9_width = defaultWgt), (box9_height = defaultHgt), (box9_left = box3_default_left), (box9_top = box3_default_top),

                                (box10_width = defaultWgt), (box10_height = defaultHgt), (box10_left = box1_default_left), (box10_top = box4_default_top),

                                (box11_width = defaultWgt), (box11_height = defaultHgt), (box11_left = box2_default_left), (box11_top = box4_default_top),

                                (box12_width = defaultWgt), (box12_height = defaultHgt), (box12_left = box3_default_left), (box12_top = box4_default_top),

                                (box13_width = defaultWgt), (box13_height = defaultHgt), (box13_left = box1_default_left), (box13_top = box5_default_top),

                                (box14_width = defaultWgt), (box14_height = defaultHgt), (box14_left = box2_default_left), (box14_top = box5_default_top),

                                (box15_width = defaultWgt), (box15_height = defaultHgt), (box15_left = box3_default_left), (box15_top = box5_default_top),


                                (create_animate()));
                        break;
                    case 'box2':

                        return ( //taget box 2
                            (box1_width = defaultWgt), (box1_height = defaultHgt), (box1_left = box1_default_left), (box1_top = box1_default_top),

                                (box2_width = animateWgt), (box2_height = animateHgt), (box2_left = box2_default_left), (box2_top = box1_default_top),

                                (box3_width = active_top2_set3_width), (box3_height =
                                defaultHgt), (box3_left = active_top2_set3_left), (box3_top =
                                box1_default_top),

                                (box4_width = active_bot2_width), (box4_height =
                                defaultHgt), (box4_left = box1_default_left), (box4_top =
                                box2_default_top),

                                (box5_width = active_bot2_width), (box5_height =
                                defaultHgt), (box5_left = active_top2_set2bot_left), (box5_top =
                                box2_default_top),

                                (box6_width = active_top2_set3_width), (box6_height =
                                defaultHgt), (box6_left = active_top2_set3_left), (box6_top =
                                box2_default_top),

                                (box7_width = defaultWgt), (box7_height = defaultHgt), (box7_left = box1_default_left), (box7_top = box3_default_top),

                                (box8_width = defaultWgt), (box8_height = defaultHgt), (box8_left = box2_default_left), (box8_top = box3_default_top),

                                (box9_width = defaultWgt), (box9_height = defaultHgt), (box9_left = box3_default_left), (box9_top = box3_default_top),

                                (box10_width = defaultWgt), (box10_height = defaultHgt), (box10_left = box1_default_left), (box10_top = box4_default_top),

                                (box11_width = defaultWgt), (box11_height = defaultHgt), (box11_left = box2_default_left), (box11_top = box4_default_top),

                                (box12_width = defaultWgt), (box12_height = defaultHgt), (box12_left = box3_default_left), (box12_top = box4_default_top),

                                (box13_width = defaultWgt), (box13_height = defaultHgt), (box13_left = box1_default_left), (box13_top = box5_default_top),

                                (box14_width = defaultWgt), (box14_height = defaultHgt), (box14_left = box2_default_left), (box14_top = box5_default_top),

                                (box15_width = defaultWgt), (box15_height = defaultHgt), (box15_left = box3_default_left), (box15_top = box5_default_top),

                                (create_animate()));
                        break;

                    case 'box3':
                        return ( //taget box 3
                            (box1_width = taget_animateWgt), (box1_height = defaultHgt), (box1_left = box1_default_left), (box1_top = box1_default_top),

                                (box2_width = taget_animateWgt), (box2_height = defaultHgt), (box2_left = active_top3_set2top_left), (box2_top = box1_default_top),

                                (box3_width = animateWgt), (box3_height = animateHgt), (box3_left = active_top3_left), (box3_top = box1_default_top),

                                (box4_width = notaget_animateWgt), (box4_height =
                                defaultHgt), (box4_left = box1_default_left), (box4_top =
                                box2_default_top),

                                (box5_width = notaget_animateWgt), (box5_height =
                                defaultHgt), (box5_left = active_top3_left_bot2), (box5_top =
                                box2_default_top),

                                (box6_width = notaget_animateWgt), (box6_height =
                                defaultHgt), (box6_left = active_top3_left_bot3), (box6_top =
                                box2_default_top),

                                (box7_width = defaultWgt), (box7_height = defaultHgt), (box7_left = box1_default_left), (box7_top = box3_default_top),

                                (box8_width = defaultWgt), (box8_height = defaultHgt), (box8_left = box2_default_left), (box8_top = box3_default_top),

                                (box9_width = defaultWgt), (box9_height = defaultHgt), (box9_left = box3_default_left), (box9_top = box3_default_top),

                                (box10_width = defaultWgt), (box10_height = defaultHgt), (box10_left = box1_default_left), (box10_top = box4_default_top),

                                (box11_width = defaultWgt), (box11_height = defaultHgt), (box11_left = box2_default_left), (box11_top = box4_default_top),

                                (box12_width = defaultWgt), (box12_height = defaultHgt), (box12_left = box3_default_left), (box12_top = box4_default_top),

                                (box13_width = defaultWgt), (box13_height = defaultHgt), (box13_left = box1_default_left), (box13_top = box5_default_top),

                                (box14_width = defaultWgt), (box14_height = defaultHgt), (box14_left = box2_default_left), (box14_top = box5_default_top),

                                (box15_width = defaultWgt), (box15_height = defaultHgt), (box15_left = box3_default_left), (box15_top = box5_default_top),


                                (create_animate()));
                        break;

                    case 'box4':
                        return ( //taget box 4
                            (box1_width = defaultWgt), (box1_height = defaultHgt), (box1_left = box1_default_left), (box1_top = box1_default_top),

                                (box2_width = defaultWgt), (box2_height = defaultHgt), (box2_left = box2_default_left), (box2_top = box1_default_top),

                                (box3_width = defaultWgt), (box3_height = defaultHgt), (box3_left = box3_default_left), (box3_top = box1_default_top),

                                (box4_width = animateWgt), (box4_height = animateHgt), (box4_left = box1_default_left), (box4_top = box2_default_top),

                                (box5_width = taget_animateWgt), (box5_height = defaultHgt), (box5_left = box1_set_left2_top), (box5_top = box2_default_top),

                                (box6_width = taget_animateWgt), (box6_height = defaultHgt), (box6_left = box1_set_left3_top), (box6_top = box2_default_top),

                                (box7_width = notaget_animateWgt), (box7_height =
                                defaultHgt), (box7_left = box1_set_left1_bot), (box3_top =
                                box1_default_top),

                                (box8_width = notaget_animateWgt), (box8_height =
                                defaultHgt), (box8_left = box1_set_left2_bot), (box8_top =
                                box3_default_top),

                                (box9_width = notaget_animateWgt), (box9_height =
                                defaultHgt), (box9_left = box1_set_left3_bot), (box9_top =
                                box3_default_top),

                                (box10_width = defaultWgt), (box10_height = defaultHgt), (box10_left = box1_default_left), (box10_top = box4_default_top),

                                (box11_width = defaultWgt), (box11_height = defaultHgt), (box11_left = box2_default_left), (box11_top = box4_default_top),

                                (box12_width = defaultWgt), (box12_height = defaultHgt), (box12_left = box3_default_left), (box12_top = box4_default_top),

                                (box13_width = defaultWgt), (box13_height = defaultHgt), (box13_left = box1_default_left), (box13_top = box5_default_top),

                                (box14_width = defaultWgt), (box14_height = defaultHgt), (box14_left = box2_default_left), (box14_top = box5_default_top),

                                (box15_width = defaultWgt), (box15_height = defaultHgt), (box15_left = box3_default_left), (box15_top = box5_default_top),


                                (create_animate()));
                        break;

                    case 'box5':

                        return ( //taget box 5
                            (box1_width = defaultWgt), (box1_height = defaultHgt), (box1_left = box1_default_left), (box1_top = box1_default_top), (box2_width = defaultWgt), (box2_height = defaultHgt), (box2_left = box2_default_left), (box2_top = box1_default_top),

                                (box3_width = defaultWgt), (box3_height = defaultHgt), (box3_left = box3_default_left), (box3_top = box1_default_top),


                                (box4_width = defaultWgt), (box4_height = defaultHgt), (box4_left = box1_default_left), (box4_top = box2_default_top),

                                (box5_width = animateWgt), (box5_height = animateHgt), (box5_left = box2_default_left), (box5_top = box2_default_top),

                                (box6_width = active_top2_set3_width), (box6_height =
                                defaultHgt), (box6_left = active_top2_set3_left), (box6_top =
                                box2_default_top),

                                (box7_width = active_bot2_width), (box7_height =
                                defaultHgt), (box7_left = box1_default_left), (box7_top =
                                box3_default_top),

                                (box8_width = active_bot2_width), (box8_height =
                                defaultHgt), (box8_left = active_top2_set2bot_left), (box8_top =
                                box3_default_top),

                                (box9_width = active_top2_set3_width), (box9_height =
                                defaultHgt), (box9_left = active_top2_set3_left), (box9_top =
                                box3_default_top),

                                (box10_width = defaultWgt), (box10_height = defaultHgt), (box10_left = box1_default_left), (box10_top = box4_default_top),

                                (box11_width = defaultWgt), (box11_height = defaultHgt), (box11_left = box2_default_left), (box11_top = box4_default_top),

                                (box12_width = defaultWgt), (box12_height = defaultHgt), (box12_left = box3_default_left), (box12_top = box4_default_top),

                                (box13_width = defaultWgt), (box13_height = defaultHgt), (box13_left = box1_default_left), (box13_top = box5_default_top),

                                (box14_width = defaultWgt), (box14_height = defaultHgt), (box14_left = box2_default_left), (box14_top = box5_default_top),

                                (box15_width = defaultWgt), (box15_height = defaultHgt), (box15_left = box3_default_left), (box15_top = box5_default_top),


                                (create_animate()));
                        break;

                    case 'box6':
                        return ( //taget box 6
                            (box1_width = defaultWgt), (box1_height = defaultHgt), (box1_left = box1_default_left), (box1_top = box1_default_top), (box2_width = defaultWgt), (box2_height = defaultHgt), (box2_left = box2_default_left), (box2_top = box1_default_top),

                                (box3_width = defaultWgt), (box3_height = defaultHgt), (box3_left = box3_default_left), (box3_top = box1_default_top),

                                (box4_width = taget_animateWgt), (box4_height = defaultHgt), (box4_left = box1_default_left), (box4_top = box2_default_top),

                                (box5_width = taget_animateWgt), (box5_height = defaultHgt), (box5_left = active_top3_set2top_left), (box5_top = box2_default_top),

                                (box6_width = animateWgt), (box6_height = animateHgt), (box6_left = active_top3_left), (box6_top = box2_default_top),

                                (box7_width = notaget_animateWgt), (box7_height =
                                defaultHgt), (box7_left = box1_default_left), (box7_top =
                                box3_default_top),

                                (box8_width = notaget_animateWgt), (box8_height =
                                defaultHgt), (box8_left = active_top3_left_bot2), (box8_top =
                                box3_default_top),

                                (box9_width = notaget_animateWgt), (box9_height =
                                defaultHgt), (box9_left = active_top3_left_bot3), (box9_top =
                                box3_default_top),

                                (box10_width = defaultWgt), (box10_height = defaultHgt), (box10_left = box1_default_left), (box10_top = box4_default_top),

                                (box11_width = defaultWgt), (box11_height = defaultHgt), (box11_left = box2_default_left), (box11_top = box4_default_top),

                                (box12_width = defaultWgt), (box12_height = defaultHgt), (box12_left = box3_default_left), (box12_top = box4_default_top),

                                (box13_width = defaultWgt), (box13_height = defaultHgt), (box13_left = box1_default_left), (box13_top = box5_default_top),

                                (box14_width = defaultWgt), (box14_height = defaultHgt), (box14_left = box2_default_left), (box14_top = box5_default_top),

                                (box15_width = defaultWgt), (box15_height = defaultHgt), (box15_left = box3_default_left), (box15_top = box5_default_top),


                                (create_animate()));
                        break;

                    case 'box7':
                        return ( //taget box 13
                            (box1_width = defaultWgt), (box1_height = defaultHgt), (box1_left = box1_default_left), (box1_top = box1_default_top),

                                (box2_width = defaultWgt), (box2_height = defaultHgt), (box2_left = box2_default_left), (box2_top = box1_default_top),

                                (box3_width = defaultWgt), (box3_height = defaultHgt), (box3_left = box3_default_left), (box3_top = box1_default_top),

                                (box4_width = defaultWgt), (box4_height = defaultHgt), (box4_left = box1_default_left), (box4_top = box2_default_top),

                                (box5_width = defaultWgt), (box5_height = defaultHgt), (box5_left = box2_default_left), (box5_top = box2_default_top),

                                (box6_width = defaultWgt), (box6_height = defaultHgt), (box6_left = box3_default_left), (box6_top = box2_default_top),

                                (box7_width = defaultWgt), (box7_height = defaultHgt), (box7_left = box1_default_left), (box7_top = box3_default_top),

                                (box8_width = defaultWgt), (box8_height = defaultHgt), (box8_left = box2_default_left), (box8_top = box3_default_top),

                                (box9_width = defaultWgt), (box9_height = defaultHgt), (box9_left = box3_default_left), (box9_top = box3_default_top),

                                (box10_width = defaultWgt), (box10_height = defaultHgt), (box10_left = box1_default_left), (box10_top = box4_default_top),

                                (box11_width = defaultWgt), (box11_height = defaultHgt), (box11_left = box2_default_left), (box11_top = box4_default_top),

                                (box12_width = defaultWgt), (box12_height = defaultHgt), (box12_left = box3_default_left), (box12_top = box4_default_top),

                                (box13_width = defaultWgt), (box13_height = defaultHgt), (box13_left = box1_default_left), (box13_top = box5_default_top),

                                (box14_width = defaultWgt), (box14_height = defaultHgt), (box14_left = box2_default_left), (box14_top = box5_default_top),

                                (box15_width = defaultWgt), (box15_height = defaultHgt), (box15_left = box3_default_left), (box15_top = box5_default_top),




                                (create_animate()));
                        break;

                    case 'box8':
                        return ( //taget box 14
                            (box1_width = defaultWgt), (box1_height = defaultHgt), (box1_left = box1_default_left), (box1_top = box1_default_top),

                                (box2_width = defaultWgt), (box2_height = defaultHgt), (box2_left = box2_default_left), (box2_top = box1_default_top),

                                (box3_width = defaultWgt), (box3_height = defaultHgt), (box3_left = box3_default_left), (box3_top = box1_default_top),

                                (box4_width = defaultWgt), (box4_height = defaultHgt), (box4_left = box1_default_left), (box4_top = box2_default_top),

                                (box5_width = defaultWgt), (box5_height = defaultHgt), (box5_left = box2_default_left), (box5_top = box2_default_top),

                                (box6_width = defaultWgt), (box6_height = defaultHgt), (box6_left = box3_default_left), (box6_top = box2_default_top),

                                (box7_width = defaultWgt), (box7_height = defaultHgt), (box7_left = box1_default_left), (box7_top = box3_default_top),

                                (box8_width = defaultWgt), (box8_height = defaultHgt), (box8_left = box2_default_left), (box8_top = box3_default_top),

                                (box9_width = defaultWgt), (box9_height = defaultHgt), (box9_left = box3_default_left), (box9_top = box3_default_top),

                                (box10_width = defaultWgt), (box10_height = defaultHgt), (box10_left = box1_default_left), (box10_top = box4_default_top),

                                (box11_width = defaultWgt), (box11_height = defaultHgt), (box11_left = box2_default_left), (box11_top = box4_default_top),

                                (box12_width = defaultWgt), (box12_height = defaultHgt), (box12_left = box3_default_left), (box12_top = box4_default_top),

                                (box13_width = defaultWgt), (box13_height = defaultHgt), (box13_left = box1_default_left), (box13_top = box5_default_top),

                                (box14_width = defaultWgt), (box14_height = defaultHgt), (box14_left = box2_default_left), (box14_top = box5_default_top),

                                (box15_width = defaultWgt), (box15_height = defaultHgt), (box15_left = box3_default_left), (box15_top = box5_default_top),




                                (create_animate()));
                        break;

                    case 'box9':
                        return ( //taget box 15
                            (box1_width = defaultWgt), (box1_height = defaultHgt), (box1_left = box1_default_left), (box1_top = box1_default_top),

                                (box2_width = defaultWgt), (box2_height = defaultHgt), (box2_left = box2_default_left), (box2_top = box1_default_top),

                                (box3_width = defaultWgt), (box3_height = defaultHgt), (box3_left = box3_default_left), (box3_top = box1_default_top),

                                (box4_width = defaultWgt), (box4_height = defaultHgt), (box4_left = box1_default_left), (box4_top = box2_default_top),

                                (box5_width = defaultWgt), (box5_height = defaultHgt), (box5_left = box2_default_left), (box5_top = box2_default_top),

                                (box6_width = defaultWgt), (box6_height = defaultHgt), (box6_left = box3_default_left), (box6_top = box2_default_top),

                                (box7_width = defaultWgt), (box7_height = defaultHgt), (box7_left = box1_default_left), (box7_top = box3_default_top),

                                (box8_width = defaultWgt), (box8_height = defaultHgt), (box8_left = box2_default_left), (box8_top = box3_default_top),

                                (box9_width = defaultWgt), (box9_height = defaultHgt), (box9_left = box3_default_left), (box9_top = box3_default_top),

                                (box10_width = defaultWgt), (box10_height = defaultHgt), (box10_left = box1_default_left), (box10_top = box4_default_top),

                                (box11_width = defaultWgt), (box11_height = defaultHgt), (box11_left = box2_default_left), (box11_top = box4_default_top),

                                (box12_width = defaultWgt), (box12_height = defaultHgt), (box12_left = box3_default_left), (box12_top = box4_default_top),

                                (box13_width = defaultWgt), (box13_height = defaultHgt), (box13_left = box1_default_left), (box13_top = box5_default_top),

                                (box14_width = defaultWgt), (box14_height = defaultHgt), (box14_left = box2_default_left), (box14_top = box5_default_top),

                                (box15_width = defaultWgt), (box15_height = defaultHgt), (box15_left = box3_default_left), (box15_top = box5_default_top),




                                (create_animate()));
                        break;



                    default:
                        break;
                }
            }

        });

    var create_animate = function()
    {

        $('#box4').stop(true, true).animate(
            {
                width: box4_width,
                height: box4_height,
                left: box4_left,
                top: box4_top
            });
        $('#box5').stop(true, true).animate(
            {
                width: box5_width,
                height: box5_height,
                left: box5_left,
                top: box5_top
            });
        $('#box6').stop(true, true).animate(
            {
                width: box6_width,
                height: box6_height,
                left: box6_left,
                top: box6_top
            });

        $('#box7').stop(true, true).animate(
            {
                width: box7_width,
                height: box7_height,
                left: box7_left,
                top: box7_top
            });
        $('#box8').stop(true, true).animate(
            {
                width: box8_width,
                height: box8_height,
                left: box8_left,
                top: box8_top
            });
        $('#box9').stop(true, true).animate(
            {
                width: box9_width,
                height: box9_height,
                left: box9_left,
                top: box9_top
            });
        /*$('#box10').stop(true, true).animate(
         {
         width: box10_width,
         height: box10_height,
         left: box10_left,
         top: box10_top
         });
         $('#box11').stop(true, true).animate(
         {
         width: box11_width,
         height: box11_height,
         left: box11_left,
         top: box11_top
         });
         $('#box12').stop(true, true).animate(
         {
         width: box12_width,
         height: box12_height,
         left: box12_left,
         top: box12_top
         });

         $('#box13').stop(true, true).animate(
         {
         width: box13_width,
         height: box13_height,
         left: box13_left,
         top: box13_top
         });
         $('#box14').stop(true, true).animate(
         {
         width: box14_width,
         height: box14_height,
         left: box14_left,
         top: box14_top
         });
         $('#box15').stop(true, true).animate(
         {
         width: box15_width,
         height: box15_height,
         left: box15_left,
         top: box15_top
         });*/
    }
    $('.list-wrapper').bind(
        {
            mouseleave: function()
            {
                return (

                    (box1_width = defaultWgt), (box1_height = defaultHgt), (box1_left = box1_default_left), (box1_top = box1_default_top),

                        (box2_width = defaultWgt), (box2_height = defaultHgt), (box2_left = box2_default_left), (box2_top = box1_default_top),

                        (box3_width = defaultWgt), (box3_height = defaultHgt), (box3_left = box3_default_left), (box3_top = box1_default_top),

                        (box4_width = defaultWgt), (box4_height = defaultHgt), (box4_left = box1_default_left), (box4_top = box2_default_top),

                        (box5_width = defaultWgt), (box5_height = defaultHgt), (box5_left = box2_default_left), (box5_top = box2_default_top),

                        (box6_width = defaultWgt), (box6_height = defaultHgt), (box6_left = box3_default_left), (box6_top = box2_default_top),

                        (box7_width = defaultWgt), (box7_height = defaultHgt), (box7_left = box1_default_left), (box7_top = box3_default_top),

                        (box8_width = defaultWgt), (box8_height = defaultHgt), (box8_left = box2_default_left), (box8_top = box3_default_top),

                        (box9_width = defaultWgt), (box9_height = defaultHgt), (box9_left = box3_default_left), (box9_top = box3_default_top),

                        (box10_width = defaultWgt), (box10_height = defaultHgt), (box10_left = box1_default_left), (box10_top = box4_default_top),

                        (box11_width = defaultWgt), (box11_height = defaultHgt), (box11_left = box2_default_left), (box11_top = box4_default_top),

                        (box12_width = defaultWgt), (box12_height = defaultHgt), (box12_left = box3_default_left), (box12_top = box4_default_top),

                        (box13_width = defaultWgt), (box13_height = defaultHgt), (box13_left = box1_default_left), (box13_top = box5_default_top),

                        (box14_width = defaultWgt), (box14_height = defaultHgt), (box14_left = box2_default_left), (box14_top = box5_default_top),

                        (box15_width = defaultWgt), (box15_height = defaultHgt), (box15_left = box3_default_left), (box15_top = box5_default_top),

                        (create_animate()));
            }
        });
});