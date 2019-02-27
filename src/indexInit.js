/**
 * 首页初始化文件
 */
$(function(){
    $('body').css({
        'background-image': 'url("../image/backgroud/Sakura.png")'
        , 'color': 'white' 
    })
    // 下拉框初始化
    var str = '';
    LANGUAGE_CODE.forEach(element => {
        str += '<option value="'+element.code+'">'+element.name+'</option>';
    });
    $('#selectSource').html(str);
    $('#selectTrans').html(str);
});