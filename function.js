//匹配姓名（英文或者中文eg：张三 && aa）
function checkName(v){
    if(!v || v.length<2){
        return false;
    }
    var flag = /^[\u0391-\uFFE5A-Za-z]+$/.test(v);
    return flag;
}

//匹配姓名（中文 eg:张三 && 欧阳文武）
function checkCName(v){
    var flag = /^[\u0391-\uFFE5]{2,4}$/.test(v);
    return flag;
}

//匹配邮政编码
function checkPostCode(v){
    var flag = /^[0-9]{6}$/.test(v);
    return flag;
}

//匹配手机号（11位13|15|17|18）
function checkMobile(v){
    var flag = /^1[34578][0-9]{9}$/.test(v);
    return flag;
}

//匹配密码(强密码&&数字和字母和特殊字符的组合)
function checkPassword(v){
    var flag = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W])[\da-zA-Z\W]{8,}$/;
    return flag;
}

//匹配邮箱
function checkMail(val) {
    // var flag = /^([a-zA-Z0-9]+[_|\_|\.|\-]+?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.|\-]+?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(val);
    var flag = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(val);
    return flag;
}

//匹配时间（1992-01-01轻匹配）
function checkDate(v){
    var flag = /^\d{4}-\d{2}-\d{2}$/.test(v);
    return flag;
}

//检测身份证号码正确性
function checkIdcard(idcard) {
    idcard = $.trim(idcard);
    var Errors = ["ok", $.i18n.prop('身份证号码位数不对!'), $.i18n.prop('身份证号码出生日期超出范围或含有非法字符!'),
        $.i18n.prop('身份证号码校验错误!'), $.i18n.prop('身份证地区非法!')];
    var area = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外"
    };
    var idcard, Y, JYM, S, M, idcard_array = [], retflag = false;
    idcard_array = idcard.split("");
    if (area[parseInt(idcard.substr(0, 2))] == null)return Errors[4];
    switch (idcard.length) {
        case 15:
            return Errors[2];
            break;
        case 18:
            if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard.substr(6, 4)) % 4 == 0 )) {
                ereg = /^[1-9][0-9]{5}[1|2][0|9][0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;
            } else {
                ereg = /^[1-9][0-9]{5}[1|2][0|9][0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;
            }
            if (ereg.test(idcard)) {
                S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 + parseInt(idcard_array[7]) * 1 + parseInt(idcard_array[8]) * 6 + parseInt(idcard_array[9]) * 3;
                Y = S % 11;
                M = "F";
                JYM = "10X98765432";
                M = JYM.substr(Y, 1);
                if (M == idcard_array[17].toUpperCase())
                    return Errors[0];
                else
                    return Errors[3];
            }
            else
                return Errors[2];
            break;
        default:
            return Errors[1];
            break;
    }
}
//校验组织机构代码
function checkOrganizaCode(code) {
    var ws = [3, 7, 9, 10, 5, 8, 4, 2];
    var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var reg = /^([0-9A-Z]){9}$/;
    if (!reg.test(code)) {
        return false;
    }
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        sum += str.indexOf(code.charAt(i)) * ws[i];
    }
    var C9 = 11 - (sum % 11);
    var result='';
    if (C9 == 11) {
        result = '0';
    } else if (C9 == 10) {
        result = 'X';
    } else {
        result = C9;
    }
    if (code.slice(-1).charCodeAt() == result.toString().charCodeAt() && code.length == 9 ) {
        return true;
    } else {
        return false;
    }
}

//校验统一社会信用代码
function checkUSCC(code) {
    code = code ? code :'' ;
    var patrn = /^[0-9A-Z]+$/;
    //18位校验及大写校验
    if ((code.length != 18) || (patrn.test(code) == false)) {
        return false;
    }
    else {
        var Ancode;//统一社会信用代码的每一个值
        var Ancodevalue;//统一社会信用代码每一个值的权重
        var total = 0;
        var weightedfactors = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];//加权因子
        var str = '0123456789ABCDEFGHJKLMNPQRTUWXY';//不用I、O、S、V、Z

        for (var i = 0; i < code.length - 1; i++) {
            Ancode = code.substring(i, i + 1);
            Ancodevalue = str.indexOf(Ancode);
            total = total + Ancodevalue * weightedfactors[i];//权重与加权因子相乘之和
        }
        var logiccheckcode = 31 - total % 31;
        if (logiccheckcode == 31) {
            logiccheckcode = 0;
        }
        var Str = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,T,U,W,X,Y";
        var Array_Str = Str.split(',');
        logiccheckcode = Array_Str[logiccheckcode];

        var checkcode = code.substring(17, 18);
        if (logiccheckcode == checkcode) {
            return true;
        }
        return false;
    }
}

//校验纳税人识别号
function checkTaxpayerID(code) {
    code = code || '';
    code = $.trim(code);
    var reg = /[A-Za-z0-9]+/;
    if (reg.test(code) && (code.length==15 || code.length==18 || code.length==20)) {
        return true;
    }
    return false;
}

//转换成驼峰（get-element-by-id->getElementById）
function toCamel(v){
    var reg = /-\w/g;
    var result = v.replace(reg,function(val){
        return val.slice(1).toUpperCase();
    });
    return result;
}