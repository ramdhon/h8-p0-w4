//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-4_Exercise-4
//----------------------------------------------------------
function cariModus(arr) {
    var countModus = 0;
    var modus = [0, -1]; // [banyakData, elemenIndex]
    for (var i = 0; i < arr.length - 1; i++) {
        countModus = 0;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                countModus++;
            }
        }
        if (modus[0] < countModus) {
            modus[0] = countModus;
            if (countModus === arr.length - 1) {
                modus[1] = -1;
            } else {
                modus[1] = arr[i];
            }
        }
    }
    return modus[1];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1