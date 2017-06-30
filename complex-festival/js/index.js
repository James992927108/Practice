//google ana
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-52977512-6', 'auto');
ga('send', 'pageview');


//取得HTML元素
//Canvas
var c = document.getElementById("myCanvas");
var mask = document.getElementById("mask");
var ctx = c.getContext("2d");
mouse_move_fac = 0;
alarmtext_element = document.getElementById("alarmtext");

//初始化canvas
function initCanvas() {
    $('#myCanvas').attr("width", $(window).width());
    $('#myCanvas').attr("height", $(window).height());
    mx = screen.width / 2;
    my = screen.height / 2;
    h1_element_offset = {
        left: $(".getlogo").offset().left - 150,
        top: $(".getlogo").offset().top + 100
    };
}
initCanvas();

$(window).resize(function() {
    initCanvas();
});

//遊戲參數設定
var game = {
    width: 40000,
    height: 40000,
    start: true,
    stoptime: 1
};
maxspeed = 7;
starcount = 600;
maxmass = 5000;
minmass = 5;
G = 9.8;
tracelen = 70;
slowfactor = 0.99995;
fps = 33;
pivot_stop_time = 0;
addstar_freq = 3;



//遊戲資料
var datas = {
    stars: [

    ],
    grids: [

    ],
    pivot: {
        x: 0,
        y: 0
    },
    scale: 0.2,
    target_scale: 0.2
};


function alarmtext(text) {
    $("#alarmtext").html(text);
    $("#alarmtext").removeClass("ftext");
    alarmtext_element.offsetWidth = alarmtext_element.offsetWidth;
    $("#alarmtext").addClass("ftext");

}


function transformscale(pos) {
    return {
        x: datas.scale * (pos.x - datas.pivot.x),
        y: datas.scale * (pos.y - datas.pivot.y)
    };
}

setInterval(function() {

    if (game.start) {
        game.stoptime = 1;


    } else {
        game.stoptime++;
        mouse_move_fac = 0;
    }
    //清除所有繪圖
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, game.width, game.height);

    for (ind = 0; ind < datas.grids.length; ind++) {
        st = datas.grids[ind];
        ctx.beginPath();
        ctx.moveTo(transformscale(st.p1).x, transformscale(st.p1).y);
        ctx.lineTo(transformscale(st.p2).x, transformscale(st.p2).y);
        ctx.strokeStyle = "#333";
        ctx.stroke();
    }



    for (ind = 0; ind < datas.stars.length; ind++) {
        st = datas.stars[ind];

        ctx.beginPath();
        ctx.moveTo(transformscale(st).x, transformscale(st).y);

        //畫軌跡 
        ctx.setLineDash([1, 3]);
        ctx.strokeStyle = "rgba(255,255,255,0.1)";
        for (ind2 = 0; ind2 < st.tracelist.length; ind2++) {
            ctx.lineTo(datas.scale * (st.tracelist[ind2].x - datas.pivot.x), datas.scale * (st.tracelist[ind2].y - datas.pivot.y));
        }
        ctx.stroke();

        ctx.setLineDash([0, 0]);
        ctx.beginPath();

        ctx.arc(datas.scale * (st.x - datas.pivot.x), datas.scale * (st.y - datas.pivot.y), datas.scale * st.r / (game.stoptime), 0, 2 * Math.PI, false);

        //ctx.fillStyle = "rgba("+st.color.r+","+st.color.g+","+st.color.b+")";
        ctx.fillStyle = "rgb(" + st.color.r + "," + st.color.g + "," + st.color.b + ")";

        ctx.fill();


    }

    //指標
    ctx.strokeStyle = "#ccc";
    ctx.beginPath();
    var p1 = {
        x: datas.scale * (datas.stars[0].x + (datas.stars[0].r + 40 + 50 * mouse_move_fac) * Math.cos(loc.deg) - datas.pivot.x),
        y: datas.scale * (datas.stars[0].y + (datas.stars[0].r + 40 + 50 * mouse_move_fac) * Math.sin(loc.deg) - datas.pivot.y)
    };
    var p2 = {
        x: datas.scale * (datas.stars[0].x + (datas.stars[0].r + 40) * Math.cos(loc.deg - 0.15 * mouse_move_fac) - datas.pivot.x),
        y: datas.scale * (datas.stars[0].y + (datas.stars[0].r + 40) * Math.sin(loc.deg - 0.15 * mouse_move_fac) - datas.pivot.y)
    };
    var p3 = {
        x: datas.scale * (datas.stars[0].x + (datas.stars[0].r + 40) * Math.cos(loc.deg + 0.15 * mouse_move_fac) - datas.pivot.x),
        y: datas.scale * (datas.stars[0].y + (datas.stars[0].r + 40) * Math.sin(loc.deg + 0.15 * mouse_move_fac) - datas.pivot.y)
    };

    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.stroke();


}, 1000 / 60);

//產生欄位
for (xx = 0; xx < game.width; xx += 180)
    datas.grids.push({
        p1: {
            x: xx,
            y: 0
        },
        p2: {
            x: xx,
            y: game.height
        }
    });

for (yy = 0; yy < game.height; yy += 180)
    datas.grids.push({
        p1: {
            x: 0,
            y: yy
        },
        p2: {
            x: game.width,
            y: yy
        }
    });


