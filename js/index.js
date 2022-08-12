//搜索框下拉列表
$('.searchMenu').mouseenter(function(){
    $(this).children('ul').show()
})
$('.searchMenu').mouseleave(function(){
    $(this).children('ul').hide()
})
$('.boxType li').click(function(){
    $('.searchMenu s').html($(this).html())
})

//登录
var t;
$('.top_login').mouseenter(function(){
    clearTimeout(t);
    $('.top_loginMsg').show()
})
$('.top_login').mouseleave(function(){
    clearTimeout(t);
    t=setTimeout(function(){$('.top_loginMsg').hide()}, 1000);
})

//判断勾选框是否被选中，未选中则阻止a标签默认行为  
$('.top_login a').click(function(e){
    if(!$('.top_loginMsg input').prop('checked')){
        //prevenDefault阻止默认行为
        e.preventDefault()
    }
})

//导航栏下拉列表
$('.nav_se').mouseenter(function(){
    //删除.nav_setype的样式
    $('.nav_setype').removeClass('.nav_setype')
    //新增类，用于显示
    $('.nav_setype').addClass('xianshi')
})
$('.nav_se').mouseleave(function(){
    //删除xianshi类的样式
    $('.nav_setype').removeClass('xianshi')
})

//轮播图
var timer;
var num=0;
//封装js
function gogo(){
    $('.tag_right ul li').css('transform',`translateX(${-num*440}px)`)
    $('ol li').eq(num).addClass('current')
    $('ol li').eq(num).siblings().removeClass('current')
}
function go(){
    timer=setInterval(function(){
        num++;
        if(num==5)num=0
        gogo()
    },3000)
}
go()

//移入
$('.tag_right').hover(function(){
    clearInterval(timer)
    // 移出
},function(){
    go()
})
//小圆点点击事件
$('ol li').click(function(){
    num=$(this).index()
    gogo()

})

$('.list_btn').click(function(){
    $('.list_left ul').removeClass('list_setop')
    $('.list_left ul').addClass('show_setop')
    $('.list_btn').addClass('list_leftbtn')
    $('.list_btn').removeClass('list_btn')
})
$('.right_top').mouseleave(function(){
    $('.list_left ul').addClass('list_setop')
    $('.list_left ul').removeClass('show_setop')
    $('.list_leftbtn').addClass('list_btn')
    $('.list_leftbtn').removeClass('list_leftbtn')
})

//时间
var time=new Date();
var m = time.getMonth();
var d = time.getDate();
var r = document.getElementById('rightDate')
r.innerHTML=((m+1)+'月'+d+'日')

//鼠标移入播放视频
$('video').hover(function(){
    this.play()
},function(){
    this.pause()
})

var news = 0;
//新闻焦点图
function newsgo(){
    $('.news_ul>li').css('transform',`translateX(${-news*920}px)`)
    $('.replace li').eq(news).addClass('licolor')
    $('.replace li').eq(news).siblings().removeClass('licolor')
}
// 小圆点点击事件
$('.replace li').click(function(){
    news=$(this).index()-1
    // console.log(num)
    newsgo()
})
$('.replace').click(function(){
    news++;
    if(news>=3)news=0;
    console.log(news)
    newsgo();
})

//鼠标移入变换div
$('.summary_threeT>a').mouseenter(function(){
    // console.log($(this).index())
    if($(this).index()==0){
        $('.summary_threeone').show()
        $('.summary_threetow').hide()
        $(this).addClass('summary_threeTa')
        $(this).siblings().removeClass('summary_threeTa')
    }else{
        $('.summary_threeone').hide()
        $('.summary_threetow').show()
        $(this).addClass('summary_threeTa')
        $(this).siblings().removeClass('summary_threeTa')
    }
})

//显示、隐藏按钮
$(window).scroll(function(){
    if($(window).scrollTop()>420){
        $('.buttom').show()
    }else{
        $('.buttom').hide()
    }
})
//返回顶部
$('.return').click(function(){
    $(window).scrollTop(0)
})