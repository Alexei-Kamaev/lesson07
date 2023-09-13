'use strict';
{
const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];
function filter (firstArr, secondArr) {
    for (let i = 0; i < secondArr.length; i += 1) {
        for (let a = 0; a < firstArr.length; a += 1){
            if (firstArr[a] === secondArr [i]) {
                firstArr.splice(firstArr[a], 1);
            }
        }
    }
    console.log('Массив студентов, которые сдали экзамен:');
    console.log(firstArr);
}
filter (allStudents, failedStudents);
}