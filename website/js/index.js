/*轮播图*/ 
var index = -1;
var list = document.getElementsByName("lle");
var pointlist = document.getElementsByClassName("point");
function change_point(i)    //轮播图 点被选中
{
    pointlist[i].style.transition = ".4s .0s";
    pointlist[i].style.backgroundColor = "rgb(6, 162, 253)";
}
function recover_point(i) //轮播图 点从被选中变为未选中
{
    pointlist[i].style.transition = ".4s .0s";
    pointlist[i].style.backgroundColor = "white";
}
function init()    //初始化，使录播图的第一个点一开始就被选中
{
    pointlist[0].style.backgroundColor = "rgb(6, 162, 253)";
}
function setting(){ /*由于li_active动态变化，每次由鼠标重新设置超链接*/
    var li_active = document.getElementsByClassName("li_active");
    for(var i = 0;i < li_active.length;i++){
        li_active[i].onclick = function(){
           window.location.href = "video.html";
        }
    }
}
function change_picture() //轮播图换图
{
    if(index < 4)
        index++;
    else index = 0;
    for(var i = 0;i < list.length; i++){
        list[i].className = 'mleftli';
        recover_point(i);
    }
    list[index].className = 'li_active';
    setting();
    change_point(index);
}

var Interval = setInterval(change_picture,5000);  //换图间隔
function pick_picture(it)   //鼠标选图 并换图的函数实现
{
    index = it - 1;
    for(var i = 0;i < list.length; i++){
        list[i].className = 'mleftli';
        pointlist[i].style.transition = ".4s .0s";
    pointlist[i].style.backgroundColor = "white";
    }
    list[index].className = 'li_active';
    setting();
    change_point(index);
}

function point_over(i)   //光标落在点上，点的变化的函数实现
{
    pointlist[i - 1].style.cursor = "pointer";
    pointlist[i - 1].style.transition = ".15s .15s";
    pointlist[i - 1].style.backgroundColor = "rgb(6, 162, 253)";
    pointlist[i - 1].style.border="2px solid white";
    pointlist[i - 1].style.marginLeft = "4px";
    pointlist[i - 1].style.marginRight = "4px";
}

function point_leave(i)  //光标离开点， 点的变化的函数实现
{   
    if(index == i - 1){
        pointlist[i - 1].style.border="1px solid white";
        pointlist[i - 1].style.marginLeft = "5px";
        pointlist[i - 1].style.marginRight = "5px";
        return;
    }
    pointlist[i - 1].style.transition = ".15s .15s";
    pointlist[i - 1].style.backgroundColor = "white";
    pointlist[i - 1].style.border="1px solid white";
    pointlist[i - 1].style.marginLeft = "5px";
    pointlist[i - 1].style.marginRight = "5px";
}

/*动态下拉列表*/
function active_list()
{
    var active_ul = document.getElementsByClassName("active_list_ul")[0];
    var active_li_set = document.getElementsByClassName("active_list_li");
    var total_height = 0;
    for(var i = 0;i < active_li_set.length; i++){
        total_height += parseInt(active_li_set[i].offsetHeight);
    }
    active_ul.style.height = total_height + "px";
    
} 
function active_list_off()
{
    var active_ul = document.getElementsByClassName("active_list_ul")[0];
    active_ul.style.height = "0px"
}

/*网页跳转函数*/
function jump(){
    window.location.href = "2022.07schedule.html";
}

/*搜索页面跳转函数*/
function jump_search_result(){
    window.location.href = "search_result.html";
}
/*给可点击的位置加跳转 */
window.onload=function(){
    var maindiv = document.getElementsByClassName("maindiv");
    var mleftli1 = document.getElementsByClassName("mleftli1");
    var mrightdiv = document.getElementsByClassName("mrightdiv");
    init();   //轮播图导航点初始化
    change_picture();
    for(var i = 0;i < mleftli1.length;i++){
        mleftli1[i].onclick = function(){
           window.location.href = "video.html";
        }
    }
    for(var i = 0;i < maindiv.length;i++){
        maindiv[i].onclick = function(){
           window.location.href = "video.html";
        }
    }
    
    for(var i = 0; i < mrightdiv.length;i++){
        mrightdiv[i].onclick = function(){
           window.location.href = "video.html";
        }
    }
}