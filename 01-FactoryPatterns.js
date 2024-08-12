/*
 * Design Patterns:
 *
 * Design patterns are general solutions to common software problems, which can be adapted to solve specific issues in your projects.
 * They are like templates that guide you in writing code that is flexible, reusable, and easy to maintain. Design patterns are not
 * specific to any programming language and can be applied across different languages.
 *
 * There are three main categories of design patterns:
 * 1. Creational Patterns: Deal with object creation mechanisms.
 * 2. Structural Patterns: Concerned with the composition of classes or objects.
 * 3. Behavioral Patterns: Focus on communication between objects.
 *
 * In this example, we'll start with the Factory Pattern, which is a Creational Pattern.
 */

/*
 * Factory Pattern:
 *
 * The Factory Pattern provides a way to create objects without specifying the exact class of object that will be created.
 * This pattern is useful when you need to generate different types of objects based on certain conditions. It promotes flexibility
 * and reusability, especially in situations where you have to create many different types of objects.
 *
 * Think of a factory as an entity responsible for manufacturing objects. This centralizes the object creation code,
 * so you don't need to use the `new` keyword all over your codebase.
 */

// Constructor functions for Developer and Tester roles
function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

/*
 * EmployeeFactory:
 *
 * This factory is responsible for creating objects of different types (Developer or Tester).
 * The `create` method takes a name and a type and returns an object of the appropriate type.
 */
function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
      default:
        console.error("Invalid type");
        return null; // Return null to indicate failure to create an object
    }
  };
}

// Helper function to introduce the employees
function say() {
  console.log("Hi, I am " + this.name + " and I am a " + this.type);
}

// Instantiate the factory
const employeeFactory = new EmployeeFactory();
const employees = []; // The database

// Create employees using the factory and store them in an array
employees.push(employeeFactory.create("Patrik", 1));
employees.push(employeeFactory.create("Pragya", 1));
employees.push(employeeFactory.create("Bindu", 1));
employees.push(employeeFactory.create("Om", 2));
employees.push(employeeFactory.create("Swati", 2));
employees.push(employeeFactory.create("Papa", 2));

// Introduce each employee
employees.forEach((emp) => {
  say.call(emp);
});

console.log(typeof employees); //--> it will give objects
