// tổng
function tong(a, b) {
    return a + b;
}
//  hiệu 2 số
function hieu(a, b) {
    return a - b;
}
// tích 2 số 
function tich(a, b) {
    return a * b;
}

function thuong(a, b) {
    return a / b;
}

function thuong1(n1, n2) {
    if (n2 == 0) {
        return n1 + 'không chia được 0';
    } else {
        return n1 / n2;
    }
}

function chiaHaiSo(n1, n2) {
    if (n1 == 0) {
        return n1 + 'chia mọi số đều bằng 0';
    }else{
        return n1/n2;
    }

}
// bình phương 1 số
function binhPhuongMotSo(a){
    return a*a ;
}
// bình phương 2 số
function binhPhuongHaiSo(a,b) {
    return 'Bình Phương ' + a + ' là '+ (a*a) +' và '+ ' Bình Phương ' + b + ' là '+ (b*b);
    
}
function timSoLon (a,b){
    if(a>b){
        return a;
    }else if(a<b){
        return b;
    }else{
        return a +' = '+ b;
    }
}
function timSoBe (a,b){
    if(a<b){
        return a;
    }else if(a>b){
        return b;
    }else{
        return a +' = '+ b;
    }
}
function tinhTrungBinh(n1,n2) {
    return (n1+n2)/2
}
function chiLayDu(n1,n2) {
    return n1%n2;
    
}
function ktChiHet(a,b) {
    if(a%b==0){
        return a + ' chia hết '+ b;
    }else{
        return a + ' không chia hết '+ b;
    }
}
function chuViHCN(a,b) {
    return (a +b)*2;   
}
function dienTichHCN(a,b) {
    return (a*b);   
}
function chuViHT(a) {
    return 2*a*3.14;   
}
function dienTichHT(a) {
    return a*a*3.14;   
}
// bài tập về nối chuỗi
var s1 = " Hello";
var s2 = " gái nhật đó Hello";
var s3 = " tóc đẹp hông";
var s4 = " ahihi";
var s5 = " Hello gái nhật đó hello tóc đẹp không Hello Japan";
function noi2Chuoi() {
    var s = s1 +" " + s2;
    return s;
}
function noiNhieuChuoi() {
    var s = s1 +" " + s2 + " " + s3 + " " + s4;
    return s;
}
function inHoaChuoi() {
    var s = s1 +" " + s2 + " " + s3 + " " + s4;
    var c = s.toUpperCase();
    return c;
}

function ktTonTai() {
    var s = s2.includes(s1);

    if(s == true){
        return ' có tồn tại ' + ' chuỗi ' +s1;
    }else{
        return 'không tồn tại';
    }
}
function demChuoi() {
    var s = s1 +" " + s2 + " " + s3 + " " + s4;
    var c = s.length;
    return c;
}
function catChuoi() {
    var s = s1 +" " + s2 + " " + s3 + " " + s4;
    var c = s.substring(3,10);
    return c;
}
function ktTontaiChuoi() {
   
    var n1 = s1.includes(s5);
    var n2 = s2.includes(s5);
    var n3 = s3.includes(s5);
    var n4 = s4.includes(s5);

    if (n1 == 0) {
        return  ' chuỗi ' + s1 +' có tồn tại'+' chuỗi' + '<br>'+s5;
    }else if (n1 == 0) {
        return ' chuỗi ' + s1 + ' không tồn tại ' +' chuỗi' +'<br>'+ s5;
    }if (n2 == 0) {
        return  ' chuỗi ' + s2 +' có tồn tại'+' chuỗi' +'<br>'+s5;
    }else if (n2 == 0) {
        return ' chuỗi ' + s2 + ' không tồn tại ' +' chuỗi' +'<br>'+ s5;
    }if (n3 == 0) {
        return  ' chuỗi ' + s3 +' có tồn tại'+' chuỗi' +'<br>'+s5;
    }else if (n3 == 0) {
        return ' chuỗi ' + s3 + ' không tồn tại ' +' chuỗi' +'<br>'+ s5;
    }if (n4 == 0) {
        return  ' chuỗi ' + s4 +' có tồn tại'+' chuỗi' +'<br>'+s5;
    }else if (n4 == 0) {
        return ' chuỗi ' + s4 + ' không tồn tại ' +' chuỗi' +'<br>'+ s5;
    }else{
        return ' Không tồn tại chuỗi' 
    }
}
// function ktTonTai() {
//     var s = s2.includes(s1);

//     if(s == true){
//         return ' có tồn tại ' + ' chuỗi ' +s1;
//     }else{
//         return 'không tồn tại';
//     }
// }