//產生星星模組
function star_generate(arg) {

    if (typeof(arg) !== 'undefined') {
        if (typeof arg.type !== 'undefined') {
            if (arg.type == "food") {
                var arg_r = 255;
                var arg_g = 255;
                var arg_b = 255;
                var arg_mass = 100;
            }
        }
        if (typeof arg.v !== 'undefined') {
            var arg_v = { "x": arg.v.x, "y": arg.v.y };
        }
        if (typeof arg.x !== 'undefined') var arg_x = arg.x;
        if (typeof arg.y !== 'undefined') var arg_y = arg.y;
        if (typeof arg.mass !== 'undefined') var arg_mass = arg.mass;
    }
    datas.stars.push({
        x: typeof arg_x !== 'undefined' ? arg_x : Math.random() * game.width,
        y: typeof arg_y !== 'undefined' ? arg_y : Math.random() * game.height,
        r: 0,
        mass: typeof arg_mass !== 'undefined' ? arg_mass : Math.random() * (maxmass - minmass) + minmass,
        v: {
            x: typeof arg_v !== 'undefined' ? arg_v.x : Math.random() * maxspeed - maxspeed / 2,
            y: typeof arg_v !== 'undefined' ? arg_v.y : Math.random() * maxspeed - maxspeed / 2
        },
        color: {
            r: arg_r || parseInt(Math.random() * 200 + 56),
            g: arg_g || parseInt(Math.random() * 200 + 56),
            b: arg_b || parseInt(Math.random() * 200 + 56)
        },
        tag: "",
        tracelist: [

        ]

    });
}

//加入星星
for (i = 0; i < starcount; i++)
    star_generate();

//指定玩家
datas.stars[0].mass = maxmass * 2;
datas.stars[0].tag = "player";
datas.stars[0].x = game.width / 2;
datas.stars[0].y = game.height / 2;

setInterval(function() {
    if (game.start) {
        //改變scale
        datas.scale += (datas.target_scale - datas.scale) * 0.01;

        //移除沒重量的星星
        for (irm = datas.stars.length - 1; irm >= 0; irm--)
            if (datas.stars[irm].mass == 0)
                datas.stars.splice(irm, 1);

            //滑鼠操作
        if (pivot_stop_time <= 0) {
            datas.pivot.x = (datas.stars[0].x) - h1_element_offset.left / datas.scale;
            datas.pivot.y = (datas.stars[0].y) - h1_element_offset.top / datas.scale;
        } else {
            pivot_stop_time--;
        }

        //計算滑鼠滑移加的速度
        loclen = Math.sqrt((mx - loc.x) * (mx - loc.x) + (my - loc.y) * (my - loc.y));
        vpara = mouse_move_fac * Math.pow(datas.stars[0].mass, 0.5) / 100;

        datas.stars[0].v.x += ((loc.x - mx) / loclen) * vpara;
        datas.stars[0].v.y += ((loc.y - my) / loclen) * vpara;

        mouse_move_fac *= 0.95;

        //計算星星最新位置

        for (ind = 0; ind < datas.stars.length; ind++) {
            datas.stars[ind].r = Math.pow(datas.stars[ind].mass, 1 / 3) * 4;

            //新增軌跡
            datas.stars[ind].tracelist.unshift({
                x: datas.stars[ind].x,
                y: datas.stars[ind].y
            });
            if (datas.stars[ind].tracelist.length > tracelen)
                datas.stars[ind].tracelist.splice(-1, 1);

            //更新當下位置
            datas.stars[ind].x += datas.stars[ind].v.x;
            datas.stars[ind].y += datas.stars[ind].v.y;

            //減慢速度
            var slow_em_factor = (Math.pow(Math.E, -datas.stars[ind].mass / 2000000)) * slowfactor;
            datas.stars[ind].v.x *= slow_em_factor;
            datas.stars[ind].v.y *= slow_em_factor;

            if (datas.stars[ind].x < 0) {
                datas.stars[ind].x = game.width;
                datas.stars[ind].tracelist = [];
            }
            if (datas.stars[ind].y < 0) {
                datas.stars[ind].y = game.height;
                datas.stars[ind].tracelist = [];
            }
            if (datas.stars[ind].x > game.width) {
                datas.stars[ind].x = 0;
                datas.stars[ind].tracelist = [];
            }
            if (datas.stars[ind].y > game.height) {
                datas.stars[ind].y = 0;
                datas.stars[ind].tracelist = [];
            }


            //爆炸
            if (datas.stars[ind].mass > 1000000) {

                if (Math.random() * datas.stars[ind].mass < 1000) {
                    explode(ind);
                }
            }

            if (datas.stars[0].mass > 10000000) {
                datas.target_scale = 400000 / ((22.0 / 20) * Math.pow(datas.stars[0].mass, 0.90));
                if (datas.target_scale < 0.026)
                    datas.target_scale = 0.026;
            } else {
                datas.target_scale = 0.2;
            }



        }



        //計算重力跟吃掉
        for (ind = 0; ind < datas.stars.length; ind++)
            for (ind2 = ind + 1; ind2 < datas.stars.length; ind2++) {
                if (datas.stars[ind].mass > 0 && datas.stars[ind2].mass > 0) {
                    var xdis = (datas.stars[ind].x - datas.stars[ind2].x);
                    var ydis = (datas.stars[ind].y - datas.stars[ind2].y);
                    var dis2 = Math.pow(xdis, 2) + Math.pow(ydis, 2) + 10;
                    var dis = Math.sqrt(dis2);
                    var dist = Math.sqrt(dis2 - 10);

                    togetherdis = Math.abs(datas.stars[ind].r - datas.stars[ind2].r) * 1.5;

                    force = (G * datas.stars[ind].mass * datas.stars[ind2].mass) / dis2;

                    datas.stars[ind].v.x -= force / (datas.stars[ind].mass) * xdis / dis;
                    datas.stars[ind].v.y -= force / (datas.stars[ind].mass) * ydis / dis;
                    datas.stars[ind2].v.x += force / (datas.stars[ind2].mass) * xdis / dis;
                    datas.stars[ind2].v.y += force / (datas.stars[ind2].mass) * ydis / dis;


                    //吃掉

                    if (dist < togetherdis) {

                        if (datas.stars[ind].mass > datas.stars[ind2].mass) {
                            eaterind = ind;
                            foodind = ind2;
                        } else {
                            eaterind = ind2;
                            foodind = ind;
                        }

                        if (eaterind == 0) {
                            var sel = Math.random() * 5;
                            if (sel < 2)
                                alarmtext("併吞有" + parseInt(datas.stars[foodind].mass) + "人的社團");
                            else
                                alarmtext("舉辦活動，" + parseInt(datas.stars[foodind].mass) + "人被洗腦了");

                        }
                        if (foodind == 0) {
                            alarmtext("你" + parseInt(datas.stars[eaterind].mass) + "人的社團毀滅了");
                            pivot_stop_time = 90;
                        }

                        //吃掉星星
                        datas.stars[eaterind].v.x =
                            (datas.stars[eaterind].v.x * datas.stars[eaterind].mass +
                                datas.stars[foodind].v.x * datas.stars[foodind].mass) /
                            (datas.stars[foodind].mass + datas.stars[eaterind].mass + 0.0001);

                        datas.stars[eaterind].v.y =
                            (datas.stars[eaterind].v.y * datas.stars[eaterind].mass +
                                datas.stars[foodind].v.y * datas.stars[foodind].mass) /
                            (datas.stars[foodind].mass + datas.stars[eaterind].mass + 0.0001);

                        /*
                        //混色
                        datas.stars[eaterind].color.r=
                          ( datas.stars[eaterind].color.r* datas.stars[eaterind].mass+
                            datas.stars[foodind].color.r*datas.stars[foodind].mass)
                        /(datas.stars[foodind].mass+datas.stars[eaterind].mass);

                        datas.stars[eaterind].color.g=
                          ( datas.stars[eaterind].color.g* datas.stars[eaterind].mass+
                            datas.stars[foodind].color.g*datas.stars[foodind].mass)
                        /(datas.stars[foodind].mass+datas.stars[eaterind].mass);

                        datas.stars[eaterind].color.b=
                          ( datas.stars[eaterind].color.b* datas.stars[eaterind].mass+
                            datas.stars[foodind].color.b*datas.stars[foodind].mass)
                        /(datas.stars[foodind].mass+datas.stars[eaterind].mass);
                        */

                        //拿走重量
                        datas.stars[eaterind].mass += datas.stars[foodind].mass;
                        datas.stars[foodind].mass = 0;

                    }
                }



            }



        $("#mymass").html(parseInt(datas.stars[0].mass) + "人");


    }
}, 1000 / fps);

