//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-4_Exercise-14
//----------------------------------------------------------
function naikAngkot(arrPenumpang) {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var penumpangDetil = {};
    var listPenumpang = [];
    var startPoint = 0;
    var endPoint = 0;
    var biaya = 2000;

    if (typeof arrPenumpang === "object" && arrPenumpang.length && arrPenumpang.length !== 0) {
        for (var i = 0; i < arrPenumpang.length; i++) {
            penumpangDetil = {};
            penumpangDetil.penumpang = arrPenumpang[i][0];
            penumpangDetil.naikDari = arrPenumpang[i][1];
            penumpangDetil.tujuan = arrPenumpang[i][2];
            for (var j = 0; j < rute.length; j++) {
                if (arrPenumpang[i][1] === rute[j]) {
                    startPoint = j;
                } else if (arrPenumpang[i][2] === rute[j]) {
                    endPoint = j;
                }
            }
            penumpangDetil.bayar = Math.abs(endPoint - startPoint) * biaya;
            listPenumpang.push(penumpangDetil);
        }
    }
    
    return listPenumpang;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
