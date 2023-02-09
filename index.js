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
	let z = [];
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


//! write a function that tells you if it is possible to get to the pump or not

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	let distance = fuelLeft * mpg;
	if (distance >= distanceToPump) {
		return true;
	} else {
		return false;
	}
};

console.log(zeroFuel(60, 25, 3));


//! Each positive becomes negatives, and the negatives become positives.

const arr2 = [2, 4, 3, 6, 4, 0];
function invert(array) {
	return array.map(num => {
		return num * -1;
	});
}

console.log(invert(arr2));


//! Given a year, return the century it is in.

function century(year) {

	let centuryCount = 0;
	while (year > 0) {
		year = year - 100;
		centuryCount = centuryCount + 1;
	}
	return centuryCount;
}

console.log(century(1234));


//! Our football team has finished the championship........
const footballArr = ["3:1", "2:2", "0:1", "2:3", "3:2", "2:2"];


function points(games) {
	let res = 0;
	for (let i = 0; i < games.length; i++) {
		if (games[i][0] > games[i][2]) {
			res += 3;
		}
		if (games[i][0] == games[i][2]) {
			res += 1;
		}
	}
	return +res;
}

console.log(points(footballArr));



//! Your classmates asked you to copy some paperwork for them. 

function paperwork(n, m) {
	if (n < 0 || m < 0) {
		return 0;
	} else {
		return n * m;
	}
}


//! Given the triangle of consecutive odd numbers:

function rowSumOddNumbers(n) {
	return n * n * n;
}


//! Your task is to create a function that does four basic mathematical operations.

function basicOp(operation, value1, value2) {
	if (operation === '+') {
		return value1 + value2;
	} else if (operation === '-') {
		return value1 - value2;
	} else if (operation === '*') {
		return value1 * value2;
	}
	else if (operation === '/') {
		return value1 / value2;
	}
}

console.log(basicOp('-', 5, 5));


//! Nathan loves cycling.

function litres(time) {
	let litresInHour = 0.5;
	return Math.floor(time * litresInHour);
}

console.log(litres(3));

//! number to string

function numberToString(num) {
	return String(num);
}

console.log(numberToString(-100));

//! A square of squares

const isSquare = function (n) {
	if (Math.sqrt(n) % 1 === 0) {
		return true;
	} else { return false; }
};

console.log(isSquare(4));


//! Write a function that will take the number of petals of each flower and return true.....

function lovefunc(flower1, flower2) {
	if (flower1 % 2 !== 0 && flower2 % 2 == 0) {
		return true;
	} else if (flower1 % 2 == 0 && flower2 % 2 !== 0) {
		return true;
	} else {
		return false;
	}
}

console.log(lovefunc(2, 2));


//! You might know some pretty large perfect squares. But what about the NEXT one?

function findNextSquare(sq) {
	let a = Math.sqrt(sq);
	let b = (a + 1);
	b *= b;
	if (Number.isInteger(b)) {
		return b;
	} else {
		return -1;
	}
	// Return the next square if sq is a perfect square, -1 otherwise
}

console.log(findNextSquare(342786627));


//! Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
	return number * -1;
}

console.log(opposite(4));


//! Convert number to reversed array of digits

function digitize(n) {
	const arr = [];
	if (n < 0) {
		return;
	} else {
		let str = String(n);

		return str.split('').map(Number).reverse();
	}
}

console.log(digitize(1488888));


//! Make a function that will return a greeting statement that.....

function greet(name) {
	return `Hello, ${name} how are you doing today?`;
}

console.log(greet("Artsiom"));



//! Make a program that filters a list of strings and returns a list...

const myArr = ["Ryan", "Kieran", "Jason", "Yous", "Ryan", "Mark"];

function friend(friends) {
	return friends.filter(item => item.length === 4);
}
console.log(friend(myArr));


//! In a factory a printer prints labels for boxes. 

const printerError = word => {
	const invalidCharacters = [...word]
		.map(word => word.charCodeAt(0))
		.filter(
			charCode => charCode < 97 || charCode > 109
		);
	return `${invalidCharacters.length}/${word.length}`;
};


//! Write a function that accepts an integer n and a string s as parameters...

function repeatStr(n, s) {

	return s.repeat(n);
}

console.log(repeatStr(3, 'sad'));




function XO(str) {
	str = str.toLowerCase();

	let arrayOfCharacters = str.split("");

	let countX = arrayOfCharacters.reduce(function (n, val) {
		return n + (val === 'x');
	}, 0);

	let countO = arrayOfCharacters.reduce(function (n, val) {
		return n + (val === 'o');
	}, 0);

	if (countX == countO) {
		return true;
	} else {
		return false;
	}
}