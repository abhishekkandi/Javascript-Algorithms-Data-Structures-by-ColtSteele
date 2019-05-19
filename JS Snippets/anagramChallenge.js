// My solution
// function isAnagram(str1, str2){
//     if(str1.length !== str2.length)
//         return false;

//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};

//     for(let val of str1){
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//     }
//     for(let val of str2){
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//     }
    
//     for(let key in frequencyCounter1){
//         if(!(key in frequencyCounter2)){
//             return false;
//         }
//         if(frequencyCounter1[key] !== frequencyCounter2[key]){
//             return false;
//         }
//     }

//     return true;
// }

// isAnagram('anagram','nagaram');

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

validAnagram('anagram', 'nagaram')