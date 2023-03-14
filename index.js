//! reverse strings function
/*function solution(str) {
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
	const string = String(b);
	return string;
	//your code here
}

console.log(booleanToString(true));*/


//! вычисление среднего значения массива 
/*function betterThanAverage(classPoints, yourPoints) {
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


//! countX == countO

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
}*/


//! Given an array of integers your solution should find the smallest integer.

// const numArray = [2, 1, 0, 44, -2, 4, -23, 8, 9, -40];


// function findSmallestInt(args) {
// 	let smallArrg = args[0];
// 	for (let i = 0; i < args.length; i++) {
// 		if (args[i] < smallArrg) {
// 			smallArrg = args[i];
// 		}
// 	}
// 	return smallArrg;
// }
// console.log(findSmallestInt(numArray));


//! Given an array of integers.
// const numArray = [2, 1, 0, 44, -2, 4, -23, 8, 9, -40];
// function countPositivesSumNegatives(input) {
// 	if (input && input.length) {
// 		let positiveSum = 0;
// 		let negativeSum = 0;
// 		input.forEach(num => num > 0 ? positiveSum++ : negativeSum += num);
// 		return [positiveSum, negativeSum];
// 	} else {
// 		return [];
// 	}
// }


// console.log(countPositivesSumNegatives(numArray));


//! Return your answer as a number.

/*const numArray = ['2', 1, 0, '44', 2, 4, 23, '8', 9, '40'];
// console.log(numArray);
function sumMix(x) {
	const arr = [];
	x.forEach(item => {
		arr.push(+item);
	});

	return arr.reduce((a, b) => {
		return a + b;
	});
}

console.log(sumMix(numArray));*/


//! Trolls are attacking your comment section!

/*let string = 'Lorem ipsum dolor sit amet consectetur adipisicing.';
function disemvowel(str) {
	let output = "";
	for (let i = 0; i < str.length; i++) {
		if (!"aeiouAEIOU".includes(str[i])) {
			output += str[i];
		}
	}
	return output;
}

console.log(disemvowel(string));


//! Create a function that takes an integer as an argument

function evenOrOdd(number) {
	if (number % 2 == 0) {
		return 'Even';
	} else {
		return 'Odd';
	}
}

console.log(evenOrOdd(2));


//! In this simple assignment you are given a number and have to make it negative.

function makeNegative(num) {
	// Code?
	if (num <= 0) {
		return num;
	} else {
		return num * -1;
	}
}

console.log(makeNegative(0));*/

//! Write a function to split a string and convert it into an array of words.

// function strToArr(str) {
// 	return str.split(' ');
// }
//
// console.log(strToArr('q asd nfh dkir kkkk'));
//
//
// //! The Western Suburbs Croquet Club has two categories of...
//
// const usersArr = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];
//
// function openOrSenior(data) {
// 	function sortMember(member) {
// 		return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
// 	}
// 	return data.map(sortMember);
// }
//
// console.log(openOrSenior(usersArr));
//
//
// //! You will be given an array a and a value x.
//
// const array = ['2', 1, 0, '44', 2, 4, 23, '8', 9, '40'];
//
// function check(a, x) {
// 	// for (let i = 0; i < a.length; i++) {
// 	// 	if (a[i] == x) {
// 	// 		return true;
// 	// 	} else {
// 	// 		return false;
// 	// 	}
// 	// }
// 	if (a.includes(x)) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(check(array, '2'));
//
//
// //! You probably know the "like" system from Facebook...
//
// const arrName = ['Alex'];
//
// function likes(names) {
// 	if (names.length == 0) {
// 		return "no one likes this";
// 	}
//
// 	if (names.length === 1) {
// 		return `${names[0]} likes this`;
// 	}
//
// 	if (names.length === 2) {
// 		return `${names.join(' and ')} like this`;
// 	}
//
// 	if (names.length === 3) {
// 		return `${names.slice(0, 2).join(', ')} and ${names.slice(2)} like this`;
// 	}
//
// 	if (names.length > 3) {
// 		return `${names.slice(0, 2).join(', ')} and ${names.length - 2} others like this`;
// 	}
// }
//
// console.log(likes(arrName));
//
// // An isogram is a word that has no repeating letters, consecutive or non-consecutive.
//
// function isIsogram(str) {
// 	let strNew = str.toLowerCase();
// 	if (strNew.length === 0) {
// 		return true;
// 	}
// 	for (let i = 0; i < strNew.length; ++i) {
// 		for (let j = i + 1; j < strNew.length; ++j) {
// 			if (strNew[i] == strNew[j]) {
// 				return false;
// 			}
// 		}
// 	} return true;
// }
//
// console.log(isIsogram('qwertyy'));
//
// // It's pretty straightforward. Your goal is to create a function that removes...
//
// const del = 'it-camasutra';
//
// function removeChar(str) {
// 	return str.slice(1, -1);
//
// };
// console.log(removeChar(del));
//
// // Build Tower
//
// function towerBuilder(nFloors) {
// 	// build here
// 	let space, star, tower = [];
// 	for (let i = 1; i <= nFloors; i++) {
// 		space = " ".repeat(nFloors - i);
// 		star = "*".repeat((2 * i) - 1);
// 		tower.push(`${space}${star}${space}`);
// 	}
// 	return tower
// }
//
// console.log(towerBuilder(3));
//
// // When writing on Twitter, he is known for almost always capitalizing every word.
//
// String.prototype.toJadenCase = function () {
// 	function bigFirstLetter(str) {
// 		return str.charAt(0).toUpperCase() + str.slice(1);
// 	}
// 	return this.split(' ').map(bigFirstLetter).join(' ');
// };
//
// console.log('asd fhf kxk'.toJadenCase());
//
// function fibanachi(n) {
// 	let arrFib = [];
//
// 	let prev = 0,
// 		next = 1;
// 	for (let i = 0; i < n; i++) {
// 		let temp = next;
// 		next = prev + next;
// 		prev = temp;
// 		arrFib.push(next);
// 	}
// 	console.log(arrFib);
// 	return prev;
// }
// console.log(fibanachi(5));

