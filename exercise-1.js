//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-4_Exercise-1
//----------------------------------------------------------
function angkaPrima(angka) {
    var isPrime = true;
    var i = 0;
    if (angka === 2 || angka === 3) {
        isPrime = true;
    } else {
        i = 2;
        while (i <= Math.floor(Math.sqrt(angka))) {
            if (angka % i === 0) {
                isPrime = false;
                i = Math.floor(Math.sqrt(angka)) + 1;
            } 
            if (i === 2) {
                i++;
            } else {
                i+=2;
            }
        }
    }
    return isPrime;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false