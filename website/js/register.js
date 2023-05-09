window.onload=function(){
    if(localStorage.getItem("signal") == null){
        localStorage.setItem("signal",0);
    }
}
function judge()
{
    var password = document.getElementsByName("password")[0];
    var ensure_password = document.getElementsByName("ensure_password")[0];
    for(var i = 0; i < password.value.length; i++){
        if(password[i] != ensure_password[i])
            return false;
    }
    return true;
}
function recover(str)
{
    var all = document.getElementsByTagName("input");
    for(var i = 0;i < all.length;i++){
        if(all[i].name == str)
            break;
        else if(all[i].name == "Name"){
            all[i].placeholder = "请输入您的用户名";
            all[i].className = "original_placeholder";
        }
        else if(all[i].name = "account"){
            all[i].placeholder = "请输入您的邮箱";
            all[i].className = "original_placeholder";
        }
        else if(all[i].name = "password"){
            all[i].placeholder = "请输入您的密码";
            all[i].className = "original_placeholder";
        }
        else if(all[i].name = "ensure_password"){
            all[i].placeholder = "请确认您的密码";
            all[i].className = "original_placeholder";
        }
    }
}
function information_of_registration_get()
{
    var name = document.getElementsByName("Name")[0];
    if(name.value.length > 15 || name.value.length <= 0){
        name.value = "";
        name.placeholder = "用户名必须由1-15个字符或数字组成";
        name.className = "change_placeholder";
        name.focus();
        recover("Name");
        return false;
    }
    var email = document.getElementsByName("account")[0];
    var Email = email.value;
    var Earr = Email.split('@');
    if(Earr.length > 2 || Earr.length <= 1 || Earr[1].length <= 5)  //一个简单检验
    {
        email.value = "";
        email.placeholder = "邮箱必须为合法邮箱";
        email.className = "change_placeholder";
        email.focus();
        recover("account");
        return false;
    }
    var password = document.getElementsByName("password")[0];
    var ensure_password = document.getElementsByName("ensure_password")[0];
    if(password.value.length < 6 || password.value.length > 20){
        if(password.value.length == 0)
        {
            password.value = "";
            ensure_password.value = "";
            password.placeholder = "密码不能为空";
            password.className = "change_placeholder";
            password.focus();
            recover("password");
            return false;
        }
        password.value = "";
        ensure_password.value = "";
        password.placeholder = "密码必须由6-20个字符或数字组成";
        password.className = "change_placeholder";
        password.focus();
        recover("password");
        return false;
    }
    if(ensure_password.value.length == 0){
        ensure_password.value = "";
        ensure_password.placeholder = "确认密码不能为空";
        ensure_password.className = "change_placeholder";
        ensure_password.focus();
        recover("ensure_password");
        return false;
    }
    if(ensure_password.value.length != password.value.length){
        ensure_password.value = "";
        ensure_password.placeholder = "确认密码与前一次密码不一致";
        ensure_password.className = "change_placeholder";
        ensure_password.focus();
        recover("ensure_password");
        return false;
    }
    else if(!judge()){
        ensure_password.value = "";
        ensure_password.placeholder = "确认密码与前一次密码不一致";
        ensure_password.className = "change_placeholder";
        ensure_password.focus();
        recover("ensure_password");
        return false;
    }
    /*检验通过后，对注册信息存储*/
    var myform = document.getElementById("myfrm");
    var index = parseInt(localStorage.getItem("signal")) + 1;   /*index，作为signal在数据库中存储，方便遍历，以达到可以容许多用户注册登录的效果*/
    localStorage.setItem("password"+index,password.value);
    localStorage.setItem("username"+index,name.value);
    localStorage.setItem("email"+index,email.value);
    localStorage.setItem("signal",index);    /*输入一个信息后更新一次signal*/
    alert("注册成功");
    myform.method = "get";
    myform.submit(); 
    return true;
}