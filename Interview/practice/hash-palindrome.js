// function hasPalindromePermutation(theString) {

//   // Check if any permutation of the input is a palindrome
//   // const stringSet = new Set(theString);
//   const apperances = {};
//   let result = false;

//   for (let i = 0; i <= theString.length; i++) {
//     if (apperances[i]) {
//       apperances[i] = apperances[i] + 1;
//     } else {
//       apperances[i] = 1;
//     }
//   }

//   return result;
// }

// function hasPalindromePermutation(theString) {

//   if (!theString) {
//     return false;
//   }

//   const apperances = {};

//   for (let i = 0; i < theString.length; i++) {
//     const char = theString[i];
//     if (apperances[char]) {
//       delete apperances[char];
//     } else {
//       apperances[char] = 1;
//     }
//   }

//   const apperancesLength = Object.keys(apperances).length;
//   return apperancesLength === 1 || !apperancesLength;
// }

function hasPalindromePermutation(theString) {
  const unMatchedApperances = new Set();

  for (let i = 0; i < theString.length; i++) {
    const char = theString[i];
    if (unMatchedApperances.has(char)) {
      unMatchedApperances.delete(char)
    } else {
      unMatchedApperances.add(char);
    }
  }
  return unMatchedApperances.size <= 1;
}


// first thought is to use a set and check if a value is stored
// realized we would have doubles and I think sets are only unique values

// want to use a hash table / object where key is the char and the value is
// the number of times it appears

// then we want to check from the begining and end of the string if the values
// match the apperances in the hash

// or check hash of appreances has only one odd appreance

// go through the string, map it to a hash of chars and apperances
// if appearances === 2 remove it
// and at the end if there is only one value in the object it is a palindrome

// struggled:
// using objects is not great if you ultimately need the final length of the object


// Learned
// sets are a great ways to see if an item exists or to keep track of a check list
// need to review set syntax
// !unMatchedLength || unMatchedLength === 1; is much better written as unMatchedLength <= 1

