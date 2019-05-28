//Sliding Window - Problem solving pattern

//Naive solution - Time complexity - O(N^2)
// function maxSubarraySum(arr,subArrSize){

//     if(arr.length < subArrSize){
//         return null;
//     }

//     let max = -Infinity;
//     for(let i = 0; i < arr.length - subArrSize + 1; i++){
//         let temp = 0;
//         for(let j = 0; j < subArrSize; j++){
//             temp += arr[i + j];
//         }

//         if(temp > max) {
//             max = temp;
//         }
//     }

//     return max;
// }

//Time complexity - O(n)
function maxSubarraySum(arr,subArrSize){
    let maxSum = 0;
    let tempSum = 0;

    if(arr.length < subArrSize){
        return null;
    }

    for(let i = 0; i < subArrSize; i ++){
        maxSum += arr[i];
    }

    tempSum = maxSum;
    for(let i = subArrSize; i < arr.length; i++){
        tempSum = tempSum - arr[i - subArrSize] + arr[i];
        maxSum  = Math.max(maxSum,tempSum);
    }

    return maxSum;
}


maxSubarraySum([4,2,1,6],3)