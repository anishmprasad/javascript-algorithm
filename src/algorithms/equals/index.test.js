const equals = require('./index');

test('Equals', () => {
	expect(equals([1, 2, 3], [1, 2, 3])).toBe(true);
});