//加入塵埃
setInterval(function() {
    star_generate();
    star_generate({ type: "food" });
}, 1500 / addstar_freq);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
loc = { x: 0, y: 0, deg: 0 };

$("html").mousemove(function(evt) {
    var mousePos = { x: evt.pageX, y: evt.pageY };
    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    loc.x = mousePos.x;
    loc.y = mousePos.y;

    loc.deg = Math.atan2(loc.y - my, loc.x - mx);

    mouse_move_fac = 1;

});

$("html").click(function(evt) {

    mouse_move_fac = 4;
});

function explode(index) {
    var totalmass = datas.stars[index].mass;
    var ori_totalmass = totalmass;
    if (index == 0)
        pivot_stop_time = 150;
    if (index == 0)
        alarmtext(parseInt(datas.stars[eaterind].mass) + "人的社團炸裂成無數的新可能性!");

    datas.stars[index].mass = 0;

    while (totalmass > 0) {
        var splitmass = Math.random() * (maxmass - minmass) + 5;
        var deg = Math.random() * 2 * Math.PI;
        var splitr = datas.stars[index].r,
            spiltv = 120;
        var ran_para = Math.random();
        var ran_r = splitr * ran_para;

        star_generate({
            x: datas.stars[index].x + ran_r * Math.cos(deg),
            y: datas.stars[index].y + ran_r * Math.sin(deg),
            v: {
                x: -ran_para * spiltv * Math.cos(deg) / splitmass,
                y: -ran_para * spiltv * Math.sin(deg) / splitmass
            },
            mass: splitmass
        });

        totalmass -= splitmass;
    }

}

$("#mymass").click(function() {
    explode(0);
});




var scrollock = {
    now_region: 0,
    last_region: 0,
    disable_sc: false,
    freeze_time: 1200,
    last_touchY: 0,
    touch_detect: false,
    limit: { min: 0, max: 5 },
    scroll_up: function() {
        scrollock.last_region = scrollock.now_region;
        scrollock.now_region--;
        if (scrollock.now_region < scrollock.limit.min)
            scrollock.now_region = scrollock.last_region;
    },
    scroll_down: function() {
        scrollock.last_region = scrollock.now_region;
        scrollock.now_region++;
        if (scrollock.now_region > scrollock.limit.max)
            scrollock.now_region = scrollock.last_region;
    },
    init: function(arg) {
        if (typeof arg !== 'undefined') {
            scrollock.limit = (typeof arg.limit !== 'undefined' ? arg.limit : { min: 0, max: 5 });
            scrollock.now_region = (typeof arg.start !== 'undefined' ? arg.start : 0);
            scrollock.last_region = scrollock.now_region;
        }
        console.log("scrolock.init(): bind scroll");
        //for desktop
        $(window).bind('mousewheel', function(event) {

            if (!scrollock.disable_sc) {
                if (event.originalEvent.wheelDelta >= 0)
                    scrollock.scroll_up();
                else
                    scrollock.scroll_down();
                scrollock.handle(scrollock.last_region + "->" + scrollock.now_region);
                scrollock.disable_sc = true;
                setTimeout(function() { scrollock.disable_sc = false; }, scrollock.freeze_time);
            }
        });

        //for mobile & tablet
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            console.log("scrolock.init(): bind touch");
            //for mobile & tablet
            $(window).bind('touchmove', function(e) {
                if (scrollock.touch_detect == true) {
                    now_touchY = e.originalEvent.touches[0].pageY;
                    console.log(now_touchY + "," + last_touchY);
                    if (now_touchY > last_touchY)
                        scrollock.scroll_down();
                    else
                        scrollock.scroll_up();
                    scrollock.handle(scrollock.last_region + "->" + scrollock.now_region);
                    scrollock.touch_detect = false;
                }
                if (!scrollock.disable_sc) {
                    scrollock.disable_sc = true;
                    scrollock.touch_detect = true;
                    setTimeout(function() { scrollock.disable_sc = false; }, scrollock.freeze_time);
                    last_touchY = e.originalEvent.touches[0].pageY;
                }
            });
        }

    },
    handle: function(cmd) {
        console.log(cmd);
    }

};

