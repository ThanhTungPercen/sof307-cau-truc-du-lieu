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
 // 5. Viết hàm tính tổng từ a tới b 
 function tinhTongAtoiB(a,b){
    var sum = 0;
    for ( var i = a; i <= b; i++) {
        sum = sum +i;
    }
    return  sum ;
 }
 // 6. Sử dụng hàm (5) tính toán tổng từ 1 tới 100; tính toán tổng từ 20 tới 76
 function tinhTongAtoiB(a,b){
    var sum = 0;
    for ( var i = a; i <= b; i++) {
        sum = sum +i;
    }
    return  sum ;
 }
 // 9. Viết hàm xuất ra n số lẻ nhỏ nhất 
 function soLeNhoNhat(a,b) {
    var sum = 0;
    for (var i = a; i <= b; i++) {
            if(i % 2 != 0){
                sum = sum +i;
            }        
    }
    return sum;
 }
 function danhSachSoLe(from, num) {
    var list = new Array();
    var i = from;
    while (list.length < num) {
        if (i % 2 != 0) {
          list.push(i);
          
        }
        i++;
    }
    return list;
}
// 11. Viết hàm xuất ra n số lẻ gần nhất bắt đầu từ m. Ví dụ: viết ra 3 số lẻ gần nhất bắt đầu từ 102 => 103; 105; 107
// 13. Viết hàm kiểm tra một số có phải là số nguyên tố hay không? Biết số nguyên tố là số chia hết cho một và chính nó.
function checkSNT(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return ' không phải là số nguyên tố' ;
        }
    }
    return  ' là số nguyên tố';
}
// 14. Viết hàm xuất ra n số nguyên tố nhỏ nhất. 
function listSNT(n) {
    var danhSachSNT = new Array();
    var dem = 0;
    var soHienTai = 2;

    while (danhSachSNT.length < n) {
        if (checkSNT(soHienTai) == true) {
            danhSachSNT[dem] = soHienTai;
            dem++;
        }
        soHienTai++;
    }
    return danhSachSNT;
}
function listSNTFrom(from, n) {
    var danhSachSNT = new Array();
    var dem = 0;
    var soHienTai = from;

    while (danhSachSNT.length < n) {
        if (checkSNT(soHienTai) == true) {
            danhSachSNT[dem] = soHienTai;
            dem++;
        }
        soHienTai++;
    }
    return danhSachSNT;
}