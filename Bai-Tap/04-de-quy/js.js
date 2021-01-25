function tinhTong(n){
   
    if(n == 0) {
        return 0;
    }
    return tinhTong(n-1) +n;
   
}
function tinhGiaiThua (n) {
    if(n <= 1) {
        return 1;
    }
    return tinhGiaiThua(n-1)*n;
}


