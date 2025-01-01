// TypeScript Example Code
// Create a class that implements the Person interface
var Student = /** @class */ (function () {
    function Student(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    Student.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name, " and I am studying ").concat(this.course, ".");
    };
    return Student;
}());
// Function to print person details
function printPersonDetails(person) {
    console.log(person.greet());
    console.log("Age: ".concat(person.age));
}
// Create a student instance
var student = new Student("John Doe", 21, "Computer Science");
// Use the function
printPersonDetails(student);
// Example of a utility function
var addNumbers = function (a, b) {
    return a + b;
};
console.log("Sum of 5 and 3 is: ".concat(addNumbers(5, 3)));
