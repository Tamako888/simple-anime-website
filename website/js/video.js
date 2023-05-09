var cbtbox = document.getElementById("episode");
var cbt = document.getElementById("choose");
var eul = document.getElementById("eul");
var flag = 0; //判断选择是否展开的变量
/* 展示选集 */
function show()
{
    cbt.className = 'choose_on';
    cbtbox.style.display = 'block';
    eul.style.display = 'inline';
}
function close()
{
    cbt.className = 'choose_off';
    cbtbox.style.display = 'none';
    eul.style.display = 'none';
}
function change()
{
    if(flag == 0){
        flag = 1;
        show();
    }
    else if(flag == 1){
        flag = 0;
        close();
    }
}/*动态下拉列表*/
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
function jump(){
    window.location.href = "2022.07schedule.html";
}

/*搜索页面跳转函数*/
function jump_search_result(){
    window.location.href = "search_result.html";
}