/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Main purpose is to build library of examples for most optimized coding styles with the help of community.
 * This file contains a technique to inherit properties from a Type. It's not true inheritance but a technique that gives similar benefits
 */

function Person(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

function Employee(name, age, gender, grade, salary) {
	this.base = Person;
	this.base(name, age, gender);
	
	this.grade = grade;
	this.salary = salary;
}

var emp = new Employee("John Doe", 25, "male", "L23", "unknown");

print(emp.name); //Prints "John Doe"