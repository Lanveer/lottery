/**
 * Created by Administrator on 2017/12/21.
 */



$(function () {
    var tempA=[];
    $('.chooseBallBox>div').click(function () {
        var objA={};
        var name=$(this).attr('name');
        if(name=='chooseBall0' || name=='chooseBall1' || name=='chooseBall6' || name=='chooseBall7'|| name=='chooseBall11'|| name=='chooseBall12'|| name=='chooseBall17'|| name=='chooseBall18'|| name=='chooseBall22'|| name=='chooseBall23' || name=='chooseBall28'|| name=='chooseBall29'|| name=='chooseBall33'|| name=='chooseBall34'|| name=='chooseBall39'|| name=='chooseBall44'|| name=='chooseBall45'){
            $(this).toggleClass('situation1');
            var name=$(this).attr('name');
            var val=$(this).attr('value');
            tempA.push(objA);
            console.log(tempA)
            // for(var i=0 ; i<tempA.length;i++){
            //     var str2='';
            //     str2+='<div class="'+tempA[i].name+'">'+tempA[i].val+'</div>'
            // }
            // $('.chooseBallResult-mid').append(str2);
        }else if(name=='chooseBall2' || name=='chooseBall3' || name=='chooseBall8' || name=='chooseBall9'|| name=='chooseBall13'|| name=='chooseBall14'|| name=='chooseBall19'|| name=='chooseBall24'|| name=='chooseBall25'|| name=='chooseBall30' || name=='chooseBall35'|| name=='chooseBall36'|| name=='chooseBall40'|| name=='chooseBall41'|| name=='chooseBall46'|| name=='chooseBall47'){
            $(this).toggleClass('situation2')

        }else if(name=='chooseBall4' || name=='chooseBall5' || name=='chooseBall10' || name=='chooseBall15'|| name=='chooseBall16'|| name=='chooseBall20'|| name=='chooseBall21'|| name=='chooseBall26'|| name=='chooseBall27'|| name=='chooseBall31' || name=='chooseBall32'|| name=='chooseBall37'|| name=='chooseBall38'|| name=='chooseBall42'|| name=='chooseBall43'|| name=='chooseBall48'){
            $(this).toggleClass('situation3')
        }
    })

//    选号后放入box

    // var tempA=[];
    $('.chooseBallBoxA>div').click(function () {
        // var objA={};
        // var name=$(this).attr('name');
        // var val=$(this).attr('value');
        // objA.val=val;
        // objA.name=name;
        // tempA.push(objA)
        // var str='';

        //去除重复的
        // var arr1 = tempA
        // var result = [],
        //     hash = {};
        //     hash_ = {}
        // for (var i = 0; i<arr1.length; i++) {
        //     var elem = arr1[i].val;
        //     var elem_ = arr1[i].val;
        //     if (!hash[elem]) {
        //         if (!hash_[elem_]) {
        //             result.push(arr1[i]);
        //             hash_[elem_] = true;
        //         };
        //         hash[elem] = true;
        //     }
        // }
        // console.log('result is:',result)
        //
        // for(var i=0 ; i<tempA.length;i++){
        //     var str2='';
        //     str2+='<div class="'+tempA[i].name+'">'+tempA[i].val+'</div>'
        // }
        // $('.chooseBallResult-mid').append(str2);
        var total=$('.chooseBallResult-mid>div').length;
        $('.total').html('共'+total+'注')

    });




//    点击删除图标
    $('.chooseBallResult-left').click(function () {
        $('.chooseBall').removeClass('situation1');
        $('.chooseBall').removeClass('situation2');
        $('.chooseBall').removeClass('situation3');
        $('.chooseBallResult-mid').empty();
        $('.total').html('共0注')
    });
});