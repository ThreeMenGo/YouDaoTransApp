var sha256 = require('js-sha256');

/**
 * 首页调用到的相关方法
 */

function sureClick(){
    var inputObj = {};
    // 以下三个参数需要从页面获取, 没有的话使用默认值
    // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
    inputObj.sourceType = $('#selectSource option:selected').val();
    inputObj.transType = $('#selectTrans option:selected').val();
    inputObj.sourceText = $('#textareaSourceText').val();

    var requireObj = generateRequireText(inputObj);
    visitAPI(requireObj);
}

function getInput(input){
	if (input.length == 0) {
		return null;
	}
	var result;
	var len = input.length;
	if(len <= 20){
		result = input;
	}else{
		var startStr = input.substring(0,10);
		var endStr = input.substring(len-10,len);
		result = startStr + len +endStr;
	}
	return result;

}

/**
 * 获取页面参数, 生成请求报文
 * @param{JSON} inputObj
 */
function generateRequireText(inputObj){
    var query = inputObj.sourceText;
    var from = inputObj.sourceType;
    var to = inputObj.transType;
    var salt = new Date().getTime();
    var curtime=Math.round(new Date().getTime()/1000);
    var requireText = APP_KEY 
                    + getInput(query) 
                    + salt
                    + curtime 
                    + APP_SECRET;
    console.log(requireText);
    var sign = sha256(requireText);
    
    REQUEST_JSON.q = query;
    REQUEST_JSON.from = from;
    REQUEST_JSON.to = to;
    REQUEST_JSON.sign = sign;
    REQUEST_JSON.salt = salt;
    REQUEST_JSON.sign = sign;
    REQUEST_JSON.curtime = curtime;
    REQUEST_JSON.appKey = APP_KEY;
    return REQUEST_JSON;
}

/**
 * 调用接口API获取返回值报文
 * @param {String} requireObj 
 */
function visitAPI(requireObj) {
    console.log(JSON.stringify(requireObj))
    console.log(API_URL);
    $.ajax({
        url: API_URL
        , data: requireObj
        , type: 'post'
        , dataType: 'jsonp'
        , success: function (result) {
            showInPage(result);
        }
    });
}

/**
 * 用于将结果显示在页面上
 * @param {JSON} responseObj 
 */
function showInPage(responseObj) {
    console.log(JSON.stringify(responseObj));
    $('#textareaTransText').val(responseObj.translation);
}
