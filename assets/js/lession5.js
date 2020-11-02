/*
	For each of the following, write at least one test case for each function.  They should all be nicely formatted. Do your development in Intellij and also see the further instructions below.    If you follow those instructions you can create an html page with your JavaScript in that page and then post it to your site.
    Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
    Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
    Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
    Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
    Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
    Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
    Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

    Modify the jsfiddle on the map/filter/reduce slide as follows:
    a) multiply each element by 10;
    b) return array with all elements equal to 3;
    c) return the product of all elements;
    ​After you finish, make sure all your functions are in ONE JS file .
Additional points
    Your assignment report should include a comment on how long it took, and describe something that you learned from the exercise or some problem you encountered, etc.
    For each function you write you should show some test output.  E.g., you should have a series of console.log statements such as the following:
        console.log("Expected output of max(20,10) is 10 and  " +
           myFunctionTest(10, function(){return max( 20, 10); );
        the first argument to myFunctionTest should be the expected value for the test
        the second argument to myFunctionTest should be an anonymous function expression containing a single return statement, which returns the result of the function call with the test arguments
        myFunctionTest should return "TEST SUCCEEDED" or "TEST FAILED"
        in addition to myFunctionTest you should use console.assert for the same inputs and expected values for each myFunctionTest
            This is somewhat repetitive to myFunctionTest.  It is another means of testing and validating your code.
    see the sakai Resources folder "lab helpers"/JSintroLab.html for an example of using the myFunctionTest

For example, your output might look like the following:
*/

function max(a, b) {
	return a > b ? a : b;
}
function maxOfThree(a, b, c) {
	let tmp = a > b ? a : b;
	return tmp > c ? tmp : c;
}
function isVowel(c) {
	let a = c.charCodeAt(0);
	return (a > 96 && a < 123) ? true : false;
}
function sum(arr) {
	let rs = 0;
	for (let i = 0; i < arr.length; ++i) {
		rs += arr[i];
	}
	return rs;
}
function multiply(arr) {
	let rs = 0;
	for (let i = 0; i < arr.length; ++i) {
		rs *= arr[i];
	}
	return rs;
}
function reverse(str) {
	let splitString = str.split('');
	let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
	return joinArray;
}

function findLongestWord(str) {
	let splitString = str.split(' ');
	let longestWord = splitString.reduce(
		(longest, currentWord) => currentWord.length > longest.length ? currentWord : longest,
		""
	);
	return longestWord.length;
}
function filterLongWords(str, size) {
	let splitString = str.split(' ');
	const rs = splitString.filter(word => word.length > size)
	return rs;
}

function jsfiddle(arr) {
	console.log(`jsfiddle input: ${arr}`);
	const a = arr.map((elem)=>elem*10);
	console.log(`multiply each element by 10: ${a}`);
	const b = arr.filter((elem)=>elem === 3);
	console.log(`return array with all elements equal to 3: ${b}`);
	const c = arr.reduce((prevVal, elem) => prevVal * elem);
	console.log(`return the product of all elements: ${c}`);
}

function equals(a, b) {
	if (Array.isArray(a) || Array.isArray(b)) {
		if (a.length === b.length && a.every((val, index) => val === b[index])) {
			return true;
		}
		return false;
	}
	return a === b;
}

function assert(expected, fn) {
	let v = eval(fn);
	let rs = equals(v, expected) ? 'TEST SUCCEEDED' : `TEST FAILED. Expected ${expected} found ${v}`;
	console.log(`Expected output of ${fn} is ${v} ${rs}`);
}

assert(20, 'max(20, 10)');
assert(44, 'maxOfThree(5, 4, 44)');
assert(55, 'maxOfThree(55, 4, 44)');
assert(4, 'maxOfThree(55, 4, 44)');
assert(true, 'isVowel(\'a\')');
assert(true, 'isVowel(\'A\')');
assert(10, 'sum([1,2,3,4])');
assert(11, 'sum([1,2,3,4])');
assert('big', 'reverse("gib")');
assert('bgi', 'reverse("gib")');
assert(5, 'findLongestWord("apple and egg")');
assert(3, 'findLongestWord("apple and egg")');
assert(['orange'], 'filterLongWords("orange apple and egg", 5)');
assert(['orange'], 'filterLongWords("orange apple and egg", 4)');

jsfiddle( [1,3,5,3,3]);
