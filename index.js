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