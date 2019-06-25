// equals(): Given two values, equals performs a deep comparison between them to figure out if they are the same or not. The expected implementation needs to handle string, numbers, dates, regex, booleans, objects and arrays.
// equals(1, 1) //=> true
// equals(1, '1') //=> false
// equals([1, 2, 3], [1, 2, 3]) //=> true

function equals(a, b) {
	console.log(a.constructor);
	if (a.constructor === Array && b.constructor === Array) {
		return a.every(a => {
			console.log({ a });
			return b.every(b => {
				console.log({ b });
				return a === b;
			});
		});
	} else {
		return [a].every(a => {
			console.log({ a });
			return [b].every(b => {
				console.log({ b });
				return a === b;
			});
		});
	}
}

module.exports = equals;
