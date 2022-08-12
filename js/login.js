//切换登录方式
$('.passlogin').click(function(){
    // console.log(111)
    $('.qlogin').hide()
    $('.plogin').show()
    $('.qlogin_show').hide()
    $('.plogin_show').show()
    $('.passlogin').hide()
    $('#Retrieve').show()
})

//切换扫码登录
$('.plogin a').click(function(){
    $('.qlogin').show()
    $('.plogin').hide()
    $('.qlogin_show').show()
    $('.plogin_show').hide()
    $('.passlogin').show()
    $('#Retrieve').hide()
})