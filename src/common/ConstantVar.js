/********************************************************************
 *   系统定义代码常量
 *******************************************************************/
// 接口地址
var HTTP_API_URL = 'http://openapi.youdao.com/openapi';
var HTTPS_API_URL = 'https://openapi.youdao.com/openapi';

// TODONZ 密钥
var APP_KEY = '7cb4b03aa3429d9c';
var APP_SECRET = 'kxeqDbkiRgd2d7PhMpjIKm1SNv2eS58v';

// 十六进制字符串形式转换代码
var HEX_CODE = ['0', '1', '2', '3'
                , '4', '5', '6', '7'
                , '8', '9', 'A', 'B'
                , 'C', 'D', 'E', 'F'
];

// 时间
var DATE_LONG = new Date().getTime();

// 地址编码语言
var URL_CODE = 'UTF-8';

// 语言代码及含义映射常量, code即为请求报文中from/to字段对应的取值
var LANGUAGE_CODE = [
    {code: 'auto', name: '自动检测'}
    , {code: 'zh_CHS', name: '中文'}
    , {code: 'ja', name: '日文'}
    , {code: 'en', name: '英文'}
    , {code: 'ko', name: '韩文'}
    , {code: 'fr', name: '法文'}
    , {code: 'ar', name: '阿拉伯文'}
    , {code: 'pl', name: '波兰文'}
    , {code: 'da', name: '丹麦文'}
    , {code: 'de', name: '德文'}
    , {code: 'ru', name: '俄文'}
    , {code: 'fi', name: '芬兰文'}
    , {code: 'nl', name: '荷兰文'}
    , {code: 'cs', name: '捷克文'}
    , {code: 'ro', name: '罗马尼亚文'}
    , {code: 'no', name: '挪威文'}
    , {code: 'pt', name: '葡萄牙文'}
    , {code: 'sv', name: '瑞典文'}
    , {code: 'sk', name: '斯洛伐克文'}
    , {code: 'es', name: '西班牙文'}
    , {code: 'hi', name: '印地文'}
    , {code: 'id', name: '印度尼西亚文'}
    , {code: 'it', name: '意大利文'}
    , {code: 'th', name: '泰文'}
    , {code: 'tr', name: '土耳其文'}
    , {code: 'el', name: '希腊文'}
    , {code: 'hu', name: '匈牙利文'}
];

// 请求报文JSON串
var REQUEST_JSON = {
    // 要翻译的文本 必须是UTF-8编码
    q: ''
    // 源语言 可设置为auto
    , from: 'auto'
    // 目标语言 可设置为auto
    , to: 'zh-CHS'
    // 应用申请的key
    , appKey: APP_KEY
    // 随机数
    , salt: ''
    , sign: ''
    , signType: 'v3'
    , curtime: ''
};

// 返回报文JSON串
var RESPONSE_OBJ = {
    // 错误返回码
    errorCode: ''
    // 源文本
    , query: ''
    // 输入发音地址
    , speakUrl: ''
    // 翻译发音地址
    , tSpeakUrl: ''
    // 译文
    , translation: ['']
    // 有道词典-基本词典
    , basic: {
        phonetic: ''
        // 英式发音音标
        , 'uk-phonetic': ''
        // 美式发音音标
        , 'us-phonetic': ''
        // 词义扩展
        , explains: ['']
    }
    // 有道词典-网络释义
    , web: [
        {key: '', value: ['']}
    ]
};


/********************************************************************
 *   自定义代码常量
 *******************************************************************/
// 接口地址
var API_URL = HTTP_API_URL;