// The goal is to create a function of two inputs number and power, that "raises" ...

function numberToPower(number, power) {
	console.info(Math.log2(1024));
	// Code here
	let a = 1;
	for (let i = 0; i < power; i++) {
		a *= number;
	}
	console.log(a);
}

numberToPower(10, 6);

// Sentence Smash...


const wordsArr = ['to', 'be', 'or', 'not', 'to', 'be'];

function smash(words) {
	return words.join(' ').trim();
};

console.log(smash(wordsArr));

//You're writing code to control your town's traffic lights..

function updateLight(current) {
	if (current === 'red') {
		return 'green';
	} else if (current === 'green') {
		return 'yellow';
	} else if (current === 'yellow' || 'green') {
		return 'red';
	}
}

console.log(updateLight('red'));

//Convert boolean values to strings 'Yes' or 'No'.

function boolToWord(bool) {
	//...
	return bool ? 'Yes' : 'No';

}
console.log(boolToWord(true));

//Volume of a Cuboid
class Kata {
	static getVolumeOfCuboid(length, width, height) {
		// your code here
		let v = length * width * height;
		return v;
	}
}

console.log(Kata.getVolumeOfCuboid(8, 10, 2));

//Remove exclamation marks

function removeExclamationMarks(s) {
	return s.replaceAll('!', '');
}

console.log(removeExclamationMarks('hsbvisbv! jdvnsojdvn nojn!'));

//String repeat

const string = 'foo';

function repeatStr(n, s) {
	let newString = '';
	for (let i = 0; i < n; i++) {
		newString += s;
	}
	return newString;
}

console.log(repeatStr(5, string));

//Counting sheep...

const arrSheep = [true, true, true, false,
	true, true, true, true,
	true, false, true, false,
	true, false, false, true,
	true, true, true, true,
	false, false, true, true];

function countSheeps(arrayOfSheep) {
	// TODO May the force be with you
	let count = 0;
	for (let i = 0; i < arrayOfSheep.length; i++) {
		if (arrayOfSheep[i] === true) {
			count++;
		}
	}
	return count++;
}

console.log(countSheeps(arrSheep));

//ASCII Total

const strA = 'Mary Had A Little Lamb';

function uniTotal(string) {
	// total up dem unicodes!
	let count = 0;

	for (let i = 0; i < string.length; i++) {
		count += string.charCodeAt(i);
	}
	return count;
}

console.log(uniTotal(strA));

//Square(n) Sum

const arrNum = [];

function squareSum(numbers) {
	let res = [];
	if (numbers.length === 0) {
		return 0;
	}
	for (let i = 0; i < numbers.length; i++) {
		res.push(numbers[i] * numbers[i]);
	}
	return res.reduce((a, b) => a + b);
}

console.log(squareSum(arrNum));

//Are You Playing Banjo?

function areYouPlayingBanjo(name) {
	// Implement me
	if (name[0] === 'R' || name[0] === 'r') {
		return `${name} plays banjo`;
	} else {
		return `${name} does not play banjo`;
	}
}
console.log(areYouPlayingBanjo('Rame'));

//Be Concise I - The Ternary Operator

// function describeAge(age) {
// 	if (age <= 12) {
// 		return "You're a(n) kid";
// 	} else if (age >= 13 && age <= 17) {
// 		return "You're a(n) teenager";
// 	} else if (age >= 18 && age <= 64) {
// 		return "You're a(n) adult";
// 	} else {
// 		return "You're a(n) elderly";
// 	}
// }
function describeAge(age) {
	let s = "You're a(n) ";
	return age < 13 ? `${s}kid`
		: age < 18 ? `${s}teenager`
			: age < 65 ? `${s}adult`
				: `${s}elderly`;
}
console.log(describeAge(12));