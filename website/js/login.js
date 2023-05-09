function jump_to_register()
{
  window.location.href = "register.html";
}
function login_judge(){ 
    var email = document.getElementsByName("account")[0];
    var password = document.getElementsByName("password")[0];
    var myfrm = document.getElementById("login");
    var key;
    var flag = false;
    if(localStorage.getItem("signal") != "0"){
      for(var i = 2; i < localStorage.length - 1; i += 3){ /* length - 1，排除signal的影响*/
            var k = localStorage.key(i);
            if(localStorage.getItem(key) == email.vaule){
               key = k; 
               flag = true;
               break;
            }  
       }
       if(flag){
         var position = key[key.length - 1];
         if(localStorage.getItem("password"+position) == password.value){
            alert("登录成功");
        }
        else{
           alert("密码不正确，请重新输入");
        }
      }
      else{
        alert("该邮箱不存在，请先注册！"); 
        return false;
      }
    }
    myfrm.method = "get";
    myfrm.action = "index.html";
    myfrm.submit();
}