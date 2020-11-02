
// String.prototype.distance = function (char) {
//     var index = this.indexOf(char);

//     if (index === -1) {
//         alert(char + " does not appear in " + this);
//     } else {
//         alert(char + " is " + (this.length - index) + " characters from the end of the string!");
//     }
// };


// 01
String.prototype.filter = function(txt) {
	let re = new RegExp('[ ]*' + txt, 'gi');
	return this.replace(re, '');
};

console.log("This house is not nice!".filter('not'));

Array.prototype.bubbleSort = function() {
	let swap = (arr, i, j) => {
		arr[i] = arr[i] + arr[j];
		arr[j] = arr[i] - arr[j];
		arr[i] = arr[i] - arr[j];
	}
	let n = this.length;
	for (let i = 0; i < n-1; i++)
		for (let j = 0; j < n-i-1; j++)
			if (this[j] > this[j+1])
				swap(this, j, j+1);
	return this;
}

console.log([6, 4, 0, 3, -2, 1].bubbleSort());

var car = {type:"Fiat", model:"500", color:"white"};

function Person(name) {
	this.name = name;
}
Person.prototype.teach = function(subject) {
	console.log(`${this.name} is now teaching ${subject}`);
}


var teacher = new Person('Sami Taha');
teacher.teach('WAP');

const person = {
	name: '',
	teach: function(subject) {
		console.log(`${this.name} is now teaching ${subject}`);
	}
};

const teacher2 = Object.create(person);
teacher2.name = 'Sami Taha';
teacher2.teach('WAP');
