//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-4_Exercise-8
//----------------------------------------------------------
function tukarBesarKecil(kalimat) {
    var resultKalimat = ""; 
    for (var i = 0; i < kalimat.length; i++) {
        if (kalimat[i] >= "a" && kalimat[i] <= "z") {
            resultKalimat += kalimat[i].toUpperCase();
        } else if (kalimat[i] >= "A" && kalimat[i] <= "Z") {
            resultKalimat += kalimat[i].toLowerCase();
        } else {
            resultKalimat += kalimat[i];
        }
    }
    return resultKalimat;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"