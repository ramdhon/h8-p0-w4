//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-4_Exercise-16
//----------------------------------------------------------
function graduates(students) {
    // Code disini
    var passingClasses = {};
    var studentDetail = {};
    var isExist = false;
    var passingScore = 75;

    if (!students) {
        return passingClasses;
    } else {
        for (var i = 0; i < students.length; i++) {
            studentDetail = {};
            isExist = false;
            for (var key in passingClasses) {
                if (students[i].class === key && students[i].score > passingScore) {
                    studentDetail.name = students[i].name;
                    studentDetail.score = students[i].score;
                    passingClasses[students[i].class].push(studentDetail);
                    isExist = true;
                }
            }
            if (!isExist && students[i].score > passingScore) {
                passingClasses[students[i].class] = [];
                studentDetail.name = students[i].name;
                studentDetail.score = students[i].score;
                passingClasses[students[i].class].push(studentDetail);
                isExist = true;
            }
        }
    }

    return passingClasses;
}

console.log(graduates([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
    {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}