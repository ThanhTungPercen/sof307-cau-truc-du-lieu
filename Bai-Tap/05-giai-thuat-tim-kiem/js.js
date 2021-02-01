var arrSo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
var left = 0;
var right = arrSo.length - 1;
var soCanTim = 55;

function timKiemNhiPhan(mang, left, right, soCanTim) {
    console.log(` ${left} ${right}`)
    // tìm vị trí chính giữa
    var giua = Math.ceil((left + right) / 2);
    if (mang[giua] == soCanTim) {
        return giua;
    }
    if (left == right) {
        return -1;
    }
    if (soCanTim > mang[giua]) {
        return timKiemNhiPhan(mang,soCanTim,giua+1,right);
    }
    if (soCanTim < mang[giua]) {
        return timKiemNhiPhan(mang,soCanTim,left,giua-1);
    }
}
console.log(timKiemNhiPhan(arrSo,left,right,soCanTim));

function seachMangSo(a) {
    for (var i = 0; i < arrSo.length; i++) {
        if (arrSo[i] == a) {
            return 'vị trí ' + i;
        }
    }
    return 'không có trong mảng';
}
console.log(seachMangSo(55));