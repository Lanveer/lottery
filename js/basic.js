/**
 * Created by Administrator on 2017/12/15.
 */


$(function () {
    $('.nav-detail-box').eq(0).show();
    $('.nav>a').click(function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        var idx= $(this).index();
        $('.nav-detail-box').hide().eq(idx).show()
    });


//    顶部菜单的点击
    $('.header>h1').click(function () {
        $('.topMenu').slideToggle();
        $('#index-mask').fadeToggle();

    });


//    半波的选择
    $('.wave-nav>a').eq(0).css({
        'background':'#fb524e',
        'color':'#fff'
    });
    $('.wave-content>div').eq(0).show();

    $('.wave-nav>a').click(function (e) {
        e.preventDefault();
       var idx= $(this).index();
        console.log(idx);
        switch (idx){
            case 0:
                $(this).css({
                    'background':'#fb524e',
                    'color':'#fff'
                }).siblings().css({
                    'background':'#fff'
                });
                break;
            case 1:
                $(this).css({
                    'background':'#39daa8',
                    'color':'#fff'
                });
                break;
            case 2:
                $(this).css({
                    'background':'#34cafd',
                    'color':'#fff'
                });
                break;
        }
       $('.wave-content>div').eq(idx).show().siblings().hide()

    });





//    充值记录界面

    $('.p-nav>a').eq(0).css({
        color:'#fb524e',
        'borderBottom':'1px solid #fb524e'
    });
    $('.p-nav a').click(function (e) {
        e.preventDefault();
        $(this).css({
            color:'#fb524e',
           'borderBottom':'1px solid #fb524e'
        }).siblings().css({
            color:'#333',
            borderBottom:'none'
        })
    });


    //     购彩记录点击

    $('.r-header>a').eq(0).css({
        color:'#fb524e',
        'borderBottom':'1px solid #fb524e'
    });
    $('.r-header a').click(function (e) {
        e.preventDefault();
        $(this).css({
            color:'#fb524e',
            'borderBottom':'1px solid #fb524e'
        }).siblings().css({
            color:'#333',
            borderBottom:'none'
        })
    });




//    我的消息弹窗
    var h= $('.msg-box').height();
    $('.msg-box').css({
        'marginTop':-(h/2)+'px'
    })

    //点击确认按钮
    $('.msg-confirm').click(function (e) {
        e.preventDefault();
        $('#mask,.msg-box').hide();
    })

    //点击消息列表查看更多
    $('.p-recordList').click(function (e) {
        e.preventDefault();
        $('#mask,.msg-box').show();
    })

//    点击管理按钮
    $('.p-edit').click(function () {
        $('.msg-edit').show();
        $('.p-edit').hide();
        $('.delete').show();
        $('.p-chooseAll,.p-cancel').show();
    })

//    点击选择
    $('.msg-edit').click(function () {
        $(this).css({
          backgroundPosition:'42% 33%'
        })
    })

//    点击取消
    $('.p-cancel').click(function () {
        $('.msg-edit').hide();
        $('.p-edit').show();
        $('.delete').hide();
        $('.p-chooseAll,.p-cancel').hide()
    })

//    点击全选
    $('.p-chooseAll').click(function () {
        $('.msg-edit').css({
            backgroundPosition:'42% 33%'
        })
    })



//    充值点击
    $('.p-c-box>div').click(function () {
        $(this).css({
            background:'#ffd258',
            color:'#fff',
            border:'1px solid #ffd258'
        }).siblings().css({
            background:'none',
            color:'#333',
            border:'1px solid #333'
        })
    })


//    充值方式
    $('.p-c-tools>span').eq(0).css({
        color:'#fb524e',
        'borderBottom':'1px solid #fb524e'
    })

    $('.p-c-tools>span').click(function () {
        $(this).css({
            color:'#fb524e',
            'borderBottom':'1px solid #fb524e'
        }).siblings().css({
            color:'#666',
            'borderBottom':'none'
        })
    });


//    点击充值银行

    $('.p-c-tools-content>a').click(function (e) {
        e.preventDefault();
        $(this).addClass('bankOn').siblings().removeClass('bankOn');
        $(this).find('span').addClass('checked').parent().siblings().find('span').removeClass('checked')
    });





});
