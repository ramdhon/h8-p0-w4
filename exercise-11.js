//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-4_Exercise-11
//----------------------------------------------------------
function shoppingTime(memberId, money) {
    var tokoX = [
        ["Sepatu Stacattu", 1500000],
        ["Baju Zoro", 500000],
        ["Baju H&N", 250000],
        ["Sweater Uniklooh", 175000],
        ["Casing Handphone", 50000]
    ];
    var shoppingDetails = {};
    var moneyLeft = money;
    var count = 0;

    if (!memberId) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    } else if (money < 50000 || !money) {
        return "Mohon maaf, uang tidak cukup";
    } else {
        shoppingDetails = {
            memberId: memberId,
            money: money,
            listPurchased: []
        };
        count = 0;
        while (moneyLeft >= 50000 && count < tokoX.length) {
            if (moneyLeft >= tokoX[count][1]) {
                shoppingDetails.listPurchased.push(tokoX[count][0]);
                moneyLeft -= tokoX[count][1];
            }
            count++;
        }
        shoppingDetails.changeMoney = moneyLeft;
    }
    return shoppingDetails;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja