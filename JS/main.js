// Tạo Theme Light/Dark
// Input: Khai báo biến cho nút Dark
/** 
 * Input: click vào btnDark thêm class cho body
 */
document.getElementById("btnDark").onclick = function(){
    var element = document.body;
    element.classList.toggle("dark");
}