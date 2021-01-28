
// 5. Viết hàm trả ra danh sách n số nhỏ hơn n
//     - getLessThan(n): number[]
function getLessThan(n) {
    var number = [];
    for (let i = 0; i < n; i++) {
        number.push(i);
    }
    return number;
}

// 7. Viết hàm trả ra danh sách tất cả các số lẻ nhỏ hơn n
//     - getOddlessThan(n): number[]
function getOddlessThan(n) {
    var number = [];
    for (let i = 0; i < n; i++) {
        if (i % 2 != 0) {
            number.push(i);
        }
    }
    return number;
}

// 9. Viết hàm tìm ra vị trí phần tử đầu tiên nằm trong mảng 
//     - findFirst(arr, chuoiCanTim): number
function findFirst(arr, chuoiCanTim) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == chuoiCanTim) {
            return i + 1;
        }
    }
}
// 11. Viết hàm tìm ra vị trí phần tử cuối cùng nằm trong mảng 
//     - findLast(arr, chuoiCanTim): number
// 12. Sử dụng hàm (11). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá"]    
//     - string cần tìm: bóng rổ
//     - kết quả trả ra: vị trí 2
function findLast(arr, chuoiCanTim) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == chuoiCanTim) {
            return i + 1;
        }
    }
}

// 13. Viết hàm tìm ra vị trí tất cả phần tử nằm trong mảng 
//     - find(arr, chuoiCanTim): numer[]
// 14. Sử dụng hàm (13). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá", "bóng rổ"]    
//     - string cần tìm: bóng rổ
//     - kết quả trả ra: vị trí [2,4]
function find(arr, chuoiCanTim) {
    var number = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == chuoiCanTim) {
            number.push(i + 1);
        }
    }
    return number;
}
// 15. Viết hàm thêm một phần tử vào mảng 
//     - add(arr, chuoiCanThem): []
// 16. Sử dụng hàm (15). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá"]    
//     - string cần thêm: bóng rổ
//     - kết quả trả ra: ["bóng chuyền", "bóng rổ", "bóng đá", "bóng rổ"]
function add(arr, chuoiCanThem) {
    arr.push(chuoiCanThem);
    return arr;
}

// 17. Viết hàm thêm một phần tử vào mảng, nhưng nếu phần tử đó đã tồn tại thì ko thêm nữa.
//     addIfNotExist(arr,chuoiCanThem):[]
// 18. Sử dụng hàm (17). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá"]    
//     - string cần thêm: bóng rổ
//     - kết quả trả ra: ["bóng chuyền", "bóng rổ", "bóng đá"]
function addIfNotExist(arr, chuoiCanThem) {
    if (arr.indexOf(chuoiCanThem) < 0) {
        arr.push(chuoiCanThem);
    }
    return arr;
}

// 19. Viết hàm xoá toàn bộ phần tử ra khỏi mảng 
//     - delete(arr,chuoiCanXoa): []
// 20. Sử dụng hàm (19). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá","bóng chuyền"]    
//     - string cần thêm: bóng chuyền
//     - kết quả trả ra: ["bóng rổ", "bóng đá"]
function xoaPhanTu(arr, chuoiCanXoa) {
    return arr.filter(function (e) { return e !== chuoiCanXoa })
}