//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-4_Exercise-5
//----------------------------------------------------------
function ubahHuruf(kata) {
    var result = "";
        for (var i = 0; i < kata.length; i++) {
            result += String.fromCharCode(kata.charCodeAt(i) + 1);
        }
    return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu