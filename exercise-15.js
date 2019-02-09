//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-4_Exercise-15
//----------------------------------------------------------
function highestScore(students) {
    // Code disini
    var listClass = [];
    var classDetails = {};
    var isExist = false;
    var classMaxScore = {};
    var indexMaxScore = 0;

    if (!students) {
        return classMaxScore;
    } else {
        for (var i = 0; i < students.length; i++) {
            isExist = false;
            if (listClass.length === 0) {
                classDetails = {};
                classDetails.class = students[i].class;
                classDetails.students = [];
                classDetails.students.push(students[i].name);
                classDetails.scores = [];
                classDetails.scores.push(students[i].score);
                listClass.push(classDetails);
            } else {
                for (var j = 0; j < listClass.length; j++) {
                    if (listClass[j].class === students[i].class) {
                        listClass[j].students.push(students[i].name);
                        listClass[j].scores.push(students[i].score);
                        isExist = true;
                    }
                }
                if (!isExist) {
                    classDetails = {};
                    classDetails.class = students[i].class;
                    classDetails.students = [];
                    classDetails.students.push(students[i].name);
                    classDetails.scores = [];
                    classDetails.scores.push(students[i].score);
                    listClass.push(classDetails);
                }
            }
            console.log(listClass);
            console.log();
        }
        classMaxScore = {};
        for (i = 0; i < listClass.length; i++) {
            indexMaxScore = 0;
            classMaxScore[listClass[i].class] = {} // ----
            for (j = 0; j < listClass[i].scores.length; j++) {
                if (listClass[i].scores[j] > listClass[i].scores[indexMaxScore]) {
                    indexMaxScore = j;
                }
            }
            classMaxScore[listClass[i].class].name = listClass[i].students[indexMaxScore];
            classMaxScore[listClass[i].class].score = listClass[i].scores[indexMaxScore];
        }

        return classMaxScore;
    }
}

// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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

// // {
// //   foxes: { name: 'Alexander', score: 100 },
// //   wolves: { name: 'Alisa', score: 76 },
// //   tigers: { name: 'Viktor', score: 80 }
// // }


console.log(highestScore([])); //{}