// Tạo Theme Light/Dark
// Input: Khai báo biến cho nút Dark
var themeDark = document.getElementById("themeDark");
    themeDark.onclick = function(){
    document.getElementById("body").className = "dark";
    console.log(themeDark);
};
var themeLight = document.getElementById("themeLight");
    themeLight.onclick = function(){
    document.getElementById("body").classList.remove("dark");
};