scrollock.init({
    limit: {
        min: 1,
        max: 10
    },
    start: 1
});

$(document).keydown(function(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 40) {
        scrollock.scroll_down();
    } else if (code == 38) {
        scrollock.scroll_up();
    }
});

scrollock.handle = function(cmd) {
    console.log(cmd);
    switch (cmd) {
        case "1->2":
            game.start = false;
            $(".words").addClass("hide");
            $(".page2").addClass("cur_page2");
            $(".mousedownicon").addClass("hide");
            break;

        case "2->1":
            game.start = true;
            $(".words").removeClass("hide");
            $(".page2").removeClass("cur_page2");
            $(".mousedownicon").removeClass("hide");
            break;

        case "2->3":
            $(".page2").addClass("cur_page2_3");
            $(".page3").addClass("cur_page3");

            break;

        case "3->2":
            $(".page2").removeClass("cur_page2_3");
            $(".page3").removeClass("cur_page3");

            break;



        case "3->4":
            $(".page2").addClass("cur_page2_4");
            $(".page3").addClass("page3_cur3_4");
            $(".page4").addClass("page_cur3_4");
            //$(".page3").removeClass("cur_page3");

            break;

        case "4->3":
            $(".page2").removeClass("cur_page2_4");
            $(".page3").removeClass("page3_cur3_4");
            $(".page4").removeClass("page_cur3_4");
            //$(".page3").addClass("cur_page3");

            break;

        case "4->5":
            $(".page4").addClass("cur_page4_5");
            $(".page5").addClass("cur_page5");
            break;

        case "5->4":
            $(".page4").removeClass("cur_page4_5");
            $(".page5").removeClass("cur_page5");
            break;

        case "5->6":
            $(".page6").addClass("page6_cur");
            $(".page5").addClass("page_cur5_6");

            break;

        case "6->5":
            $(".page6").removeClass("page6_cur");
            $(".page5").removeClass("page_cur5_6");

            break;
        case "6->7":
            $(".page8").addClass("page8_cur");
            $(".page6").addClass("page_cur6_7");
            break;
        case "7->6":
            $(".page8").removeClass("page8_cur");
            $(".page6").removeClass("page_cur6_7");
            break;
        case "7->8":
            $(".page9").addClass("page9_cur");
            $(".page8").removeClass("page8_cur");

            break;
        case "8->7":
            $(".page9").removeClass("page9_cur");
            break;

        case "8->9":
            $(".page8").addClass("page_cur_9_10");
            $(".page9").addClass("page_cur_9_10");
            $(".page10").addClass("page10_cur");
            break;
        case "9->8":
            $(".page10").removeClass("page10_cur");
            $(".page8").removeClass("page_cur_9_10");
            $(".page9").removeClass("page_cur_9_10");
            break;

    }

}

//bar game
$(".inbox").click(function() {
    $(".bar").addClass("bardown");
    setTimeout(function() {
        $("#game_li1").css("margin-top", "-" + (Math.floor(Math.random() * $("#game_li1>li").length) * 70) + "px");
        $("#game_li2").css("margin-top", "-" + (Math.floor(Math.random() * $("#game_li2>li").length) * 70) + "px");
        $("#game_li3").css("margin-top", "-" + (Math.floor(Math.random() * $("#game_li3>li").length) * 70) + "px");
    }, 1);
    setTimeout(function() {
        $("#game_li1").css("margin-top", "-" + (Math.floor(Math.random() * $("#game_li1>li").length) * 70) + "px");
        $("#game_li2").css("margin-top", "-" + (Math.floor(Math.random() * $("#game_li2>li").length) * 70) + "px");
        $("#game_li3").css("margin-top", "-" + (Math.floor(Math.random() * $("#game_li3>li").length) * 70) + "px");
    }, 200);
    setTimeout(function() {
        $("#game_li1").css("margin-top", "-" + (Math.floor(Math.random() * $("#game_li1>li").length) * 70) + "px");
        $("#game_li2").css("margin-top", "-" + (Math.floor(Math.random() * $("#game_li2>li").length) * 70) + "px");
        $("#game_li3").css("margin-top", "-" + (Math.floor(Math.random() * $("#game_li3>li").length) * 70) + "px");
    }, 400);
    setTimeout(function() {
        $("#game_li1").css("margin-top", "-" + (Math.floor(Math.random() * $("#game_li1>li").length) * 70) + "px");
        $("#game_li2").css("margin-top", "-" + (Math.floor(Math.random() * $("#game_li2>li").length) * 70) + "px");
        $("#game_li3").css("margin-top", "-" + (Math.floor(Math.random() * $("#game_li3>li").length) * 70) + "px");
    }, 600);
    setTimeout(function() {
        var ind1 = Math.floor(Math.random() * $("#game_li1>li").length);
        var ind2 = Math.floor(Math.random() * $("#game_li2>li").length);
        var ind3 = Math.floor(Math.random() * $("#game_li3>li").length);
        $("#game_li1").css("margin-top", "-" + (ind1) * 70 + "px");
        $("#game_li2").css("margin-top", "-" + (ind2) * 70 + "px");
        $("#game_li3").css("margin-top", "-" + (ind3) * 70 + "px");
        console.log(ind1);

        barresult = "有一天" + $($("#game_li1>li")[ind1]).html() +
            "竟然" + $($("#game_li2>li")[ind2]).html() +
            "，然後就" + $($("#game_li3>li")[ind3]).html();
    }, 800);


    setTimeout(function() {
        $(".bar").removeClass("bardown");
    }, 400);
});

