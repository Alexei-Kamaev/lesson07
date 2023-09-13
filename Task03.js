'use strict';
{
const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
function addPrefix(arr, prefSymbol) {
    for (let a = 0; a < arr.length; a += 1) {
        arr[a] = (prefSymbol + " " + arr[a]);
        console.log(arr[a]);
    }
}
addPrefix(names, 'Mr');
}