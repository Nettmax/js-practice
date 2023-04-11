// let arr = ['Tom', 'green', 55, 'apple', 43, 88, 'pear', 'red', 1];
// //let arrNew = [];
// let fruits = ['apple', 'grape', 9,7, 'pear' ]
// function createArrayOfNumbers(list){
//     let arrNew = [];
//     for(let i = 0; i < list.length; i++){
//         if(typeof list[i] == 'number') {
//             arrNew.push(list[i]);
//         }
//     } 
//     return arrNew  
// }
// console.log(createArrayOfNumbers(arr))
// console.log(createArrayOfNumbers(fruits))

// // for(let i = 0; i < arr.length; i++){
// //     if(typeof arr[i] == 'number') {
// //         arrNew.push(arr[i])
// //     }
// // }
// // console.log(arrNew);

let bmi = (height, weight) => weight/height**2;
console.log(bmi(1.7, 70));
