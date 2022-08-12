//头部滚动
$(window).scroll(function(){
     if($(window).scrollTop()>245){
        $('.color').addClass('colfixed')
        $('.header').addClass('headfixed')
     }else{
        $('.color').removeClass('colfixed')
        $('.header').removeClass('headfixed')
     }
})

//登录
var t;
$('.head-right').mouseenter(function(){
    clearTimeout(t);
    $('.loginMsg').show()
})
$('.head-right').mouseleave(function(){
    clearTimeout(t);
    t=setInterval(function(){$('.loginMsg').hide()},1000)
})
//判断勾选框是否被选中，未选中则阻止默认行为
$('.head-right a').click(function(e){
    if(!$('.loginMsg input').prop('checked')){
        //prevenDefault阻止默认行为
        e.preventDefault()
    }
})

//获取日期
var time=new Date();
var y = time.getFullYear()
var m = time.getMonth();
var d = time.getDate();
var r = document.getElementById('span-right')
r.innerHTML=(y+'年'+(m+1)+'月'+d+'日')

//显示、隐藏按钮
$(window).scroll(function(){
    if($(window).scrollTop()>600){
        $('.return').show()
    }else{
        $('.return').hide()
    }
})

//返回顶部
$('.return').click(function(){
    $(window).scrollTop(0)
})

//轮播图
function gogo(){
    $('.right-tow ul li').css('transform',`translateX(${-num*300}px)`)
    $('ol li').eq(num).addClass('current')
    $('ol li').eq(num).siblings().removeClass('current')
}

var timer;
var num=0;
function go(){
    timer=setInterval(function(){
        num++;
        if(num==4)num=0
        gogo()
    },2000)
}
go()
//移入停止
$('.right-tow').hover(function(){
    clearInterval(timer)
},function(){
    go()
})
//小圆点点击事件
$('ol li').click(function(){
    num=$(this).index()
    gogo()
})

//查看更多
$('.five-bottom button').click(function(){
    $('.five_maintwo').show()
})