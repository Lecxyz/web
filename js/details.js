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

//下拉列表
$('.top_ul>li').mouseenter(function(){
    // console.log($(this).index())
    $(this).children('ul').show().slideDown()
})
$('.top_ul>li').mouseleave(function(){
    // console.log($(this).index())
    $(this).children('ul').hide().slideUp()
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

//返回顶部
$('.return').click(function(){
    $(window).scrollTop(0)
})