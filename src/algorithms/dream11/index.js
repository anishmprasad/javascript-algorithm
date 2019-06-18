// applySpec(): Given a specification object that recursively maps properties to functions, applySpec takes in this specification object and returns a function that when called with some arguments produces an object of the same structure. For Eg:
// const getMetrics = applySpec({
//   sum: (a, b) => a + b, // sum is called with (2, 4)
//   nested: {
//     mul: (a, b) => a * b // mul is called with (2, 4)
//   }
// })

// getMetrics(2, 4) // => { sum: 6, nested: { mul: 8 } }
// construct(): Wraps a class inside a factory function that can be called with the same arguments that the class accepts and returns an instance of the class. For Eg:
// class Rectangle {
//   constructor(h, w) {
//     this.height = h
//     this.width = w
//   }
//   area() {
//     return this.height * this.width
//   }
// }

// const createRectangle = construct(Rectangle)
// const rect = createRectangle(10, 20)
// rect.area() // => 200

// equals(): Given two values, equals performs a deep comparison between them to figure out if they are the same or not. The expected implementation needs to handle string, numbers, dates, regex, booleans, objects and arrays.
// equals(1, 1) //=> true
// equals(1, '1') //=> false
// equals([1, 2, 3], [1, 2, 3]) //=> true

// Important Guidelines:

// The project contains stub implementations of these functions inside source directory.
// We have also added unit tests for each of these functions that you will have complete access to inside the test folder.
// Do not delete existing tests, you can add more if needed.
// Some tests are skipped as they cover more advanced use cases, feel free to enable them for BONUS points, if you think your code can pass them.
// Do not use any libraries in your code.
// You are free to use latest ES6/7/8 features as provided by the platform.

// // Complete the sockMerchant function below.
// function sockMerchant(n, ar) {
// 	console.log(n, ar);
// 	return 3;
// }

// module.exports = sockMerchant;

// const getMetrics = applySpec({
// 	sum: (a, b) => a + b, // sum is called with (2, 4)
// 	nested: {
// 		mul: (a, b) => a * b // mul is called with (2, 4)
// 	}
// })

// getMetrics(2, 4) // => { sum: 6, nested: { mul: 8 } }

function applySpec(object) {
	// const Object = {
	// 	sum: (a, b) => a + b,
	// 	nested: {
	// 		mul: (a, b) => a * b
	// 	}
	// };
	let outputObject = {};
	Object.keys(Object).map(functions => {
		return (outputObject[functions] = functions(arg1, arg2));
	});
}

function getMetrics(a, b) {
	return applySpec(obj);
}

function equals(a, b) {
	return [a].map(a => {
		return [b].map(b => {
			return a === b;
		});
	});
}
