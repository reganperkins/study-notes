## Lens
- an abstraction to read and write a part of immutable data
- a combination of a getter and setter function

```ts
interface Lens<TSource, T> {
  get(source: TSource): T
  set(newValue: T, source: TSource): TSource
}
```

```ts
// an object that we want to operate on
const obj = {
  a: 5
}

// our example lens that looks at the object's `a` property
const a = Lens.create(
  // provide the getter: returns the `a` property
  (obj: { a: number }) => obj.a,
  // and the setter: returns a new object with the `a` property updated to a new value
  (newValue, obj) => ({ ...obj, a: newValue })
)
```


Past work 
    - prototyping applications and bringing them through to live implementations
	- some of the features of the first two companies where a chat built with  
           draft js as a WYSIWYG and code editor 
		- with his I also added our own emoji,  mention and file upload implimentation as well as gif support and file display 	- also included features like stripe
   - 


## What is an Observable?


## Observables in React
Declarative style of programming
Explicit data flow