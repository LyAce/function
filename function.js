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

//匹配密码
function checkPassword(v){

}