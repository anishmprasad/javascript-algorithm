// https://fizzbuzzer.com/weird-faculty/
const weirdFaculity = require('./index');

test('weirdFaculity', () => {
	expect(weirdFaculity(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
});
