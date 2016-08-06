$(function(){
    // 大图切换
    var hdTimer = null;
    if (hdTimer) {
        clearInterval(hdTimer);
    }
    $('header section').hide();
    $('.hd1').show();
    var hd = 1;
    hdTimer = setInterval(function(){
        $('.hd' + hd +' .text').removeClass('text'+hd);
        $('header section').fadeOut();
        hd++;
        if (hd >= 4) {
            hd = 1;
        }
        $('.hd'+hd).fadeIn();
    },5000)
    //首页banner滚动
    var mySwiper = new Swiper ('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay : 3000

    })
    // 下载的tab切换
    $(".down-tab a").hover(function(){
        var i  = $(this).index();
        $('.download a').eq(i).toggleClass('active'+(i+1));
        $('.down-tabmain .box').hide().eq(i).fadeIn(100);
    })

    // 合作媒体下拉列表
    $('.media-down').click(function(){
        $('.list').toggle();
    });
    // 全屏滚动事件
    var canMouse = true;
    $(document).mousewheel(function(event, delta, deltaX, deltaY) {
        var h = $(window).height();
        event = event || window.event;
        if (canMouse) {
            if ($('body').scrollTop()< h) {
                event.preventDefault();
            }
            if (delta < 0&&$(document).scrollTop()<h) {
                canMouse = false;
                event.preventDefault();
                $('html,body').stop(false).animate({scrollTop: h},1000,'linear',function(){canMouse = true});
            }else if (delta>0&&$(document).scrollTop()>0&&$(document).scrollTop()<h) {
                canMouse = false;
                event.preventDefault();
                $('html,body').stop(false).animate({scrollTop: 0},1000,'linear',function(){canMouse = true});
            }
        }else {
            event.preventDefault();
        }
    });










})
