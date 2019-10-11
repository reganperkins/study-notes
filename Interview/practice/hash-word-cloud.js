
// return (n >= 65 && n < 91) || (n >= 97 && n < 123);
// lowercase ASCII is between 97 && 123
function isALetter(n) {
  n = n.charCodeAt(0);
  return (n >= 97 && n < 123);
}

function removeLastIfNotChar(word, index) {
  if (!isALetter(word[word.length - 1])) {
    return removeLastIfNotChar(word.slice(0, word.length - 1));
  }
  return word;
}

function getWordCloudData(inputString) {
  const wordMap = new Map();
  let wordStartIndex = 0;

  for (let i = 0; i < inputString.length; i++) {
    const character = inputString[i];
    if (character === ' ' || i === inputString.length - 1) {
      let word = inputString.slice(wordStartIndex, i).toLowerCase();
      if (!isALetter(word[0])) {
        word = word.slice(1);
      }
      word = removeLastIfNotChar(word);

      const currentMapValue = wordMap.get(word) || 0;
      wordMap.set(word, currentMapValue + 1);
      wordStartIndex = i + 1;
    }
  }

  return wordMap;
}



// first thoughts:
// change input to lowercase
// break string into array of words
// create a map
// loop through array
// is the last char a letter ? continue : remove
// for each check if var is in the map, if not add it otherwise update value by one
// return the map

// questions is this in ASCII ?

// struggled:
// map syntax
// update value in map (ie i++)
// get better at slice - first arg is index to start at

// TODO
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map