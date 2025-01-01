// TypeScript Example Code

// Define an interface for a person
interface Person {
    name: string;
    age: number;
    greet: () => string;
  }
  
  // Create a class that implements the Person interface
  class Student implements Person {
    name: string;
    age: number;
    course: string;
  
    constructor(name: string, age: number, course: string) {
      this.name = name;
      this.age = age;
      this.course = course;
    }
  
    greet(): string {
      return `Hello, my name is ${this.name} and I am studying ${this.course}.`;
    }
  }
  
  // Function to print person details
  function printPersonDetails(person: Person): void {
    console.log(person.greet());
    console.log(`Age: ${person.age}`);
  }
  
  // Create a student instance
  const student = new Student("John Doe", 21, "Computer Science");
  
  // Use the function
  printPersonDetails(student);
  
  // Example of a utility function
  const addNumbers = (a: number, b: number): number => {
    return a + b;
  };
  
  console.log(`Sum of 5 and 3 is: ${addNumbers(5, 3)}`);
  