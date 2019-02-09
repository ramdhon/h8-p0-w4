//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-4_Exercise-9
//----------------------------------------------------------
function checkAB(num) {
    var ab = false;
    for (var i = 0; i < num.length - 4; i++) {
        if (num[i] === "a" && num[i + 4] === "b") {
            ab = true;
        } else if (num[i] === "b" && num[i + 4] === "a") {
            ab = true;
        }
    }
    return ab;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false