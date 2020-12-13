
//#region 01
function exercise01() {
	String.prototype.filter = function(txt) {
		let re = new RegExp('[ ]*' + txt, 'gi');
		return this.replace(re, '');
	};

	console.log("This house is not nice!".filter('not'));
}
//#endregion

//#region 02
function exercise02() {
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
}
//#endregion

//#region 03
function exercise03() {

	function PersonClass(name) {
		this.name = name;
	}
	function TeacherClass(name) {
		PersonClass.call(this, name);
		this.teach = function(subject) {
			console.log(`${this.name} is now teaching ${subject}`);
		}
	}
	TeacherClass.prototype = new PersonClass();
	var teacher01 = new TeacherClass('Sami Taha 01');
	teacher01.teach('WAP 01');

	// Object.Create
	const Person = {
		name: null
	}
	const Teacher = Object.create(Person);
	Teacher.teach = function(subject) {
		console.log(`${this.name} is now teaching ${subject}`);
	}
	function NewTeacher(name) {
		var o = Object.create(Teacher);
		o.name = name;
		return o;
	}
	var teacher02 = NewTeacher('Sami Taha 02');
	teacher02.teach('WAP 02');
}
//#endregion

//#region 04
function exercise04() {
	function PersonClass(name, age) {  //these will be object properties, not prototype properties
		this.name = name;
		this.age = age;
	}

	PersonClass.prototype.greeting = function () {
		console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
	};
	PersonClass.prototype.salute = function () {
		console.log('Good morning!, and in case I don\'t see you, good afternoon, good evening and good night!');
	}

	function StudentClass(name, age, major) {
		this.major = major;
		PersonClass.call(this, name, age);
	}
	StudentClass.prototype = new PersonClass();
	StudentClass.prototype.greeting = function () {
		console.log(`Hey, my name is ${this.name} and I am studying ${this.major}`);
	};

	function ProfessorClass(name, age, department) {
		this.department = department;
		PersonClass.call(this, name, age);
	}
	ProfessorClass.prototype = new PersonClass();
	ProfessorClass.prototype.greeting = function () {
		console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
	};

	const person01 = new PersonClass('Person 01', 20);
	person01.greeting();
	person01.salute();

	const student01 = new StudentClass('Student 01',21, 'Algorithm');
	student01.greeting();
	student01.salute();

	const professor01 = new ProfessorClass('Professor 01', 40, 'Compro');
	professor01.greeting();
	professor01.salute();

	// Object.Create

	const Person = {
		name: null,
		age: 0,
		greeting: function () {
			console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
		},
		salute: function () {
			console.log('Good morning!, and in case I don\'t see you, good afternoon, good evening and good night!');
		}
	};

	function NewPerson(name, age) {
		const person = Object.create(Person);
		person.name = name;
		person.age = age;
		return person;
	}

	const Student = Object.create(Person);
	Student.major = null;
	Student.greeting = function () {
		console.log(`Hey, my name is ${this.name} and I am studying ${this.major}`);
	}

	function NewStudent(name, age, major) {
		const student = Object.create(Student);
		student.name = name;
		student.age = age;
		student.major = major;
		return student;
	}

	const Professor = Object.create(Person);
	Professor.department = null;
	Professor.greeting = function () {
		console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
	}

	function NewProfessor(name, age, department) {
		const professor = Object.create(Professor);
		professor.name = name;
		professor.age = age;
		professor.department = department;
		return professor;
	}

	const person02 = NewPerson('Person 02', 25);
	person02.greeting();
	person02.salute();

	const student02 = NewStudent('Student 02', 24, "Artificial intelligence");
	student02.greeting();
	student02.salute();

	const professor02 = NewProfessor('Professor 02', 50, 'Economic');
	professor02.greeting();
	professor02.salute();
}
//#endregion

console.log('============= exercise01 =============');
exercise01();
console.log('============= exercise02 =============');
exercise02();
console.log('============= exercise03 =============');
exercise03();
console.log('============= exercise04 =============');
exercise04();
