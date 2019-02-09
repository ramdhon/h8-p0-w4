//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-4_Exercise-6
//----------------------------------------------------------
function digitPerkalianMinimum(angka) {
    var digit = 0;
    var strDigit = "";
    for (var i = 1; i <= Math.floor(Math.sqrt(angka)); i++) {
        strDigit = "";
        if (angka % i === 0) {
            strDigit += i;
            strDigit += angka / i;
            if (digit === 0 || strDigit.length < digit) {
                digit = strDigit.length;
            }
        }
    }
    return digit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2