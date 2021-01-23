//   1. Viết hàm xuất ra một tin nhắn, n lần
function showMessage(message,n) {
   var String = 'Hello Word';
   for (var i = 0; i < n ; i++) {
      String += `<p>${message}</p>`;
       
   }
    return String;
}

// 2. Sử dung hàm (1) xuất ra 10 lần dòng chữ "Hôm nay trời đẹp quá"
function showMessage10lan(message,n) {
    var String = '';
    for ( var i = 0; i < n ; i++) {
       String += `<p>${message}</p>`;
        
    }
     return String;
 }
 // 3. Viết hàm tính tổng từ 1 tới n 
 function Sum(n) {
     var sum = 0;
     for ( var i = 1; i <= n; i++) {
         sum = sum +i;
     }
     return  sum ;
 }

