
## open ended tuples
```ts
type Scores: [string, ...number[]];
cosnt billysScores: Scores: ['billy', 1, 2, 3];
```

##strongly typed rest arguments
```ts
type Scores: [...number[]];
function test(...scores: Scores) {}
```

## Type examples:
Type where 0 - 3 items is allowed
```ts
type Scores = [] | [number] | [number, number] | [number, number, number];
```

Type where 0 - any items are allowed
```ts
type Score = [] | [...number[]];
```

##Unknown vs Any type
'any' types are not checked by the compiler but 'unknown' types are - however further type guarding provides clearer error messages.


## Type guards
### With predicts
```ts
type Score: {name: string, scores: number[]};
const scoreCheck = (scores: any): score is Scores => {
  return "name" in scores && "scores" in scores;
}
```
The type predicate, `scores is { name: string, scores: number[] }`, allows the TypeScript compiler to narrow down the type in the if block that logs the properties to the console

### With type assertion
```ts
type Scores: {name: string, scores: number[]};
function logScores(scores: unknown) {
  console.log((scores as Scores).firstName);
  console.log((scores as Scores).scores);
}
```


## Qestions:

1. We have the following function, which draws a point:
  ```js
  function drawPoint(x: number, y: number, z: number) {
    ...
  }
  ```
 We also have the following point variable:

  ```ts
  const point: [number, number, number] = [100, 200, 300];
  ```
How can we call the drawPoint function in a terse manner?

2. We need to create another version of the drawPoint function, where we can call it by passing the x, y, and z point values as parameters: `drawPoint(1, 2, 3);`
Internally, in the implementation of drawPoint, we draw the point from a tuple type [number, number, number]. How can we define the method parameter(s) with the required tuple?

3. In your implementation of drawPoint, how can you make z in the point optional?

4. We have a function called getData, which calls a web API to get some data. The number of different API resources is still growing, so we've chosen to use any as the return type:
  ```ts
  function getData(resource: string): any {
    const data = ... // call the web API
    if (resource === "person") {
      data.fullName = `${data.firstName} ${data.surname}`;
    }
    return data;
  }
  ```
 How can we make getData more type-safe by leveraging the unknown type?

5. What build flag can we use to determine which projects are out of date and need to be rebuilt without doing a rebuild?

## Answers:

1. drawPoint(...point);

2. ```js
  function drawPoint(...point: [number, number, number]) {
    ...
  }
  ```

3.   ```js
    function drawPoint(...point: [number, number, number?]) {
      ...
    }
    ```

4.   with type assertion 
  ```js
  class Person {
    firstName: string,
    lastName: string,
    fullName: string,
  }

  function getData(resource: string): unknown {
    const data = ... // call the web API
    if (data instanceof Person) {
      data.fullName = `${data.firstName} ${data.surname}`;
    }
    return data;
  }
  ```

  5. `tsc --build ... --dry --verbose`