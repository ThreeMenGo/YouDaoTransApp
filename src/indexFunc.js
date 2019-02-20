/**
 * 首页调用到的相关方法
 */

function sureClick(){
    var requireText = generateRequireText();
    visitAPI(requireText);
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
 */
function generateRequireText(){
    var date = new Date().getTime();
    var appKey = APP_KEY;
    var key = APP_SECRET;
    var salt = date;
    var curtime = Math.round(date/1000);
    
    // 以下三个参数需要从页面获取, 没有的话使用默认值
    // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
    var query = 'good';
    var from = 'auto';
    var to = 'zh-CHS';

    var requireText = appKey + getInput(query) + salt + curtime +key;
    var sign = sha256(requireText);
    console.log(requireText);
    return requireText;
}

/**
 * 调用接口API获取返回值报文
 * @param {String} requireText 
 */
function visitAPI(requireText) {
    console.log('获取到的请求文本为:'+requireText);
    $.ajax({
        url: API_URL
        , data: requireText
        , type: 'GET'
        , dataType: 'jsonp'
        , success: function (result) {
            console.log('返回结果'+result);
            showInPage(result);
        }
    });
}

/**
 * 用于将结果显示在页面上
 * @param {JSON} jsonObj 
 */
function showInPage(jsonObj) {

}
