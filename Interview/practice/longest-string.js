
// first solution
const solution = (s) => {
  const found = new Set();
  let startIndex = 0;
  let longestWordLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (found.has(s[i] || i === s.length - 1)) {
      const currentWordLength = i - startIndex;
      if (currentWordLength > longestWordLength) {
        longestWordLength = currentWordLength;
      }
      startIndex = i;
      found.clear();
    } else {
      found.add(s[i]);
    }
  }
  return longestWordLength;
};

