/*动态下拉列表*/
function active_list()
{
    var active_ul = document.getElementsByClassName("active_list_ul")[0];
    var active_li_set = document.getElementsByClassName("active_list_li");
    var total_height = 0;
    for(var i = 0;i < active_li_set.length; i++){
        total_height += parseInt(active_li_set[i].offsetHeight);
    }
    console.log(total_height);
    active_ul.style.height = total_height + "px";
    
} 
function active_list_off()
{
    var active_ul = document.getElementsByClassName("active_list_ul")[0];
    active_ul.style.height = "0px"
}

/*（新番表）网页跳转函数*/
function jump(){
    window.location.href = "2022.07schedule.html";
}

/*搜索页面跳转函数*/
function jump_search_result(){
    Window.location.href = "search_result.html";
}

window.onload=function(){
    var maindiv = document.getElementsByClassName("maindiv");
    for(var i = 0;i < maindiv.length;i++){
        maindiv[i].onclick = function(){
           window.location.href = "video.html";
        }
    }
}
function jump(){
    window.location.href = "2022.07schedule.html";
}

/*搜索页面跳转函数*/
function jump_search_result(){
    window.location.href = "search_result.html";
}