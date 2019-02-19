/**
 * 首页调用到的相关方法
 */

function sureClick(){

}
/**
 * 访问API并获取返回结果
 */
function visitAPI(requireText) {
    console.log('获取到的请求文本为:'+requireText);
    $.ajax({
        url: API_URL
        , data: requireText
        , type: 'GET'
        , dataType: 'jsonp'
        , success: function (result) {
            alert(result)
            console.log('返回结果'+result);
        }
    });
}