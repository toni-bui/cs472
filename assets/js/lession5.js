
function max(a, b) {
	return a > b ? a : b;
}

function maxOfThree(a, b, c) {
	return max(max(a, b), c);
}

function isVowel(c) {
	const vowels = ['a', 'e', 'i','o','u'];
	return vowels.includes(c);
}

function sum(arr) {
	return arr.reduce((accum, elem) => accum + elem);
}

function multiply(arr) {
	return arr.reduce((accum, elem) => accum * elem);
}

function reverse(str) {
	return str.split('').reverse().join();
}

function findLongestWord(str) {
	let longestWord = str.split(' ').reduce(
		(longest, currentWord) => currentWord.length > longest.length ? currentWord : longest,
		""
	);
	return longestWord.length;
}

function filterLongWords(str, size) {
	return str.split(' ').filter(word => word.length > size);
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
