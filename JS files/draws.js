// const arr = [10, 2, 4, 67, 97, 139, 3, 7];
// 
// for (let i = 0; i < arr.length - 1; i++ ) {
    // for (let j = i + 1; j < arr.length; j++){
        // if (arr[i] > arr[j]) {
        // let temp = arr[i];
        // arr[i] = arr[j];
        // arr[j] = temp;
        // }
    // }
// }
// console.log (arr);

let n = 9;
let str = '';

for(let i = 1; i <= n; i++){
    for (let j = 1; j <= i; j++) {
        str +=j;
    }
    str += '\n';
}
console.log(str);