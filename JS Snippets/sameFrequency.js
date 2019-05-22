// My solution
// function same(array1, array2){
//     if(array1.length != array2.length){
//         return false;
//     } else {
//         for(let itemInArr1 of array1){
//             if(!array2.includes(itemInArr1 ** 2)){
//                 return false;
//             }
//         }
//         return true;
//     }
// }

//Naive solution with Time Complexity - O(N^2)
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) {
//             return false;
//         }
//         arr2.splice(correctIndex,1)
//     }
//     return true
// }

//Time complexity - O(N)
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true;
}

let time1 = performance.now();
same([1,2,3],[1,4,9]);
let time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)