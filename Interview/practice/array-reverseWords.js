
function reverseCharacters(message, leftIndex, rightIndex) {

  // Walk towards the middle, from both sides
  while (leftIndex < rightIndex) {

    // Swap the left char and right char
    const temp = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}

function reverseWords(message) {
  // First we reverse all the characters in the entire message
  reverseCharacters(message, 0, message.length - 1);
  // This gives us the right word order
  // but with each word backward

  // Now we'll make the words forward again
  // by reversing each word's characters

  // We hold the index of the *start* of the current word
  // as we look for the *end* of the current word
  let currentWordStartIndex = 0;
  for (let i = 0; i <= message.length; i++) {

    // Found the end of the current word!
    if (i === message.length || message[i] === ' ') {

      // If we haven't exhausted the string our
      // next word's start is one character ahead
      reverseCharacters(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }
}

// Q: takes a message as an array of characters and reverses the order of the words in place.


// struggled with:
// really struggled with how to keep track of the beginning and end of the word in order to swap them
// keep trying to keep track of different indexs and trying to go from both directions like with char reverse


// learned:
// better to iterate through twice then swap since words can be different lengths, this means
// even if we know the indexes at worst whole array content has to be moved over to make space (O(n))
// so between swapping and scooting we have O(n^2)

// learned if you need a current index use a for loop
// then you can just keep track of the new word start and compare current to what you want to split on
