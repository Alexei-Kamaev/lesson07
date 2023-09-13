'use strict';


{
const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];
function filter (firstArr, secondArr) {
    for (let i =0; i < secondArr.length; i += 1) {
        console.log (firstArr[i], secondArr[i]);
    }
}

filter (allStudents, failedStudents);







}