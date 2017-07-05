//function

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    console.log(2017-this.yearOfBirth)
}

Person.prototype.lastName = 'karatas';

var busra = new Person('busra', 1992, 'ce');
var tutku = new Person('busra', 1992, 'marketing');
busra.calculateAge();
tutku.calculateAge();

console.log(busra.lastName);
console.log(tutku.lastName);

//Object.create
var personProto = {
    calculateAge: function () {
        console.log(2017 - this.yearOfBirth)
    }
};

var tutkuObj = Object.create(personProto);
tutkuObj.name = 'tut';
tutkuObj.yearOfBirth = 1993;
tutkuObj.job = 'thief';

var busraObj = Object.create(personProto,{
    name: {value: 'busra'},
    yearOfBirth: {value: 1969},
    job:{value: 'dead loved'}
});

