//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-4_Exercise-10
//----------------------------------------------------------
function changeMe(arr) {
    var idObj = {};
    var currentYear = 2019;

    if (arr.length === 0) {
        console.log();
    } else {
        for (var i = 0; i < arr.length; i++) {
            idObj = {
                firstName: arr[i][0],
                lastName: arr[i][1],
                gender: arr[i][2],
            };
            if (currentYear - arr[i][3] < 0 || !arr[i][3]) {
                idObj.age = "Invalid Birth Year";
            } else {
                idObj.age = currentYear - arr[i][3];
            }
            console.log(i + 1 + ". " + idObj.firstName + " " + idObj.lastName + ":");
            console.log(idObj);
        }
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""