//! reverse strings function
function solution(str) {
	let splitStr = str.split('');
	let reverseStr = splitStr.reverse();
	let joinStr = reverseStr.join('');
	return joinStr;
}

console.log(solution('world'));
console.log(solution('word'));


//! i will be an integer. Double it and return it.
function doubleInteger(i) {
	i *= 2;
	return i;
}

//! Implement a function which convert the given boolean value into its string representation.
function booleanToString(b) {
	let string = String(b);
	return string;
	//your code here
}

console.log(booleanToString(true));


//! вычисление среднего значения массива 
function betterThanAverage(classPoints, yourPoints) {
	let average = classPoints.reduce((a, b) => a + b) / classPoints.length;
	if (average > yourPoints) {
		return false;
	} else {
		return true;
	}
	// Your code here
}

console.log(betterThanAverage([2, 2, 4, 2], 3));


//! You get an array of numbers, return the sum of all of the positives ones.

const arr = [];

function positiveSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			sum += arr[i];
		}

		if (arr.length === 0) {
			sum = 0;
		}
	}
	return sum;
}
console.log(positiveSum(arr));


//! Convert a Number to a String!
const stringToNumber = function (str) {
	let d = Number(str);
	// put your code here
	return d;
};
console.log(stringToNumber('4'));

//! return an array of the first n multiples of x
function countBy(x, n) {
	var z = [];
	for (let i = 1; i <= n; i++) {
		z.push(x * i);
	}

	return z;
}

console.log(countBy(2, 5));


//! Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
	let str = x.replaceAll(' ', '');
	return str;
}

console.log(noSpace(' kdj hhh h h '));


//! Build a function that returns an array of integers from n to 1 where n > 0.

const reverseSeq = n => {
	let arr = [];
	if (n <= 0) {
		return;
	} else {
		for (let i = 0; i < n; i++) {
			let a = n - i;
			arr.push(a);
		}
	}
	return arr;
};

console.log(reverseSeq(4));


//! Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
	return str.toUpperCase();
	// Code here
}

console.log(makeUpperCase("fo do su"));