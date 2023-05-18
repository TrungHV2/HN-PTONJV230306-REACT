import {Person, Student} from '../models/model.js';

var person = new Person(1, 'Tuấn');
console.log(person.getInfo());
var student = new Student(2, 'Thành', 80);
console.log(student.getInfo());