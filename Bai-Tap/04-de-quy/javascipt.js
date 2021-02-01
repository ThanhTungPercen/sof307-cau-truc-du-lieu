// Bài1
// function finbo(n){
//     if(n==1 || n==2){
//         return 1;
//     }else{
//         return fin(n-1) + fin(n-2);
//     }
// }
// console.log(finbo(6));

Bài2
function giaiThua(n){
    if(n > 1){
        return giaiThua(n-1)*n;
    }
    return n;
}
console.log(giaiThua(5));

//Bài3
function sum( n) {
    if (n >= 1) {
        return sum(n - 1) + n;
    }
    return n;
}
console.log(sum(5));

//Tính S(n) = 1 + 1/2 + 1/3 + ... + 1/n
function tongSoMotphanHai(n) {
    console.log(n);
    if (n == 1) {
        return 1
    }
    return tongSoMotphanHai((n - 1)) + (1 / n)
}
console.log(tongSoMotphanHai(4))

//Tính S(n) = 1^2 + 2^2 + 3^2 + ... + (n-1)^2 + n^2
function tongMu(n) {
    if (n == 1) {
        return 1
    }
    return tongMu((n - 1) * (n - 1)) + (n * n)
}
console.log(tongMu(2))

//Tính S(n) = 1/2 + 1/4 + ... + 1/2n
function tongPhanHaiN(n) {
    console.log(`${n}`)
    if (n == 1) {
        return 1 / 2
    }
    return tongPhanHaiN(n - 1) + (1 / (2 * n))
}
console.log(tongPhanHaiN(2))

//Tính S(n) = 1 + 1/3 + 1/5 + ... + 1/(2n+1)
function tongHaiNCongMot(n) {
    if (n == 0) {
        return 1
    }
    return tongHaiNCongMot(n - 1) + (1 / ((2 * n) + 1))
}
console.log(tongHaiNCongMot(2))

//Tính S(n) = 1/(1*2) + 1/(2*3) + 1/( n(*n-1) )
function tongNNhanN(n) {
    if (n == 2 || n == 1) {
        return 1 / (1 * 2)
    }
    return tongNNhanN(n - 1) + (1 / (n * (n - 1)))
}
console.log(tongNNhanN(4))

//Tính S(n) = 1/2 + 2/3 + 3/4 + ... + n/(n+1)
function tongNCongMot(n) {
    if (n == 1) {
        return 1 / 2
    }
    return tongNCongMot(n - 1) + (n / (n + 1))
}
console.log(tongNCongMot(3))

//Tính S(n) = 1/2 + 3/4 + 5/6 + ... + (2n+1)/(2n+2)
function tongHaiNhanNCongMot(n) {
    if (n == 0) {
        return 1/2
    }
    return tongHaiNhanNCongMot(n - 1) + (((2*n)+1)/((2*n)+2))

}
console.log(tongHaiNhanNCongMot(2))

//Tính T(n) = 1*2*3*.....*n
function tich(n) {
    if (n == 1) {
        return 1
    }
    return tich(n - 1) * n
} 
console.log(tich(3))

//Tính T(x,n) = x^n
function tichXN(x,n) {
    if (n == 1) {
        return x
    }
    return tichXN(n-1) * (x*n)
}
console.log(tichXN(3,1))

//Tính S(n) = 1 + 1.2 + 1.2.3 + .... + 1.2.3....n
function tongNPhay(n) {
    if (n == 1) {
        return 1
    }
    return tongNPhay(n -1) + n
}

//Tính S(n) = 1 + 1/(1+2) + 1/(1+2+3) + ... + 1/(1+2+3+...+n)
function tongMotChiaN(n) {
    if (n == 1) {
        return 1
    }
    return tongMotChiaN(n -1) + (1/(1+(n*1)))
}
console.log(tongMotChiaN(2))