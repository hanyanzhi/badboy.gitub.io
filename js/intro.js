  $(function(){
    // 预加载的动画
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.src = 'img/l.png';
    var start = 0;
    img.onload = function(){
        loadImg();
    };

    function loadImg(){
        ctx.clearRect(0,0,275,275);
        ctx.drawImage(img,start*277,0,275,275,0,0,275,275);
    }
    var frameNum = 0;
    function loadLoop(){
        id = window.requestAnimationFrame(loadLoop);
        frameNum++;
        loadImg();
        if (frameNum%20 == 0) {
            start++;
        }
        if (start >= 28) {
            window.cancelAnimationFrame(id);
            ctx.clearRect(0,0,275,275);
            setTimeout(function(){
                start++;
                loadImg();
            },1000)
            setTimeout(function(){
                $('.loading').hide();
                $('.video').show();
                $('video')[0].play();
            },2000)
        }
        var progress = parseInt(start/28*100);
        $('.ltext').html(progress+'%');


    }
    //调试注释
    window.requestAnimationFrame(loadLoop);

    // 视频播放结束
    $('video')[0].onended = function() {
        $('.loading-wrap').hide();
        $('.wrap').show();
        $('.btn-back').hide();
    };
    // 视频点击按钮退出，关闭
    $('.video-close').click(function(){
        $('video')[0].pause();
        $('.loading-wrap').hide();
        $('.wrap').show();
    });


    // 浮动的二维码的关闭
    $('.fl-qrcode .close').click(function(){
        $('.fl-qrcode').hide();
    })
    // main的nav的点击事件
    $('.main nav a').click(function(){
        // console.log(this);
        var showPage = $(this).attr('data-page');
        $('.main').hide();
        $('header').animate({top: "0"}, 500);
        $('.page-btn').show();
        $('.'+showPage).show();
        $('.btn-back').show();
    })
    // header的tab切换
    $('header a').click(function(){
        var showPage = $(this).attr('data-page');
        $('header a').removeClass('on');
        $(this).addClass('on');
        $('.page').hide();
        $('.'+showPage).show();
        $('.btn-back').show();
        if (showPage == 'main') {
            $('header').animate({top: '-220px'},500);
            $('.page-btn').hide();
            $('.btn-back').hide();
        }
    })
    // 预约激活码的点击
    $('.btn-order2').click(function(){
        $('.meet').hide();
        $('.order').fadeIn();
        $('.btn-back').show();
    })
    //返回按钮的点击
    $('.btn-back').click(function(){
        $('.page').hide();
        $('.main').show();
        $(this).hide();
        $('header').animate({top: '-220px'},500);
    })





    // page按钮
    //feel里面的按钮
    var num = 0;
    $('.feel .prev').click(function(){
        num--;
        if (num < -4) {
            num = -4;
            showPage(3);
        }
        console.log(num);
    })
    $('.feel .next').click(function(){
        num++;
        console.log(num);
        if (num > 0) {
            num = 0
            showPage(1);
        }
    })
    $('.excellence .prev').click(function(){
        showPage(0);
    })
    $('.excellence .next').click(function(){
        showPage(2);
    })
    $('.honor .prev').click(function(){
        showPage(1);
    })
    $('.honor .next').click(function(){
        showPage(3);
    })
    $('.meet .prev').click(function(){
        showPage(2);
    })
    $('.meet .next').click(function(){
        showPage(0);
    })
    function showPage(n){
        $('.tabContent').hide();
        $('.tabContent').eq(n).fadeIn(800);
        $('header .nav').removeClass('on');
        $('header .nav').eq(n).addClass('on');
    }
    // 天生卓越的img动图和不动图切换
    function gameG(n){
        $('.gj').show();
        $('.gg').hide();
        $('.gj').eq(n).hide();
        $('.gg').eq(n).show();
    }
    gameG(0);
    var gameN = 0;
    var gameTimer = null;
    if (gameTimer) {
        clearInterval(gameTimer);
    }
    gameTimer = setInterval(function(){
        gameN++;
        if (gameN >= 4) {
            gameN = 0;
        }
        gameG(gameN)
    },1500)
    // 点击图片，视频弹窗显示
    $('.game').click(function(){
        var gameNum = $(this).index();
        // console.log(gameNum);
        $('.video-layer').show();
        $('.video-container').html('<span class="layer-close"></span>');
        switch (gameNum){
            case 0:{
                $('.video-container').append('<video class="game-video" width="800" height="450" autoplay controls preload="auto"><source src="http://s2.pkey.cn/badguy/20160119/01/Crysis3.webmhd.webm" type="video/webm"></video><div class="play-btn" style="display:none"></div>');
                break;
            }
            case 1:{
                $('.video-container').append('<video class="game-video" width="800" height="450" autoplay controls preload="auto"><source src="http://s2.pkey.cn/badguy/20160119/01/StarCitizen.webmhd.webm" type="video/webm"></video><div class="play-btn" style="display:none"></div>');
                break;
            }
            case 2:{
                $('.video-container').append('<video class="game-video" width="800" height="450" autoplay controls preload="auto"><source src="http://s2.pkey.cn/badguy/20160119/01/Ryse.webmhd.webm" type="video/webm"></video><div class="play-btn" style="display:none"></div>');
                break;
            }
            case 3:{
                $('.video-container').append('<video class="game-video" width="800" height="450" autoplay controls preload="auto"><source src="http://s2.pkey.cn/badguy/20160119/01/Homefront.The%20Revolution.webmhd.webm" type="video/webm"></video><div class="play-btn" style="display:none"></div>');
                break;
            }
            default:
        }
        //视频播放结束后
        $('.game-video')[0].onended = function(){
           $('.play-btn').show();
        };
        $('.play-btn').click(function(){
            $(this).hide();
            $('.game-video')[0].play();
        })

    })


    // 视频右上角的关闭按钮
    $('.video-layer').delegate('.layer-close','click',function(){
        $('.video-layer').hide();
        $('.video-container video')[0].pause();
    })
    // 视频结束后重新播放按钮
    $('.video-layer').delegate('.play-btn','click',function(){
        console.log(111);
        $(this).hide();
        $('.game-video')[0].play();
    });

    //见证荣耀
    // 大图切换
    function honorImg(n){
        $('.honor .trans li').hide().eq(n).fadeIn();
        $('.honor .honor-btns span').removeClass('honor-active').eq(n).addClass('honor-active');
    }
    honorImg(0);
    var honorNum = 0;
    var honorLength = $('.honor .trans li').length;
    // 添加honor-btns的数量
    for (var i = 0; i < honorLength; i++) {
        $('.honor-btns').append('<span></span>');
    }
    $('.honor-prev').click(function(){
        honorNum--;
        if (honorNum < 0) {
            honorNum = honorLength - 1;
        }
        honorImg(honorNum);
        console.log(honorNum);
    })
    $('.honor-next').click(function(){
        honorNum++;
        if (honorNum > honorLength - 1) {
            honorNum = 0;
        }
        honorImg(honorNum);
        console.log(honorNum);
    })
    $('.honor-btns span').click(function(){
        honorNum = $(this).index();
        honorImg(honorNum);
    })
    $('.honor-close').click(function(){
        $('.honor .trans').fadeOut();
    })
    // honor页面的按钮
    $('.honor').delegate('.honor-num a','click',function(){
        honorNum = $(this).index();
        $('.honor .trans').fadeIn();
        honorImg(honorNum);
    })

    $('.meets li').show().eq(0).addClass('on');
    $('.time-ctrl .time').click(function(){
        var i = $(this).index('.time');
        if (!$(this).hasClass('on')) {
            $('.time-ctrl').removeClass('close');
            $('.time-ctrl .time').removeClass('on').eq(i).addClass('on');
            $('.time-ctrl .time .text').hide().eq(i).show();
            $('.meets li').show();
            $('.meets li').removeClass('on').eq(i).addClass('on');
            if (i == 5) {
                $('.time-ctrl a').eq(i).addClass('time6');
                $('.time-ctrl').addClass('close');
            }
        }else if (i == 5) {
            $('.time-ctrl  a:first-child').trigger('click');
        }
    })

    // 预约激活码
    $('.order .device a').click(function(){
        var i = $(this).index('.device a');
        $('.device input').val($(this).text());
        $('.device a span').removeClass('on').eq(i).addClass('on')
    })
    // 抢先预订按钮
    $('.pre-btn').click(function(){
        var phone = $('.phone input').val();
        var device = $('.device input').val();
        console.log(phone,device);
        if (!/^((13|18)(\d{9}))$|^(14[57]\d{8})$|^(17[07]\d{8})$|(^15[0-35-9]\d{8}$)/.test(phone)) {
            alert('手机格式不正确');
            return
        }else {
            alert('预定成功');
        }
    })














    // 调试
    // $('.loading-wrap').hide();
    // $('.wrap').show();
    // // $('.meet').show();
    // // $('.main').hide();
    // $('.fl-qrcode').hide();
    // $('header').show();









});
