const solution = require('./index');

test('shuffled number', () => {
	expect(solution(123456)).toBe(162534);
});
