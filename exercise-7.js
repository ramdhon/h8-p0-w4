//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-4_Exercise-7
//----------------------------------------------------------

function urutkanAbjad(str) {
    var result = "";
    var strArr = str.split("");
    for (var i = 0; i < strArr.length - 1; i++) {
        for (var j = i + 1; j < strArr.length; j++) {
            if (strArr[i] > strArr[j]) {
                result = strArr[i];
                strArr[i] = strArr[j];
                strArr[j] = result;
            }
        }
    }
    result = strArr.join("");
    return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'