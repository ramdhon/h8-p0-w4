//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-4_Exercise-2
//----------------------------------------------------------
function fpb(angka1, angka2) {
    var faktor = 1;
    if (angka1 < angka2) {
        for (var i = 2; i <= angka1; i++){
            if (angka1 % i === 0 && faktor < i && angka2 % i === 0) {
                faktor = i;
            }
        }
    } else {
        for (var i = 2; i <= angka2; i++){
            if (angka2 % i === 0 && faktor < i && angka1 % i === 0) {
                faktor = i;
            }
        }
    }
    return faktor;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1