var teamdatas = {
    teamdatas: [{
            num: "01",
            name: "病態美學",
            person: "黃豆泥",
            describe: "病理學實驗本來是一門醫學系必修的基礎科學，醫學生們得從各種病變的玻片中辨認出病灶並對其作出形態學的描述。病態美學卻是一個以病理學為根長出來的展覽。 作為一個展覽，病態美學希望能夠讓大眾了解疾病及其背後的故事，讓疾病不再是恐懼的代名詞。我們希望能夠帶起新型態衛教宣導",
            imgurl: "https://i.imgur.com/k4af6qQ.png"
        },
        {
            num: "02",
            name: "大學生玩簡報",
            person: "Wade Jing",
            describe: "「降低簡報學習的門檻。」以及「用人人可做到的簡報設計，發揮影響力。」現階段以資源分享、技巧教學為主，暑假預計將自己的課程放在Youtube上，以及製作PDF講義，供人免費閱覽。（但會搭配一個機制，讓自己還是有一些獲利來源）",
            imgurl: "https://i.imgur.com/UlU831Q.png"
        },
        {
            num: "03",
            name: "N次坊",
            person: "侯智薰",
            describe: "#N次坊 的價值主張很簡單：「打造全台第一個學生為講者的工作坊」「因為我們想要讓這社會多相信一點學生。」 不再因為學業以外的累積，就當作是一個沒辦法換飯吃的興趣；不再因為年齡就小看了這些年輕人；不再因為什麼標籤，而去抹滅了這些潛力。",
            imgurl: "https://i.imgur.com/vG7BnCC.jpg"
        },
        {
            num: "04",
            name: "每天為你讀一首詩",
            person: "黃致中",
            describe: "#每天為你讀一首詩「從零到一的來讀新詩。」 來這裡讀詩，不需要有任何背景，僅僅是「想要了解」就可以來。 如果小編的選詩與賞析讓你看不懂，那是小編的責任。XD 自由來去，如果能順手帶走一些感受與理解，那就好了。",
            imgurl: "https://i.imgur.com/Fc3LUxD.jpg"
        },
        {
            num: "05",
            name: "台大唱片",
            person: "黃致中",
            describe: "台大唱片社，全名音樂產業與唱片製作實務社，指導老師為知名音樂製作人陳建騏老師，旨在試探音樂產業未來的各種可能性，與新一輩音樂人一同開創嶄新而健全的原創音樂環境。甫成立的第二個學期主辦大型音樂策展系列活動「第三屆台大音樂節」，以辦「不一樣」的音樂節為出發點，發想實驗性音樂策展並安排豐富的音樂演出內容，打造台灣史上規模最大的學生音樂節之一。",
            imgurl: "https://i.imgur.com/e7aPdXE.png"
        },
        {
            num: "06",
            name: "SITCON學生計算機年會",
            person: "郭杰穎",
            describe: "SITCON 學生計算機年會（Students' Information Technology Conference）是自 2013 年由一群學生自主性地發起，是一個以在學學生為主體的學生社群。以自發性的學習為基礎，秉持 open source、創新與實作的理念。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p320x320/12360034_882720145160099_4624677330681550316_n.png?oh=65d159b46fad7d85fdf011c613393c38&oe=57D8586D"
        },
        {
            num: "07",
            name: "INPSY #心理學獨創刊物",
            person: "楊翔竣",
            describe: "#INPSY聚集了對心理學有熱情的青年，並發現大眾愛喝心靈雞湯，但當中充斥著偽科學，主流通路上也沒有一本貼近大眾的心理學科普雜誌，再加上心理學跟我們的生活太接近了，有人的地方就有心理學。於是一本推廣心理學的雜誌就誕生了，並以「從INPSY看見OUTSIDE」為初旨，期許由心理學的視角去關心周圍的人地事物，同時也要回到內省本身，與自己對話。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p320x320/12932965_1193844140633754_7980528446745839907_n.jpg?oh=516f7bae931a25c442c48ef9b3dc0e95&oe=57CC2755"
        },
        {
            num: "08",
            name: "思巢-Imaginest",
            person: "在思巢沒有個人，只有團隊",
            describe: "思巢一直想做的是，幫助大學生找到未來的方向，從找到興趣開始，漸漸培養技能，最後連接到職場產生社會價值。讓每個人從自己出發，創造自己的未來。團隊的組成是一群輔大學生，綜合了哲學、企管、金融、資管領域，一起做些小小嘗試。一開始只是想做一個小小讀書會，讓大家可以學自己想學的事情，互相分享，但最後想做的越來越深，就變成思巢現在的樣子。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p320x320/13245306_1727585057489299_9159862959228258565_n.png?oh=1ee8b03b99d76a13c47b21dffbee338f&oe=57DE8FAD"
        },
        {
            num: "09",
            name: "#Hahow #線上課程平台",
            person: "陳睨",
            describe: "Hahow的創立來，自於一個對台灣教育環境的一個發現，就是：「為什麼跨領域學習門檻那麼高？」因此想嘗試解決這樣的問題；Hahow認為，如果每個人都能把自身擁有的知識資源，輕鬆的透過一個好的網路平台，去跟他人作教學分享與互動，並賦予一個對等的價格與交易方式，我們就能為老師和學生，創造一個更直接與方便的教學途徑，讓分享與學習，變得更輕鬆容易！",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/c0.0.320.320/p320x320/12299356_1687112634866914_5360922660103687091_n.jpg?oh=767eaabe374033137f56f4069cc497f0&oe=57E80246"
        },
        {
            num: "10",
            name: "#中區共生青年組合",
            person: "林志宇",
            describe: "中國醫藥大學中醫系五年級的學生林志宇，主張台灣獨立。個性算是活潑浪漫且不切實際，辦活動往往衝動不想後果不計成本只求達到活動的爆炸感，大學五年生涯花光積蓄辦活動ＸＤ。系內從迎新、之夜、系學會、TEDxChinaMedicalU，系外的中部共生音樂節、318學運後爆炸成中部社運小小參與者，我想大學生涯裡有夢的地方就會有我，目前稍稍憤世嫉俗、半退休狀態。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p320x320/12744315_1672443546339548_1719351968442150570_n.png?oh=fad7fa9e84c8b9e30ffada84f693c944&oe=57E76D91"
        },
        {
            num: "11",
            name: "#wheee #新一代展場導航",
            person: "李思萱",
            describe: "看見年復一年的謾罵與不屑，在輪到自己微能夠掌控的這一屆，我們決定試圖用自己的方式讓新一代更好。wheee目前是新一代展場導航服務，讓使用者能夠以不迷路的愉悅姿態找到喜愛的作品，核心目標是希望讓作品跨越時間空間限制，有更多被看見的機會。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/13124683_991387970952175_4517992785369869886_n.png?oh=85f057a403ef44a98e6c55fdc98b8cc5&oe=57DAB56A"
        },
        {
            num: "12",
            name: "#台科仙人祭",
            person: "林逸辰",
            describe: "蟾蜍山聚落，是一個真的走一遍就會被感動的地方。 透過很酷的活動，為從來不曾走到蟾蜍山過的台科學生創造契機。目標是產生與蟾蜍山聚落的環境和社區產生良性鏈結的下一個台科學生社群，也在台科校內創造對蟾蜍山校地議題截然不同的印象。因為我們認為，唯有台科學生真的形成力量，蟾蜍山的願景才有可能長遠的走下去，而獲得實現的可能。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p320x320/13001036_1718551921720381_2365315506801612607_n.jpg?oh=571c8a07f7a636ded17f3070d1c95174&oe=57E1A903"
        },
        {
            num: "13",
            name: "#Medical Fablab NDMC",
            person: "陳加恩",
            describe: "MedicalMaker #Medical3Dprinting #FablabNDMC 國防醫學院公共衛生學系大三陳加恩，大一時和醫學系的室友在寢室組裝全校第一台的3D列印機，從此便開啟了醫療3D列印的奇妙旅行，在學校教授的支持下，在醫學工程研究中心創立了醫學3D列印實驗室Medical Fablab NDMC，致力於將Maker精神以及3D列印技術帶入醫學領域",
            imgurl: "https://i.imgur.com/OroDDii.jpg"
        },
        {
            num: "14",
            name: "#有春-讓剩食變盛食",
            person: "黃喬婉",
            describe: "#有春-讓剩食變盛食，我們來自於一場比賽，夢想很簡單，希望用自身力量來改善台灣食物浪費的現況，執行卻很複雜。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p320x320/13006744_1760049957615391_8235284390318906570_n.png?oh=adbaa0913507d9d438f88efcbfe017ec&oe=57D735E7"
        },
        {
            num: "15",
            name: "#程式老爹-papacode",
            person: "梁家為",
            describe: "我們是一群來自交通大學的大學生，希望能夠將程式教育的概念普及在台灣人的心中。 如果我們也能嘗試做一些什麼，我們更希望我們能有個拋磚引玉的效果，希望更多有能力的社會人士能一起讓台灣更好。我們將利用人人都能輕易上手的桌遊，在玩樂的情況下不知不覺的學會程式邏輯最基本的概念！我們實際測試，連小至小學一年級的小朋友都能輕鬆樂在其中，沒寫過程式的大人們也一定能學會！",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p320x320/13006721_181691832223482_3677861636693500532_n.png?oh=93115c0392d90e688085ac3f95e10aa6&oe=57CDF761"
        },
        {
            num: "16",
            name: "#破土",
            person: "葉俊廷",
            describe: "破土 （New Bloom）是一群由學生、社會運動者、記者所創立的網路媒體，藉由新聞、政治/文化/經濟分析等報導深入的紀錄台灣的社會運動及政治發展，同時我們也希望創建一個跨國際的討論平台，因此幾乎所有的文章都是中英雙語呈現。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/c1.0.320.320/p320x320/10996900_926245024098427_5484977997633206280_n.jpg?oh=3c3651553d444db71088815b8b6ce52a&oe=57D73D36"
        },
        {
            num: "17",
            name: "#TEDxTainan",
            person: "葉俊廷",
            describe: "TEDxTainan所在的城市就是一個給予很多策展方向跟靈感的城市，台南是個在台灣歷史上，受到各個政權文化影響的地方。他有相對完善的文化保存，跟鮮明的飲食文化。（我們很想辦個觀眾能大吃特吃台南美食，辦桌菜的活動）同時，它也包容了多元的領域人才在這裡發展，如台南、文創、設計、新創、到劇場、藝術等等，這也讓我們有很大的空間去選擇18分鐘演講的題材。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p320x320/1374881_527404967335562_897837503_n.jpg?oh=5ff7f90cb5d0db1d37a5bbc669dcc7fc&oe=57E37794"
        },
        {
            num: "18",
            name: "#椅子Chairs樂團",
            person: "裘詠靖",
            describe: "沒有章法，極度活在自己世界的悶騷狂。從國一開始與台中一中吉他社結下不解之緣，從此再也離不開吉他，也找到了一起組團的夥伴。曾經對於任何新的嘗試都相當保守。與高中的朋友組團、並錄製Cheers!Land專輯，是一個既保守、又大膽的決定。製作的過程，發現音樂是唯一能無所顧忌無限延伸的語言，從此便奮不顧身、沒日沒夜、廢寢忘食。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/c0.0.320.320/p320x320/12631355_556792137804467_7928605439126658650_n.jpg?oh=9de7adf30cf6e02b2c0f333eb9efc0cd&oe=57CD55CB"
        },
        {
            num: "19",
            name: "#我是我自己",
            person: "劉育名",
            describe: "淡江大學教育科技系四年級的學生，高中曾考慮留級，因為不知道為什麼要讀書，想給自己多點時間摸索，但在跟家人革命失敗後只好努力考試念個可以學到很多技能，未來卻不知道想不想走的教育科技；花了兩年多的時間就修完學分，可以提早畢業卻自發性的延畢，因為想逃避現實，給自己多點時間為淡江帶來些回饋。待過大小公司實習，破了各式各樣KPI之後才發現那不是我要的人生；參與過無數團隊與比賽，到對岸拿了漂亮的成績、得到獎金就跑回台灣實戰性的創業，開始賺錢的那天發現跟夥伴理念不合，痛哭了三個小時之後決定離開。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p320x320/12278893_10204260849841925_5566766528539976824_n.jpg?oh=c4d4caf1fee6920aecb4c126a17e04b7&oe=57DBB4D7"
        },
        {
            num: "20",
            name: "#串流",
            person: "王郁仁",
            describe: "過去九個月在西班牙生活跟台灣斷開連結，現在要重新回到台大繼續大口吃資源。工管系大四（可是跟黃榮毅其實不認識><），生平最愛把沒有人走過的路硬是走出一條路來，好比把大學當做醫學院在念，不到大七不畢業，東吃一點人類西吃一點社會；好比協辦《串流》，連只是想要murmur學校也可以這麼轟轟烈烈。 當初真的只是想要murmur一下而已。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/c20.20.256.256/542526_223854201074504_721924263_n.jpg?oh=7b71416419c94dab8b785723a025345d&oe=57C73174"
        },
        {
            num: "21",
            name: "#我是我自己",
            person: "陳亮甫",
            describe: "台灣大學醫學系五年級學生，當初不是太搞清楚狀況就念了現在這個系，起因大概也是因為虛榮。進來以後發現好像很難找到一個容身之處，不太愛上課並且有多重被當紀錄。在社運工作裡找到比較溫暖的舒適圈，沾過許多醬油、有一些些抗爭經驗，雞婆愛幫人家出頭，個性有時候嚴肅但大部分時候希望可以搞笑一點。目前幸運的在臨床工作裡找到一些興趣，思索怎麼在好像逃不了的職業宿命和興趣之間找到出路。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p320x320/13000104_1002053049877488_5814957373132760627_n.png?oh=a0043db317248ab22cfe9abdded53efa&oe=57DEC362"
        },
        {
            num: "22",
            name: "#我是我自己",
            person: "黃銘彰",
            describe: "不務正業的台灣大學法律學系四年級學生，目前在 《The Big Issue Taiwan》大誌雜誌任職執行編輯，也為一些雜誌寫文章。大學四年來，因緣際會下做了不少美工，曾在亞洲法律學生會 台灣分會 （ALSA Taiwan）當幹部，也誤打誤撞在台大學生會擔任一年新聞部部長，經營校園媒體《花火》，努力讓原本規模有限的小雜誌轉變為全方位的媒體平台。因為這些經驗，對於國內外雜誌多有涉獵，喜歡觀察媒體不同的呈現方式。至於原先的法律系生涯規畫，目前仍處於徬徨的階段。不確定未來是否會回到這個領域，不過從未懷疑法律系訓練所帶給我的能力養成。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/c113.0.483.483/s320x320/13221545_890816427707919_2561305555776106253_n.jpg?oh=24b4b6e5ae2d7a8cd7c6c68f2fd2bc9b&oe=57DF98CE"
        },
        {
            num: "23",
            name: "#移人工作室",
            person: "賴品潔/李岳軒",
            describe: "成立於2016年，主力成員由前《四方報》編輯團隊組成。承襲「讓弱勢發聲」的核心概念，持續往這個方向努力。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p320x320/12523978_1196979393648201_5904239440257115721_n.jpg?oh=5de5648ad00c9564301d4e6b0c5de75a&oe=57CEF961"
        },
        {
            num: "24",
            name: "#我是我自己 #AIESEC世界大會",
            person: "吳美融",
            describe: "覺得 #生活所有細節都是創作，常常喜愛團體創作大於個人創作。喜歡和夥伴做一些很狂的夢，即便常常因希望解決或碰觸的議題很大而戰戰兢兢，還是為所有人都願意為此付出點什麼悸動。也因為熱愛生活，可以說是 #雜食性動物（不過碰到數理化學會想挑食）。進食時喜歡把所有食物剖開來看，解構個人、事件、社會。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p320x320/10260038_10153898719506522_729433718696985608_n.jpg?oh=c5e91d09ac8c71f850bee9c7dc49e082&oe=57E7307F"
        },
        {
            num: "25",
            name: "#台中文史復興組合",
            person: "蔡承允",
            describe: "#台中人，在惠華醫院出生，懷想高中母校被拆除的紅樓，嚮往社會運動而負笈北上，卻始終發現無處是家鄉。大學唸社會學和人類學，拍過社運紀錄片。回到故鄉的夢想，是想讓每一個台中人認可自己的故鄉，不只有慶記與金錢豹。希望讓台中人找到一個愛台中的理由，如果台中人能自信的說這個城市的故事，身之所向、心之所嚮，台中值得成為這樣的地方。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p320x320/10407098_1564855450420335_2899942875943161486_n.png?oh=2b8a979c81c1ed5b32dba5eef78c1915&oe=57CEEE41"
        },
        {
            num: "26",
            name: "#水賊林友善土地組合",
            person: "康慧賢",
            describe: "小康，從拿筆改為鋤頭，也許只是需要有人，為我們生長的土地，耕耘、撫育，為將來留下，富含朝氣的土壤 或許什麼都不會，但我可以學習 走向半農半X的路途，體會與突破，為後續來到的青年，推開那沉重的大門。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/c158.51.644.644/s320x320/58240_544488082243108_281116207_n.jpg?oh=6fdc1374860158bfa108c30f65fc6bd7&oe=57DA25E3"
        },
        {
            num: "27",
            name: "#秘密讀者",
            person: "朱宥勳",
            describe: "《秘密讀者》是一個以文學書評為主要內容的月刊。從2013年9月起，每個月的20日是我們的出刊日，在那一天發行一期包含至少十篇評論文章的電子書刊物。《秘密讀者》的每一篇文章都是匿名發表的，以此確保每一位評論者在《秘密讀者》裡面都可以暢所欲言，不會受制於人情或輩份的壓力。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/c85.83.502.502/s320x320/1184970_188883491308310_1888382503_n.jpg?oh=6b9dab88592853a4358a35afb8ad4024&oe=579B5938"
        },
        {
            num: "28",
            name: "#墨雨設計",
            person: "吳哲宇",
            describe: "從小玩到大什麼都可以玩過一遍的交大三年級學生，從動畫起家一路玩到大學，空想成立一個'做好玩事情的社團'之後，因為人生不如意事十有十一十二，在學校裡同時當過鋼琴社長與創立了學聯會行銷部把想玩的事情都玩過一遍，做了顆超級大聖誕樹之後宣告煙火綻放的歸零，重新開始成立了墨雨設計，致力於將網站與MotionGraphics的精神做融合，與結合各種技術力到設計嘗試創作的更多可能。",
            imgurl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p320x320/12794636_1521250328177251_6090911223350473590_n.jpg?oh=6cb23c5186848f509c258edae3dd5983&oe=57DB1965"
        }

    ]
};

