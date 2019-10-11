

**rest**: combines multiple arguments into one array like argument
  ```js
  function logScores(...scores) {
    console.log(scores);
  }
  ``` 

**spread**: splits an iterable (like an array) to be expanded into multiple arguments
  ```js
  const scores = [75, 65, 80];
  logScore(...scores);
  ```
  