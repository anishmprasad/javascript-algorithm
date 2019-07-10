{
	/* <div id='brinza-task-description'>
	<p>
		Write a function solution that, given an integer N, returns the smallest
		number with the same number of digits. You can assume N is between 1 and 10<sup>9</sup> (a billion).
	</p>
	<p>
		For example, given N = 125, the function should return 100. Given N = 10, the function should return 10. Given N
		= 1, the function should return 0.
	</p>
</div>;

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
	// write your code in JavaScript (Node.js 8.9.4)
} */
}

function solution(N) {
	console.log(N);
	var numberInString = N.toString();
	var numberInLength = numberInString.length;
	console.log(numberInLength);
	var result = [];
	var k = '';
	for (var i = 0; i < numberInLength; i++) {
		result.push(numberInString[i]);
	}
	for (var p in result.sort()) {
		k += result[p];
	}
	console.log(k);
	return k;
	// write your code in JavaScript (Node.js 8.9.4)
}
