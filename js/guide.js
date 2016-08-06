$(function(){
    $('.nav').mouseenter(function(){
        if (!$(this).hasClass('on')) {
            var i = $(this).index();
            $('.nav').removeClass('on').eq(i).addClass('on');
            $('.mainbox').hide().eq(i).fadeIn();
        }
    })
    $('.tab-title a').mouseenter(function(){
        if (!$(this).hasClass('on')) {
            var $p = $(this).parent();
            var i = $p.find('a').index($(this));
            $p.find('a').removeClass('on').eq(i).addClass('on');
            $p.parent().find('.box').hide().eq(i).fadeIn();
        }
    })

    $('.hall-ctrl a').mouseenter(function(){
        if (!$(this).hasClass('on')) {
            var i = $(this).index();
            $('.hall-ctrl a').removeClass('on').eq(i).addClass('on');;
            $('.hall li').hide().eq(i).fadeIn();
        }
    });
    // 职业介绍背景切换
    $(".heroCtrl li.disable em").html("?");
    $('.hero li').mouseenter(function(){
        if(!$(this).hasClass("on")&&!$(this).hasClass("disable")){
    	    var $p = $(this).parent();
            var n = $(this).data('i'), i = $p.find('li').index($(this));
            // console.log(n,i);
            $p.find('li').removeClass('on').eq(i).addClass('on');
            $(this).parents('.box').find('.herobg').hide().prop('class','herobg herobg'+n).fadeIn(500);
	    }
    })
    $('.wrap').scroll(function(){
        if ($('.wrap').scrollTop() > 260) {
            $('nav').addClass('fixTop');
        }else {
            $('nav').removeClass('fixTop');
        }
    })
// $('.mainbox').hide().eq(3).fadeIn();
// $('.skills').show();
















})