var vm1 = new Vue({

    el: "#teampage",
    data: teamdatas

});

$(".leftpanel").mousemove(function(evt) {
    var getpos = (evt.pageY - $(".leftpanel").offset().top) / $(".leftpanel").height();
    console.log(getpos);
    $("#teamlist").css("margin-top", -teamdatas.teamdatas.length * 220 * getpos + "px");
    $(".leftpanel .cursor").css("margin-top", (evt.pageY - $(".leftpanel").offset().top - 10) + "px");

});

var personimgdata = {
    urls: ["https://i.imgur.com/bK8bnzO.png",
        "https://i.imgur.com/HbdgdOy.png",
        "https://i.imgur.com/YfVc1oE.png",
        "https://i.imgur.com/PNzKTSe.png",
        "https://i.imgur.com/89OmlsM.png",
        "https://i.imgur.com/fuKakuX.png",
        "https://i.imgur.com/s2cCpDh.png",
        "https://i.imgur.com/x0GM2Re.png",
        "https://i.imgur.com/HvbkhUS.png",
        "https://i.imgur.com/VUA5uvY.png",
        "https://i.imgur.com/flrnMve.png",
        "https://i.imgur.com/OyL1nAk.png",
        "https://i.imgur.com/tfBMaXz.png",
        "https://i.imgur.com/rVNa2fu.png",
        "https://i.imgur.com/kurHliA.png",
        "https://i.imgur.com/bxZYqSV.png",
        "https://i.imgur.com/28ltqNU.png",
        "https://i.imgur.com/fHR2MH2.png",
        "https://i.imgur.com/KOktzrd.png",
        "https://i.imgur.com/bLz9iFS.png",
        "https://i.imgur.com/UBbWYZ6.png",
        "https://i.imgur.com/IXTwQgT.png",
        "https://i.imgur.com/kfyqZtn.png",
        "https://i.imgur.com/sruGfHu.png",
        "https://i.imgur.com/fi0ntQS.png",
        "https://i.imgur.com/Tdcjlh5.png",
        "https://i.imgur.com/JBaGKxb.png",
        "https://i.imgur.com/F2zOvug.png",
        "https://i.imgur.com/z7NnOHV.png",
        "https://i.imgur.com/u1okjfR.png",
        "https://i.imgur.com/teEP2Zl.png",
        "https://i.imgur.com/qxUxyWn.png"
    ]
};

$(".btnshare").click(function() {
    var share_url = 'https://www.facebook.com/dialog/feed?' +
        'app_id=1577826275849523' +
        '&display=popup' +
        '&caption=' + "複雜生活節產生器" +
        '&picture=' + "http://complexfestival.info/barshare.png" +
        '&description=' + "我的複雜生活是:" + barresult +
        '&link=' + "http://complexfestival.info/";
    //'&redirect_uri=http://www.isayaroma.com/';

    window.open(share_url);

});
/*
var vm2 = new Vue({
  el: "#personpics",
  data: personimgdata
});
*/

/*
$("#enterbtn").click(function(){
  $(".page_index").css("opacity",0);
  $("#page_about").css("opacity",1);
  
})
var vm1 = new Vue({
  el: "#page_about",
  data: page_about
});
*/