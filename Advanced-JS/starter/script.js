// Function Constructor

/*
var Person = function (name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person.prototype.calculateAge = function () {
	console.log(2020 - this.yearOfBirth);
};

var john = new Person('John', 1990, 'Teacher');

john.calculateAge();
*/

// Object.Create to inhreit from a prototype

var personProto = {
	calculateAge : function () {
		console.log(2020 - this.yearOfBirth);
	}
};

var john = Object.create(personProto, {
	name        : { value: 'John' },
	yearOfBirth : { value: 1990 },
	job         : { value: 'designer' }
});
