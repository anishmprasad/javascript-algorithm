function equals(a, b) {
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
