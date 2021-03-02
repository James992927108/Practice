$(document).ready(function() {

    var num_li = $(".nav li").length;
    
    var n = 1;
    var moving = 0;
    $(window).mousewheel(function(e) {
        $("html, body").stop();
        if (moving == 0) {
            moving = 1;
            if (e.deltaY == -1) {
                if (n < num_li) {
                    n++;
                }
            } else {
                if (n > 1) {
                    n--;
                }
            }
        }
        console.log(n);
        $("html, body").animate({
            "scrollTop": $(".p0" + n).offset().top
        }, function(){
            moving = 0;
        })
    })

    //  點選右方導覽列時會到指定圖片
    for (var i = 0; i <= num_li; i++) {
        $(".nav li:eq(" + i + ")").click({
            id: i
        }, function(e) {
            $(".nav li").css("background-color", "#FFF");
            var page = e.data.id + 1;
            $("html,body").animate({
                "scrollTop": $(".p0" + page).offset().top
            })
            $(this).css("background-color", "#43a55f");
            n = e.data.id +1
        })
    }

    //  一進入網頁時，將導覽列垂直置中
    center();

    //  縮放網頁時，重新將導覽列置中
    $(window).resize(function() {
        center();
    })

    //  計算導覽列垂直置中的高度
    function center() {
        var pos = $(window).height() / 2 - $(".nav").height() / 2;
        $(".nav").css("top", pos);
    }
    $(window).scroll(function() {
        if ($(window).scrollTop() >= $(".p01").offset().top && $(window).scrollTop() < $(".p02").offset().top) {
            $(".nav li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".nav li:eq(0)").css("background-color", "#46dd46")
        } else if ($(window).scrollTop() >= $(".p02").offset().top && $(window).scrollTop() < $(".p03").offset().top) {
            $(".nav li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".nav li:eq(1)").css("background-color", "#46dd46")
        } else if ($(window).scrollTop() >= $(".p03").offset().top && $(window).scrollTop() < $(".p04").offset().top) {
            $(".nav li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".nav li:eq(2)").css("background-color", "#46dd46")
        } else if ($(window).scrollTop() >= $(".p04").offset().top && $(window).scrollTop() < $(".p05").offset().top) {
            $(".nav li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".nav li:eq(3)").css("background-color", "#46dd46")
        } else if ($(window).scrollTop() >= $(".p05").offset().top) {
            $(".nav li").css("background-color", "white") //除了被點擊到的游標，其他都恢復成原來的顏色
            $(".nav li:eq(4)").css("background-color", "#46dd46")
        }
    })
})