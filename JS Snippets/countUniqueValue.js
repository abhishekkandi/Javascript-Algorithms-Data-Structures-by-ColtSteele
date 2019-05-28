//Input will be array of sorted values 
//Output should be Count of unique values present in the array
//It can have negative numbers too
//For Example, Input - [-2,-1,0,0,1,1,2,2,3], Output - 6 (-2,-1,0,1,2,3)

//TimeComplexity - O(n)
function countUniqueValues(arr){
    if(arr.length === 0) return 0;

    let i = 0;
    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

countUniqueValues([-2,-1,0,0,1,1,2,2,3]);