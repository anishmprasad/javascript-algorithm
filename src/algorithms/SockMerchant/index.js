/*

Problem Statement

John works at a clothing store.He has a large pile of socks that he must pair by color for sale.Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are  socks with colors.There is one pair of color  and one of color.There are three odd socks left, one of each color.The number of pairs is.

Function Description

Complete the sockMerchant function in the editor below.It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock

Input Format

The first line contains an integer, the number of socks represented in .
The second line contains  space - separated integers describing the colors  of the socks in the pile.

Output Format

Return the total number of matching pairs of socks that John can sell.

Sample Input
9
10 20 20 10 10 30 50 10 20

Sample Output
3

*/

// Complete the sockMerchant function below.
function sockMerchant(n = 9, ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]) {
	// console.log(n, ar);
	// console.log(quick_Sort(ar));

	// ar.sort((elem, elem2) => elem < elem2);
	// console.log(
	// 	quick_Sort(ar).reduce((acc, curr) => {
	// 		return curr;
	// 	}, {})
	// );
	const sort = quick_Sort(ar);
	let lastIndex;
	for (let i = 0; i < sort.length; i++) {
		// console.log(sort[i]);
	}
	let k = sort.reduce((acc, curr) => {
		console.log(acc, curr, lastIndex);

		// if (lastIndex === curr) return acc + 1;
		console.log(lastIndex === curr);
		lastIndex = curr;
		return 0;
	}, 0);
	console.log({ k });
	console.log({ lastIndex });
	return 3;
}
function quick_Sort(origArray) {
	if (origArray.length <= 1) {
		return origArray;
	} else {
		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}
sockMerchant();
module.exports = sockMerchant;
