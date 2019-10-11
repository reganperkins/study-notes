## Module notes:

module formats that TypeScript can transpile to:
* Asynchronous Module Definition (AMD): This is commonly used in code targeted for the browser and uses a define function to define modules.
* CommonJS: This format is used in Node.js programs. It uses module.exports to define modules and require to define dependencies.
* Universal Module Definition (UMD): This can be used in both browser apps and Node.js programs.
* ES6: This is the native JavaScript module format and uses the export keyword to define modules and import to define dependencies.

Export default exports a single item



##Typescript:

## Types
**number**: number
	```ts
	let color: number = 13;
	```
**string**: text
	```ts
	let color: string = "blue";
	```
**boolean**: true/false
	```ts
	let isDone: boolean = false;
	```
**enum**: a way of giving more friendly names to sets of numeric values
	```ts
	enum Status {Online, Offline, Away}
	let c: Color = Status.Offline; // 1
	```
**void**: no type, often used when function has no return
	```ts
	function warnUser(): void {
    console.log("This is my warning message");
	}
	```
**null**:
	```ts
	```
**undefined**:
	```ts
	```
**any**:
	```ts
	let notSure: any = 4;
	let list: any[] = [1, true, "free"];
	```
**never**: is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns; Variables also acquire the type never when narrowed by any type guards that can never be true
	```ts
	// Function returning never must have unreachable end point
	function error(message: string): never {
			throw new Error(message);
	}

	// Inferred return type is never
	function fail() {
			return error("Something failed");
	}

	// Function returning never must have unreachable end point
	function infiniteLoop(): never {
			while (true) {
			}
	}
	```
**Array**: list of values
	```ts
	let list: number[] = [1, 2, 3];
	let list: Array<number> = [1, 2, 3];
	```
**tuple**: express an array with a fixed number of elements whose types are known, but need not be the same.
	```ts
	let x: [string, number];
	```

**Interface**: defines a type
	```js
	interface OrderDetail {
		product: Product;
		quantity: number;
		dateAdded?: Date,
 		getTotal(discount: number): number;
	}
	```


**Method signatures**: defines a methods parameters and return value
	`getTotal(discount: number): number;` 

**Implements interfaces**: Implementing a class based on an interface
	```js
	interface IOrderDetail {
		product: Product;
		quantity: number;
		getTotal(discount: number): number;
	}

	class OrderDetail implements IOrderDetail {
		product: Product;
		quantity: number;

		getTotal(discount: number): number {
			const priceWithoutDiscount = this.product.unitPrice *  
			this.quantity;
			const discountAmount = priceWithoutDiscount * discount;
			return priceWithoutDiscount - discountAmount;
		}
	}
	```

set default values with typescript:
	```js
	function name(value1: number = 1) {}
	```

**Extending classes**: allowing class properties and methods to be shared with child classes
	```js
	class Product {
		constructor(public name: string, public unitPrice: number) {
		}
	}

	interface DiscountCode {
		code: string;
		percentage: number;
	}

	class ProductWithDiscountCodes extends Product {
		constructor(public name: string, public unitPrice: number) {
			super(name, unitPrice);
		}
		discountCodes: DiscountCode[];
	}
	```


	**Getters and Setters**:

	**getter**: a function with the property name and the get keyword at the beginning and no parameters. Generally, this will return the value of the associated private property.

	**setter**:** a function with the same name with the set keyword at the beginning and a single parameter for the value. This will set the value of the associated private property

	**The **private**: property is commonly named the same as the getter and setter with an underscore in front.

	```js
	class Product {
		name: string;

		private _unitPrice: number;
		get unitPrice(): number {
			return this._unitPrice || 0;
		}
		set unitPrice(value: number) {
			if (value < 0) {
				value = 0;
			}
			this._unitPrice = value;
		}
	}
	```

**Static** properties and methods are held in the class itself and not in class instances

## Compile

tsc filename

complier options can be found at https://www.typescriptlang.org/docs/handbook/compiler-options.html

--outDir can be used to place these files in a different directory
--allowJS tells the TypeScript compiler to process JavaScript files as well as TypeScript files
--watch 
--noImplicitAny

options can be set in a tsconfig.json file
	```json
	{
		"compilerOptions": {
			"target": "esnext",
			"outDir": "dist",
			"module": "es6",
			"moduleResolution": "node",
			"sourceMap": true,
			"noImplicitReturns": true,
			"noImplicitAny": true
		},
		"files": ["product.ts", "orderDetail.ts"], // file to compile
		"include": ["src/**/*"] // pattern of where to find files to compile
	}
	```


##Quiz:

What are the 5 primitive types?

What would the inferred type be for the flag variable be in the following code?
```ts
const flag = false;
```

What's the difference between an interface and a type alias?

What is wrong with the following code? How could this be resolved?
```ts
class Product {
  constructor(public name: string, public unitPrice: number) {}
}

let table = new Product();
table.name = "Table";
table.unitPrice = 700;
```

Is it possible to get the TypeScript compiler to transpile ES6 .js files? If so, how?

How can we prevent console.log() statements from getting into our code?



## Answers

1. bool, string, number, null, undefined
2. bool
3. types can not be extended or implemented from
4. let table = new Product("Table", 700);
5. --allowJS
6. tslint rules